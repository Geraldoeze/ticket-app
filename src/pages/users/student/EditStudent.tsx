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
  firstName: string;
  middleName: string;
  lastName: string;
  gender: string;
  email: string;
  phoneNumber: string;
  dateOfBirth: Date;
  grade: string;
  religion: string;
  stateOfOrigin: string;
  stateOfResidence: string;
  city: string;
  ethnicity: string;
  councilOfOrigin: string;
  councilOfResidence: string;
  address: string;
  nameOfParent: string;
  genderOfParent: string;
  occupationOfParent: string;
  typeOfRelationship: string;
  emailOfParent: string;
  phoneNumberOfParent: string;
  stateOfParent: string;
  cityOfParent: string;
  addressOfParent: string;
  primaryContact: boolean;
};

interface Option {
  code: string;
  name: string;
  lgas: string[];
}

export default function EditStudent() {
  const [startDate, setStartDate] = React.useState(new Date());
  const [options] = React.useState<Option[]>(data);
  const [studentData, setStudentData] = React.useState({
    firstName: 'James',
    middleName: 'Hardin',
    lastName: 'Smith',
    gender: 'Male',
    email: 'james@gmail.com',
    phoneNumber: '08090700709',
    dateOfBirth: startDate,
    grade: '2',
    religion: 'Christianity',
    stateOfOrigin: 'Lagos',
    stateOfResidence: 'Lagos',
    city: 'Ikeja',
    ethnicity: 'Igbo',
    councilOfOrigin: 'Ifelodun lga',
    councilOfResidence: 'Ifelodun',
    address: 'Plot 303 avenue way',
    nameOfParent: 'Williams Hardin',
    genderOfParent: 'Male',
    occupationOfParent: 'Engineer',
    typeOfRelationship: 'Father',
    emailOfParent: 'williamshardin@gmail.com',
    phoneNumberOfParent: '07065432135',
    stateOfParent: 'Anambra',
    cityOfParent: 'Anambra south',
    addressOfParent: 'Anambra south 201',
    primaryContact: true,
  });
  const [lgas, setLgas] = React.useState<string[]>([]);
  const methods = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    const { errors } = methods.formState;
    console.log(data)

    // Check if there are any validation errors
    if (Object.keys(errors).length > 0) {
      console.log("Validation errors:", errors);
      return; // Exit the function if there are errors
    }

    // All required fields are filled correctly, perform the submission
    setNextStep(true);
  };

  const onSecondSubmit = (data: FormData) => {
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

 
  const [nextStep, setNextStep] = React.useState(false);
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
        <form
          onSubmit={methods.handleSubmit(nextStep ? onSecondSubmit : onSubmit)}
        >
          {!nextStep && (
            <Container>
              <Section>
                <Header variant="h2">Personal Informtion</Header>
                {/* First and Middle Name */}
                <FormGroup>
                  <Input
                    label="First Name"
                    name="firstName"
                    placeholder="First Name"
                    defaultValue={studentData.firstName}
                    rules={{ required: "First Name is required" }}
                  />

                  <Input
                    label="Middle Name"
                    name="middleName"
                    placeholder="Middle Name"
                    defaultValue={studentData.middleName}
                    rules={{ required: false }}
                  />
                </FormGroup>

                {/* Last Name and Gender */}
                <FormGroup>
                  <Input
                    label="Last Name"
                    name="lastName"
                    placeholder="Last Name"
                    defaultValue={studentData.lastName}
                    rules={{ required: "Last Name is required" }}
                  />

                  <Select
                    label="Gender"
                    name="gender"
                    rules={{ required: "Please select a gender" }}
                    defaultValue={studentData.gender}
                  >
                    <option value={studentData.gender}>{studentData ? studentData.gender : 'Select a gender...'}</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="others">Others</option>
                  </Select>
                </FormGroup>

                {/* Email and Phone Number */}
                <FormGroup>
                  <Input
                    label="Email"
                    name="email"
                    defaultValue={studentData.email}
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
                    defaultValue={studentData.phoneNumber}
                    rules={{
                      required: false,
                      pattern: {
                        value: /^\+?\d{11,14}$/,
                        message: "Invalid phone number",
                      },
                    }}
                  />
                </FormGroup>
                {/* Student's Age and grade */}

                <FormGroup>
                  <div className="w-full">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Date of Birth
                    </label>
                    <ReactDatePicker
                      selected={startDate}
                      onChange={(date:Date) => setStartDate(date)}
                      className={`w-full rounded border border-stroke bg-gray py-3 px-4.5 
           text-black focus:border-primary focus-visible:outline-none dark:border-strokedark 
           dark:bg-meta-4 dark:text-white dark:focus:border-primary`}
                    />
                  </div>
                  <Select
                    label="Student's Grade/Class"
                    name="grade"
                    rules={{ required: "Please select student's grade" }}
                    defaultValue={studentData.grade}
                  >
                    <option value={studentData.grade}>{studentData.grade ? studentData.grade: 'Select grade'}</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </Select>
                </FormGroup>

                {/* Student's religion and ethnicity */}
                <FormGroup>
                  <Select
                    label="Religion"
                    name="religion"
                    rules={{ required: false }}
                    defaultValue={studentData.religion}
                  >
                    <option value={studentData.religion}>{studentData.religion ? studentData.religion:'Select a religion...'}</option>
                    <option value="christianity">Christianity</option>
                    <option value="islam">Islam</option>
                    <option value="others">Others</option>
                  </Select>
                  <Input
                    label="Ethnicity"
                    name="ethnicity"
                    placeholder="Student's Ethnicity/Tribe"
                    defaultValue={studentData.ethnicity}
                    rules={{ required: false }}
                  />
                </FormGroup>

                {/* Student's state and LGA of origin */}
                <FormGroup>
                  <Select
                    label="State of Origin"
                    name="stateOfOrigin"
                    rules={{ required: false }}
                    defaultValue={studentData.stateOfOrigin}
                    onChange={handleStateChange}
                  >
                    <option value={studentData.stateOfOrigin}>{studentData.stateOfOrigin ? studentData.stateOfOrigin: 'Select...'}</option>
                    {options.map((item) => (
                      <option key={item.code} value={item.code}>
                        {item.name}
                      </option>
                    ))}
                  </Select>
                  <Select
                    label="LGA of Origin"
                    name="councilOfOrigin"
                    defaultValue={studentData.councilOfOrigin}
                    rules={{ required: false }}
                  >
                  <option value={studentData.councilOfOrigin}>{studentData.councilOfOrigin ? studentData.councilOfOrigin: 'Select...'}</option>
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
                    defaultValue={studentData.stateOfResidence}
                  >
                    <option value={studentData.stateOfResidence}>{studentData.stateOfResidence ? studentData.stateOfResidence: 'Select...'}</option>
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
                    defaultValue={studentData.city}
                    rules={{ required: false }}
                  />
                </FormGroup>

                <Textarea
                  label="Address"
                  name="address"
                  placeholder="Enter student's address"
                  defaultValue={studentData.address}
                  rules={{ required: "Student's address is required" }}
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
          )}

          {nextStep && (
            <Container>
              <Section>
                <Header variant="h2">
                  Student's Parent/Guardian Informtion
                </Header>
                <FormGroup>
                  <Input
                    label="Full Name"
                    name="nameOfParent"
                    placeholder="Enter Parent's Full Name"
                    defaultValue={studentData.nameOfParent}
                    rules={{ required: "Name is required" }}
                  />
                  <Select
                    label="Relationship"
                    name="typeOfRelationship"
                    defaultValue={studentData.typeOfRelationship}
                    rules={{ required: "This field is required" }}
                  >
                    <option value={studentData.typeOfRelationship}>{studentData ? studentData.typeOfRelationship: 'Select...'}</option>
                    <option>Father</option>
                    <option>Mother</option>
                    <option>Guardian</option>
                    <option>Relative</option>
                  </Select>
                </FormGroup>

                <FormGroup>
                  <Select
                    label="Gender"
                    name="genderOfParent"
                    defaultValue={studentData.genderOfParent}
                    rules={{ required: "Please select a gender" }}
                  >
                    <option value={studentData.genderOfParent}>{studentData ? studentData.genderOfParent:'Select a gender...'}</option>
                    <option>Male</option>
                    <option>Female</option>
                  </Select>
                  <Select
                    label="Occupation"
                    name="occupationOfParent"
                    defaultValue={studentData.occupationOfParent}
                    rules={{ required: "Please select an occupation" }}
                  >
                    <option value={studentData.occupationOfParent}>{studentData ? studentData.occupationOfParent:'Select an occupation...'}</option>
                    <option>Teacher</option>
                    <option>Civil Servant</option>
                    <option>Engineer</option>
                    <option>Others</option>
                  </Select>
                </FormGroup>

                <FormGroup>
                  <Input
                    label="Email"
                    name="emailOfParent"
                    placeholder="Enter Parent's Email Address"
                    defaultValue={studentData.emailOfParent}
                    rules={{ required: false }}
                  />

                  <Input
                    label="Phone Number"
                    name="phoneNumberOfParent"
                    placeholder="Enter Parent's Phone Number"
                    defaultValue={studentData.phoneNumberOfParent}
                    rules={{ required: "This field is required" }}
                  />
                </FormGroup>

                <FormGroup>
                  <Select
                    label="State"
                    name="stateOfParent"
                    rules={{ required: false }}
                    defaultValue={studentData.stateOfParent}
                  >
                   <option value={studentData.stateOfParent}>{studentData ? studentData.stateOfParent:'Select a state...'}</option>
                    {options.map((item) => (
                      <option key={item.code} value={item.name}>
                        {item.name}
                      </option>
                    ))}
                  </Select>
                  <Input
                    label="City"
                    name="cityOfParent"
                    placeholder="city"
                    defaultValue={studentData.cityOfParent}
                    rules={{ required: false }}
                  />
                </FormGroup>

                <Textarea
                  label="Address"
                  name="addressOfParent"
                  placeholder="Enter parent's address"
                  defaultValue={studentData.addressOfParent}
                  rules={{ required: "Parent's address is required" }}
                />

                <Checkbox
                  label="Make Primary Contact"
                  name="primaryContact"
                  defaultValue={studentData.primaryContact}
                  rules={{
                    required: false,
                  }}
                />
              </Section>

              <Section classNames="flex gap-6 justify-between">
                <Button
                  classNames="w-25"
                  variant="primary"
                  onClick={() => setNextStep(false)}
                  type="button"
                  // disabled={isLoading}
                  // isLoading={isLoading}
                  isLoadingText="Saving..."
                >
                  Back
                </Button>
                <Button
                  classNames="w-25"
                  variant="primary"
                  type="submit"
                  onClick={() => console.log("lol")}
                  // disabled={isLoading}
                  // isLoading={isLoading}
                  isLoadingText="Saving..."
                >
                  Save
                </Button>
              </Section>
            </Container>
          )}
        </form>
      </FormProvider>
    </DefaultLayout>
  );
}