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

import SelectField, {
  SelectFieldOption,
} from "../../../components/SelectField";
import { ROUTES_CONFIG } from "../../../layout/config";

type SubjectFormData = {
  title: string;
  creator: string;
  date: string;
  priority: string;
  result: string;
  description: string;
  category: string;
  status: string;
  amount: string;

  subject_objectives: string;
  key_topics: string;
  teaching_methodology: string;
  assessment_methods: string;
  resources_and_materials: string;
  careers_and_future_pathways: string;
  additional_support: string;
  extracurricular_opportunities: string;
  cross_curricular_connections: string;
  recommended_electives: string;
  enrichment_or_extension_opportunities: string;
  revision_or_study_tips: string;
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

    setTicket(data);
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
                        name="subject_objectives"
                        placeholder="Ticket Title"
                        rules={{ required: "Title is required" }}
                      />
                      <Input
                        label="Creator"
                        name="creator"
                        placeholder=" Creator"
                        rules={{ required: "Creator is required" }}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Select
                        name="category"
                        label="Category"
                        rules={{ required: "Select Category" }}
                      >
                        <option value="">Select...</option>
                        <option value="high">A</option>
                        <option value="medium">B</option>
                        <option value="low">C</option>
                      </Select>
                      <Select
                        name="prio"
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
                        name="desc"
                        placeholder="Description"
                      />
                    </FormGroup>

                    <Section classNames="flex gap-6 justify-end">
                      <Button
                        classNames="w-25"
                        variant="secondary"
                        style={{ background: "#ff5500", color: "#fff" }}
                        onClick={() => navigate(backPath)}
                        type="button"
                        isLoadingText="Saving..."
                      >
                        Cancel
                      </Button>
                      <Button
                        classNames="w-25"
                        style={{ background: "#ff5500", color: "#fff" }}
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
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/app/admins/academics/subjects");
  };

  return (
    <Container>
      <Section>
        <Header variant="h2">Ticket Summary</Header>
        <TextView title="ID">123445</TextView>
        <TextView title="title">{ticket?.title}</TextView>
        <TextView title=" Creator">{ticket?.creator}</TextView>
        <TextView title="Date">{ticket?.date}</TextView>
        <TextView title="Status">{ticket?.status}</TextView>
        <TextView title="Description">{ticket?.description}</TextView>
        <TextView title="Category">{ticket?.category}</TextView>
        <TextView title="Priority">{ticket?.priority}</TextView>
      </Section>

      <Section classNames="flex gap-6 justify-end">
        <Button
          classNames="w-25 ml-0"
          style={{ background: "#ff5500", color: "#fff" }}
          variant="primary"
          onClick={handleBackClick}
          type="button"
        >
          Back
        </Button>
        <Button
          classNames="w-25 ml-0"
          style={{ background: "#ff5500", color: "#fff" }}
          variant="primary"
          onClick={handleBackClick}
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
