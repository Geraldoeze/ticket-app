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
import { useForm, FormProvider, useFieldArray } from "react-hook-form";
import Select from "../../../components/form/customSelect";
import { ROUTES_CONFIG } from "../../../layout/config";
import { generateUniqueId } from "../../../utils";
import { RiParentLine } from "react-icons/ri";
import Warning from "../../../components/modal/Warning";
import { BsTrash3Fill } from "react-icons/bs";
import { ButtonEvent, ButtonEventGroup } from "../../../components/button";

type ParentData = {
  name: string;
  uid: string;
  gender: string;
  occupation: string;
  relationship: string;
  email: string;
  phoneNumber: string;
  state: string;
  city: string;
  address: string;
  primaryContact: boolean;
};

type StudentFormData = {
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
  parent: ParentData[];
};

interface Option {
  code: string;
  name: string;
  lgas: string[];
}
interface ParentDetailsProps {
  index: number;
  parent: ParentData;
  onEdit: () => void;
  onDelete: (index: number) => void;
}

const ParentDetails: React.FC<ParentDetailsProps> = ({
  parent,
  index,
  onEdit,
  onDelete,
}) => {
   const handleDelete = () => {
    onDelete(index);
  };
  return (
    <div>
      <figure className="relative h-60 w-60 border-stroke bg-[#e2e8f038] pt-2 shadow-lg dark:bg-[#1e293b]">
        <RiParentLine className="mx-auto h-20 w-20" />
        <div className="space-y-4 p-4 pt-6 text-left">
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">
              <p>Full Name: {parent.name}</p>
            </div>
            <div className="text-slate-700 dark:text-slate-500">
              <p>Relationship: {parent.relationship}</p>
            </div>
          </figcaption>

          <div className="absolute left-3 right-3 bottom-3">
            <div className="flex justify-between">
              <button
                onClick={onEdit}
                className="w-16 rounded-full border border-primary dark:bg-[#1e293b] bg-white text-primary hover:bg-primary dark:hover:bg-primary hover:text-white"
              >
                Edit
              </button>
              <button
                onClick={handleDelete}
                className="w-16 rounded-full border border-[#d44f45] dark:bg-[#1e293b] text-[#d44f45] bg-white hover:bg-[#d44f45] dark:hover:bg-[#d44f45] hover:text-white"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </figure>
    </div>
  );
};

