import React from "react";
import DefaultLayout from "../../../layout/DefaultLayout";
import BreadCrumb from "../../../components/BreadCrumb";
import {
  FormGroup,
  Button,
  Input,
  Textarea,
} from "../../../components/form";
import { Container, Header, Section } from "../../../components/container";
import data from "../../../data/states-and-lga.json";
import ReactDatePicker from "react-datepicker";

import { useForm, FormProvider } from "react-hook-form";
import Select from "../../../components/form/customSelect";
import { ROUTES_CONFIG } from "../../../layout/config";

type FormData = {
  accountType: string;
  firstName: string;
  middleName: string;
  lastName: string;
  gender: string;
  email: string;
  phoneNumber: string;
  dateOfBirth: Date;
  religion: string;
  stateOfOrigin: string;
  stateOfResidence: string;
  city: string;
  ethnicity: string;
  councilOfOrigin: string;
  councilOfResidence: string;
  address: string;
};

interface Option {
  code: string;
  name: string;
  lgas: string[];
}

export default function NewEmployee() {
  const [startDate, setStartDate] = React.useState(new Date());
  const [options] = React.useState<Option[]>(data);
  const [lgas, setLgas] = React.useState<string[]>([]);
  const [selected, setSelected] = React.useState<string>("");
  const methods = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  const handleStateChange = (selectedValue: string) => {
    // Find the selected state object from the data array
    const selectedStateObject = data.find(
      (item) => item.code === selectedValue
    );
    if (selectedStateObject) {
      const { name, lgas } = selectedStateObject;
      setSelected(name);
      setLgas(lgas);
      methods.setValue("stateOfOrigin", name);
    }
  };

  React.useEffect(() => {
    if (startDate) {
      methods.setValue("dateOfBirth", startDate);
    }
  }, [startDate]);
  return (
    <DefaultLayout>
      <BreadCrumb
        pageName="New Employee"
        homeRoute={ROUTES_CONFIG.admin.entities.employees}
        homeRouteName="Students"
      />
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Container>
            <Section>
              <Header variant="h2">Employee's Personal Information</Header>
              {/* Employee's Role and First Name */}
              <FormGroup>
                <Select
                  label="Employee Role"
                  name="accountType"
                  rules={{ required: "Please select a role" }}
                >
                  <option value="">Select...</option>
                  <option>Teacher</option>
                  <option value="Accountant">Accountant (Burser)</option>
                  <option>Principal</option>
                  <option>Admin</option>
                  <option>Head Teacher</option>
                  <option>Security</option>
                  <option>Lab Technician</option>
                  <option>Gardener</option>
                </Select>

                <Input
                  label="First Name"
                  name="firstName"
                  placeholder="First Name"
                  rules={{ required: "First Name is required" }}
                />
              </FormGroup>
              {/*  Middle and Last Name */}
              <FormGroup>
                <Input
                  label="Last Name"
                  name="lastName"
                  placeholder="Last Name"
                  rules={{ required: "Last Name is required" }}
                />

                <Input
                  label="Middle Name"
                  name="middleName"
                  placeholder="Middle Name"
                  rules={{ required: false }}
                />
              </FormGroup>

              {/*  Gender and Date Of Birth */}
              <FormGroup>
                <Select
                  label="Gender"
                  name="gender"
                  rules={{ required: "Please select a gender" }}
                >
                  <option value="">Select a gender...</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="others">Others</option>
                </Select>

                <div className="w-full">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Date of Birth
                  </label>
                  <ReactDatePicker
                    selected={startDate}
                    onChange={(date:Date) => setStartDate(date)}
                    className={`z-999999 w-full rounded border border-stroke bg-gray py-3 px-4.5 
           text-black focus:border-primary focus-visible:outline-none dark:border-strokedark 
           dark:bg-meta-4 dark:text-white dark:focus:border-primary`}
                  />
                </div>
              </FormGroup>

              {/* Email and Phone Number */}
              <FormGroup>
                <Input
                  label="Email"
                  name="email"
                  placeholder="employee@gmail.com"
                  rules={{
                    required: false,
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email address",
                    },
                  }}
                />
                <Input
                  label="Phone Number"
                  name="phone"
                  placeholder="+23480123456789"
                  rules={{
                    required: false,
                    pattern: {
                      value: /^\+?\d{11,14}$/,
                      message: "Invalid phone number",
                    },
                  }}
                />
              </FormGroup>

              {/*  religion and ethnicity */}
              <FormGroup>
                <Select
                  label="Religion"
                  name="religion"
                  rules={{ required: false }}
                >
                  <option value="">Select a religion...</option>
                  <option value="christianity">Christianity</option>
                  <option value="islam">Islam</option>
                  <option value="others">Others</option>
                </Select>
                <Input
                  label="Ethnicity"
                  name="ethnicity"
                  placeholder="Employee's Ethnicity/Tribe"
                  rules={{ required: false }}
                />
              </FormGroup>

              {/*  state and LGA of origin */}
              <FormGroup>
                <Select
                  label="State of Origin"
                  name="stateOfOrigin"
                  rules={{ required: false }}
                  onChange={handleStateChange}
                >
                  <option>{selected === "" ? "Select..." : selected}</option>
                  {options.map((item) => (
                    <option key={item.code} value={item.code}>
                      {item.name}
                    </option>
                  ))}
                </Select>
                <Select
                  label="LGA of Origin"
                  name="councilOfOrigin"
                  rules={{ required: false }}
                >
                  {lgas.map((lga) => (
                    <option key={lga} value={lga}>
                      {lga}
                    </option>
                  ))}
                </Select>
              </FormGroup>

              {/*  state and city of residence */}
              <FormGroup>
                <Select
                  label="State of Residence"
                  name="stateOfResidence"
                  rules={{ required: false }}
                >
                  {options.map((item) => (
                    <option key={item.code} value={item.name}>
                      {item.name}
                    </option>
                  ))}
                </Select>
                <Input
                  label="City"
                  name="city"
                  placeholder="city"
                  rules={{ required: false }}
                />
              </FormGroup>

              <Textarea
                label="Address"
                name="address"
                placeholder="Enter employee's address"
                rules={{ required: "Employee's address is required" }}
              />
            </Section>

            <Section>
              <Button
                classNames="w-25"
                variant="primary"
                type="submit"
                onClick={() => console.log("next")}
                // disabled={isLoading}
                // isLoading={isLoading}
                isLoadingText="Saving..."
              >
                Next
              </Button>
            </Section>
          </Container>
        </form>
      </FormProvider>
    </DefaultLayout>
  );
}

/**
 * 
ID
Name
User Type(school(admin & Support), student, staff, parent, support, third party)
Password
Username
Login as
Token
Refresh Token
Last Login Time
Access Level
Privileges [{resouce_name: [read, write, all], 
Status(unverified, verified, transfered, suspended, deleted)


Teacher
Teacher ID
User (Ref)
First Name
Middle Name
Last Name
Gender
Date of Birth(dob)
State(Region)
Country
Admission Date
Email
Phone Number
Class(grade)
Address
Photo
Emergency Contact
Physician Contact

Other Fields added by school
Religion
Race
Ethnicity
Local Government Area
Section

Allergies
Medications
Treatments
Disabilities
Sport Participation Approvals
Exemption Conditions
Other Conditions
Emergency Medical Permissions


 */
