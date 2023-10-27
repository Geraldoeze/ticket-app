import React from "react";
import DefaultLayout from "../../../layout/DefaultLayout";
import BreadCrumb from "../../../components/BreadCrumb";
import TextView from "../../../components/textview";
import {
  Button,
  FormGroup,
  Textarea,
  Input,
  TextArea,
} from "../../../components/form";
import FieldInput from "../../../components/FieldInput";
import { Container, Header, Section } from "../../../components/container";
import { useForm, FormProvider } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Select from "../../../components/form/customSelect";
import { addNewTicket } from "../../../api/httpRequest";

import SelectField, {
  SelectFieldOption,
} from "../../../components/SelectField";
import { ROUTES_CONFIG } from "../../../layout/config";
import useState from "react";

type SubjectFormData = {
  title: string;
  customer_name: string;
  date: string;
  priority: string;
  result: string;
  description: string;
  category: string;
  status: string;
  amount: string;
  customer_type: string;
  phone_number: string;
  location: string;

};

export default function NewSubject() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const navigate = useNavigate();
  const [ticket, setTicket] = React.useState<any>({
    title: "",
    creator: "",
    date: "",
    priority: "",
    result: "",
    description: "",
    category: "",
    status: "created",
  });
  const [showConfirmation, setShowConfirmation] = React.useState(false);
  const methods = useForm<SubjectFormData>();

  const onSubmit = (data: SubjectFormData) => {
    console.log(data);
    const { errors } = methods.formState;

    // Check if there are any validation errors
    if (Object.keys(errors).length > 0) {
      console.log("Validation errors:", errors);
      return; // Exit the function if there are errors
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    setTicket({
      ...data,
      status: "created",
      date: new Date().toLocaleDateString(),
    });
    setShowConfirmation(true);
  };

  const backPath = "/app/tickets";
  return (
    <DefaultLayout>
      <BreadCrumb
        pageName="New Tickets"
        homeRoute={ROUTES_CONFIG.admin.entities.tickets}
        homeRouteName="Tickets"
      />
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 gap-1">
            <div className="col-span-5 xl:col-span-3">
              <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                {showConfirmation ? (
                  <ConfirmationPage ticket={ticket} />
                ) : (
                  <div className="p-7">
                    <Header variant="h2">Ticket Informtion</Header>
                    <FormGroup>
                      <Input
                        label="Title"
                        name="title"
                        placeholder="Ticket Title"
                        rules={{ required: "Title is required" }}
                      />
                      <Input
                        label="Customer Name"
                        name="customer_name"
                        placeholder="Name"
                        rules={{ required: "Name is required" }}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Select
                        name="category"
                        label="Category"
                        rules={{ required: "Select Category" }}
                      >
                        <option value="">Select...</option>
                        <option value="Transactions">Transactions</option>
                        <option value="Billing">Billing</option>
                        <option value="Inquiry">Inquiry</option>
                      </Select>
                      <Select
                        name="priority"
                        label="Priority"
                        rules={{ required: "Select Priority" }}
                      >
                        <option value="">Select...</option>
                        <option value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                      </Select>
                    </FormGroup>

                    <FormGroup>
                      <Textarea
                        label="Description"
                        rules={{ required: "Kindly Input" }}
                        name="description"
                        placeholder="Description"
                      />
                      <Input
                        label="Phone Number"
                        rules={{ required: "Kindly Input" }}
                        name="phone_number"
                        placeholder="Phone Number"
                      />
                    </FormGroup>

                    <FormGroup>
                      <Select
                        name="customer_type"
                        label="Type"
                        rules={{ required: "Select Type" }}
                      >
                        <option value="">Select...</option>
                        <option value="Walk In">Walk In</option>
                        <option value="Call In">Call In</option>
                      </Select>
                      <Input
                        label="Location"
                        rules={{ required: "Kindly Input" }}
                        name="location"
                        placeholder="Location"
                      />
                    </FormGroup>

                    <Section classNames="flex gap-6 justify-end">
                      <Button
                        classNames="w-25"
                        variant="secondary"
                        style={{ background: "#32a544", color: "#fff" }}
                        onClick={() => navigate(backPath)}
                        type="button"
                        isLoadingText="Saving..."
                      >
                        Cancel
                      </Button>
                      <Button
                        classNames="w-25"
                        style={{ background: "#32a544", color: "#fff" }}
                        variant="secondary"
                        onClick={() => console.log(methods.formState)}
                        isLoadingText="Creating..."
                        type="submit"
                      >
                        Create
                      </Button>
                    </Section>
                  </div>
                )}
              </div>
            </div>
          </div>
        </form>
      </FormProvider>
    </DefaultLayout>
  );
}

function ConfirmationPage({ ticket }: { ticket: SubjectFormData }) {
  const [error, setError] = React.useState<boolean>(false);
  const navigate = useNavigate();
  console.log(ticket);
  const handleBackClick = () => {
    navigate("/app/tickets");
  };
  const handleSubmitClick = async () => {
    console.log(ticket);
    const sendData = await addNewTicket(ticket);
    console.log(sendData);
    if (sendData?.status == 201) {
      navigate("/app/tickets");
    } else {
      setError(true);
    }
  };

  return (
    <Container>
      <Section>
        <Header variant="h2">Ticket Summary</Header>
        <TextView title="Title">{ticket?.title}</TextView>
        <TextView title=" Customer Name">{ticket?.customer_name}</TextView>
        <TextView title="Date">{ticket?.date}</TextView>
        <TextView title="Status">{ticket?.status}</TextView>
        <TextView title="Description">{ticket?.description}</TextView>
        <TextView title="Category">{ticket?.category}</TextView>
        <TextView title="Priority">{ticket?.priority}</TextView>
        <TextView title="Phone Number">{ticket?.phone_number}</TextView>
        <TextView title="location">{ticket?.location}</TextView>
        <TextView title="Type">{ticket?.customer_type}</TextView>
      </Section>
      {error && (
        <Section classNames="flex justify-center">
          <h4 style={{ color: "red" }}>An Error Occurred</h4>
        </Section>
      )}
      <Section classNames="flex gap-6 justify-end">
        <Button
          classNames="w-25 ml-0"
          style={{ background: "#32a544", color: "#fff" }}
          variant="primary"
          onClick={handleBackClick}
          type="button"
        >
          Back
        </Button>
        <Button
          classNames="w-25 ml-0"
          style={{ background: "#32a544", color: "#fff" }}
          variant="primary"
          onClick={handleSubmitClick}
          type="button"
        >
          Submit
        </Button>
      </Section>
    </Container>
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