export default function NewStudent() {
  const [nextStep, setNextStep] = React.useState(false);
  const [startDate, setStartDate] = React.useState(new Date());
  const [options] = React.useState<Option[]>(data);
  const [lgas, setLgas] = React.useState<string[]>([]);
  const [showParentForm, setShowParentForm] = React.useState(true);
  const [showParent, setShowParent] = React.useState(false);
  const [deleteModal, setDeleteModal] = React.useState(false);
  const [deleteIndex, setDeleteIndex] = React.useState<number>(0)
  const [parentData, setParentData] = React.useState<
    StudentFormData["parent"]
  >([]);
  const isInitialMount = React.useRef(true);
  const [selected, setSelected] = React.useState<string>("");
  const methods = useForm<StudentFormData>();
  const control = methods.control;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "parent",
  }); // Add state to control the visibility of the parent form
  const [newlyAddedIndex, setNewlyAddedIndex] = React.useState(-1);

  const handleAddParent = () => {
    const parentId = generateUniqueId();
    append({uid: parentId });
    setNewlyAddedIndex(fields.length);
  };
  // Function to handle saving the parent data
  const onSaveParent = (data: StudentFormData["parent"]) => {
    // Update the parentData state with the new parent data
    setParentData(data);
    setShowParentForm(false);
  };

  const handleEditParent = (id: string) => {
    // Find the index of the parent in the parentData state using the provided id
    const index = parentData.findIndex((parent) => parent.uid === id);
    console.log(newlyAddedIndex);
    console.log(index);

    if (index !== -1) {
      setNewlyAddedIndex(index);

      // Get the parent's data from the parentData state
      const parentToEdit = parentData[index];
      console.log(parentToEdit);

      // Set the initial data of the parent form with the data of the selected parent
      methods.setValue(`parent[${index}]`, parentToEdit);
      setShowParent(false);
    }
  };

  const handleDeleteParent = (index: number) => {
    remove(index);
  };

  const parentFormSubmit = (data: StudentFormData) => {
    const { errors } = methods.formState;

    // Check if there are any validation errors
    if (Object.keys(errors).length > 0) {
      console.log("Validation errors:", errors);
      return; 
    }

    // All required fields are filled correctly, perform the submission
    var values = methods.getValues();
    let arr = [];
    arr = values.parent;
    onSaveParent(arr);
    setShowParent(true);
  };

  const onSubmit = (data: StudentFormData) => {
    const { errors } = methods.formState;

    // Check if there are any validation errors
    if (Object.keys(errors).length > 0) {
      console.log("Validation errors:", errors);
      return; // Exit the function if there are errors
    }

    // All required fields are filled correctly, perform the submission
    setNextStep(true);
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
  React.useEffect(() => {
    // Skip the first execution (initial mount)
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      handleAddParent();
    }
  }, []);
  return (
    <DefaultLayout>
      <BreadCrumb
        pageName="New Student"
        homeRoute={ROUTES_CONFIG.admin.entities.students}
        homeRouteName="Students"
      />

      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(
            nextStep ? parentFormSubmit : onSubmit
          )}
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
                    rules={{ required: "First Name is required" }}
                  />

                  <Input
                    label="Middle Name"
                    name="middleName"
                    placeholder="Middle Name"
                    rules={{ required: false }}
                  />
                </FormGroup>

                {/* Last Name and Gender */}
                <FormGroup>
                  <Input
                    label="Last Name"
                    name="lastName"
                    placeholder="Last Name"
                    rules={{ required: "Last Name is required" }}
                  />

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
                </FormGroup>

                {/* Email and Phone Number */}
                <FormGroup>
                  <Input
                    label="Email"
                    name="email"
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
                {/* Student's Age and grade */}

                <FormGroup>
                  <div className="w-full">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Date of Birth
                    </label>
                    <ReactDatePicker
                      selected={startDate}
                      onChange={(date: Date) => setStartDate(date)}
                      className={`z-999999 w-full rounded border border-stroke bg-gray py-3 px-4.5 
                      text-black focus:border-primary focus-visible:outline-none dark:border-strokedark 
                      dark:bg-meta-4 dark:text-white dark:focus:border-primary`}
                    />
                  </div>
                  <Select
                    label="Student's Grade/Class"
                    name="grade"
                    rules={{ required: "Please select student's grade" }}
                  >
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
                  >
                    <option value="">Select a religion...</option>
                    <option value="christianity">Christianity</option>
                    <option value="islam">Islam</option>
                    <option value="others">Others</option>
                  </Select>
                  <Input
                    label="Ethnicity"
                    name="ethnicity"
                    placeholder="Student's Ethnicity/Tribe"
                    rules={{ required: false }}
                  />
                </FormGroup>

                {/* Student's state and LGA of origin */}
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

                {/* Student's state and city of residence */}
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
                  placeholder="Enter student's address"
                  rules={{ required: "Student's address is required" }}
                />
              </Section>

              <Section>
                <Button
                  classNames="w-25"
                  variant="primary"
                  type="submit"
                  // disabled={isLoading}
                  // isLoading={isLoading}
                  isLoadingText="Saving..."
                >
                  Next
                </Button>
              </Section>
            </Container>
          )}

          {nextStep && (
            <Container>
              <Section>
                <Header variant="h2">
                  Student's Parent/Guardian Information
                </Header>
                <div>
                  {showParent ? (
                    <div>
                      <ButtonEventGroup>
                      <ButtonEvent variant="add" onClick={() => {
                          setShowParent(false);
                          handleAddParent();
                        }}>
                      Add New Parent
                     </ButtonEvent>
                      </ButtonEventGroup>

                      <div className="flex flex-wrap gap-6 mt-6">
                        {parentData.map((val, index) => (
                          <ParentDetails
                            key={val.uid}
                            index={index}
                            parent={val}
                            onEdit={() => handleEditParent(val.uid)}
                            onDelete={() => {
                              setDeleteIndex(index)
                              setDeleteModal(true)}}
                          />
                        ))}
                      </div>
                      
                    </div>
                  ) : (
                    <div>
                      {/* Parent Form */}

                      <FormGroup>
                        <Input
                          label="Full Name"
                          name={`parent[${newlyAddedIndex}].name`}
                          placeholder="Enter Parent's Full Name"
                          rules={{ required: "Name is required" }}
                        />
                        <Select
                          label="Relationship"
                          name={`parent[${newlyAddedIndex}].relationship`}
                          rules={{ required: "Please select a relationship" }}
                        >
                          <option value="">Select...</option>
                          <option>Father</option>
                          <option>Mother</option>
                          <option>Guardian</option>
                          <option>Relative</option>
                        </Select>
                      </FormGroup>

                      <FormGroup>
                        <Select
                          label="Gender"
                          name={`parent[${newlyAddedIndex}].gender`}
                          rules={{ required: "Please select a gender" }}
                        >
                          <option value="">Select a gender...</option>
                          <option>Male</option>
                          <option>Female</option>
                        </Select>
                        <Select
                          label="Occupation"
                          name={`parent[${newlyAddedIndex}].occupation`}
                          rules={{ required: "Please select an occupation" }}
                        >
                          <option value="">Select an occupation...</option>
                          <option>Teacher</option>
                          <option>Civil Servant</option>
                          <option>Engineer</option>
                          <option>Others</option>
                        </Select>
                      </FormGroup>

                      <FormGroup>
                        <Input
                          label="Email"
                          name={`parent[${newlyAddedIndex}].email`}
                          placeholder="Enter Parent's Email Address"
                          rules={{ required: false }}
                        />

                        <Input
                          label="Phone Number"
                          name={`parent[${newlyAddedIndex}].phoneNumber`}
                          placeholder="Enter Parent's Phone Number"
                          rules={{ required: "This field is required" }}
                        />
                      </FormGroup>

                      <FormGroup>
                        <Select
                          label="State"
                          name={`parent[${newlyAddedIndex}].state`}
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
                          name={`parent[${newlyAddedIndex}].city`}
                          placeholder="city"
                          rules={{ required: false }}
                        />
                      </FormGroup>
                      <Textarea
                        label="Address"
                        name={`parent[${newlyAddedIndex}].address`}
                        placeholder="Enter parent's address"
                        rules={{ required: "Parent's address is required" }}
                      />

                      <Checkbox
                        label="Make Primary Contact"
                        name={`parent[${newlyAddedIndex}].primaryContact`}
                        rules={{
                          required: false,
                        }}
                      />

                      {/* Buttons for Edit and Delete */}
                      <button
                        type="submit"
                        className="flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:shadow-1"
                        onClick={() => {
                          console.log(methods.getValues().parent);
                        }}
                      >
                       Save Parent
                      </button>
                      
                    </div>
                  )}
                </div>
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
                  onClick={() => {
                    console.log(methods.getValues());
                  }}
                  // disabled={isLoading}
                  // isLoading={isLoading}
                  isLoadingText="Saving..."
                >
                 Next
                </Button>
              </Section>

              {/* Modals */}
              <Warning
                onHide={() => setDeleteModal(false)}
                onProceed={() => {
                handleDeleteParent(deleteIndex)
                // setDeleteModal(false);
                }}
                show={deleteModal}
                icon={<BsTrash3Fill className="h-[30px] w-[30px]" />}
                size="md:w-[400px] w-[350px]"
                title="Delete Parent?"
                desc="Are you sure you want to delete this Parent?"
              ></Warning>
            </Container>
          )}
        </form>
      </FormProvider>
    </DefaultLayout>
  );
}
