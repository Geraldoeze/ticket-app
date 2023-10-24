import React from "react";
import DefaultLayout from "../../../layout/DefaultLayout";
import BreadCrumb from "../../../components/BreadCrumb";
import {
  FormGroup,
  Button,
  Checkbox,
  Input,
  Textarea,
} from "../../../components/form";
import { Container, Header, Section } from "../../../components/container";
import data from "../../../data/states-and-lga.json";
import ReactDatePicker from "react-datepicker";

import { useForm, FormProvider } from "react-hook-form";
import Select from "../../../components/form/customSelect";

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

export default function EditEmployee() {
  const [startDate, setStartDate] = React.useState(new Date());
  const [options] = React.useState<Option[]>(data);
  const [employeeData, setEmployeeData] = React.useState({
    accountType: "Teacher",
    firstName: "James",
    middleName: "Hardin",
    lastName: "Smith",
    gender: "Male",
    email: "james@gmail.com",
    phoneNumber: "08090700709",
    dateOfBirth: startDate,
    religion: "Christianity",
    stateOfOrigin: "Lagos",
    stateOfResidence: "Lagos",
    city: "Ikeja",
    ethnicity: "Igbo",
    councilOfOrigin: "Ifelodun lga",
    councilOfResidence: "Ifelodun",
    address: "Plot 303 avenue way",
  });
  const [lgas, setLgas] = React.useState<string[]>([]);
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
        pageName="New Student"
        homeRoute="/app/students"
        homeRouteName="Students"
      />
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Container>
            <Section>
              <Header variant="h2">Employee's Personal Informtion</Header>

              {/* Role and First Name */}
              <FormGroup>
                <Select
                  label="Employee's Role"
                  name="grade"
                  rules={{ required: "Please select a role" }}
                  defaultValue={employeeData.accountType}
                >
                  <option value={employeeData.accountType}>
                    {employeeData.accountType
                      ? employeeData.accountType
                      : "Select grade"}
                  </option>
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
                  defaultValue={employeeData.firstName}
                  rules={{ required: "First Name is required" }}
                />
              </FormGroup>

              {/* Middle and Last Name */}
              <FormGroup>
                <Input
                  label="Middle Name"
                  name="middleName"
                  placeholder="Middle Name"
                  defaultValue={employeeData.middleName}
                  rules={{ required: false }}
                />
                <Input
                  label="Last Name"
                  name="lastName"
                  placeholder="Last Name"
                  defaultValue={employeeData.lastName}
                  rules={{ required: "Last Name is required" }}
                />
              </FormGroup>

              {/* Gender and Date Of birth */}
              <FormGroup>
                <Select
                  label="Gender"
                  name="gender"
                  rules={{ required: "Please select a gender" }}
                  defaultValue={employeeData.gender}
                >
                  <option value={employeeData.gender}>
                    {employeeData ? employeeData.gender : "Select a gender..."}
                  </option>
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
                    onChange={(date: Date) => setStartDate(date)}
                    className={`w-full rounded border border-stroke bg-gray py-3 px-4.5 
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
                  defaultValue={employeeData.email}
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
                  defaultValue={employeeData.phoneNumber}
                  rules={{
                    required: false,
                    pattern: {
                      value: /^\+?\d{11,14}$/,
                      message: "Invalid phone number",
                    },
                  }}
                />
              </FormGroup>

              {/* Student's religion and ethnicity */}
              <FormGroup>
                <Select
                  label="Religion"
                  name="religion"
                  rules={{ required: false }}
                  defaultValue={employeeData.religion}
                >
                  <option value={employeeData.religion}>
                    {employeeData.religion
                      ? employeeData.religion
                      : "Select a religion..."}
                  </option>
                  <option value="christianity">Christianity</option>
                  <option value="islam">Islam</option>
                  <option value="others">Others</option>
                </Select>
                <Input
                  label="Ethnicity"
                  name="ethnicity"
                  placeholder="Employee's Ethnicity/Tribe"
                  defaultValue={employeeData.ethnicity}
                  rules={{ required: false }}
                />
              </FormGroup>

              {/* Student's state and LGA of origin */}
              <FormGroup>
                <Select
                  label="State of Origin"
                  name="stateOfOrigin"
                  rules={{ required: false }}
                  defaultValue={employeeData.stateOfOrigin}
                  onChange={handleStateChange}
                >
                  <option value={employeeData.stateOfOrigin}>
                    {employeeData.stateOfOrigin
                      ? employeeData.stateOfOrigin
                      : "Select..."}
                  </option>
                  {options.map((item) => (
                    <option key={item.code} value={item.code}>
                      {item.name}
                    </option>
                  ))}
                </Select>
                <Select
                  label="LGA of Origin"
                  name="councilOfOrigin"
                  defaultValue={employeeData.councilOfOrigin}
                  rules={{ required: false }}
                >
                  <option value={employeeData.councilOfOrigin}>
                    {employeeData.councilOfOrigin
                      ? employeeData.councilOfOrigin
                      : "Select..."}
                  </option>
                  {lgas.map((lga) => (
                    <option key={lga} value={lga}>
                      {lga}
                    </option>
                  ))}
                </Select>
              </FormGroup>

              {/* Student's state and city of residence */}
              <FormGroup>
                <Select
                  label="State of Residence"
                  name="stateOfResidence"
                  rules={{ required: false }}
                  defaultValue={employeeData.stateOfResidence}
                >
                  <option value={employeeData.stateOfResidence}>
                    {employeeData.stateOfResidence
                      ? employeeData.stateOfResidence
                      : "Select..."}
                  </option>
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
                  defaultValue={employeeData.city}
                  rules={{ required: false }}
                />
              </FormGroup>

              <Textarea
                label="Address"
                name="address"
                placeholder="Enter employee's address"
                defaultValue={employeeData.address}
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
                Save
              </Button>
            </Section>
          </Container>
        </form>
      </FormProvider>
    </DefaultLayout>
  );
}
