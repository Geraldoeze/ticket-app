import React, { useEffect, useState } from "react";
import DefaultLayout from "../../../layout/DefaultLayout";
import BreadCrumb from "../../../components/BreadCrumb";
import TextView from "../../../components/textview";
import {
  Button,
  FormGroup,
  Textarea,
  Input,
  TextArea,
  Checkbox,
} from "../../../components/form";
import FieldInput from "../../../components/FieldInput";
import { Container, Header, Section } from "../../../components/container";
import { useForm, FormProvider } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Select from "../../../components/form/customSelect";
import { addNewUser } from "../../../api/httpRequest";

import SelectField, {
  SelectFieldOption,
} from "../../../components/SelectField";
import { ROUTES_CONFIG } from "../../../layout/config";
import { getLocalStorageItem } from "../../../utils/storage";

type SubjectFormData = {
  username: string;
  email: string;
  password: string;
};

export default function NewAdmin() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const navigate = useNavigate();

  const [newUser, setNewUser] = React.useState<any>({
    username: "",
    password: "",
    email: "",
  });
  const [showConfirmation, setShowConfirmation] = React.useState(false);
  const [invalid, setInvalid] = React.useState(false);

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

    setNewUser({
      ...data,
    });
    setShowConfirmation(true);
  };

  // close confirmation
  const closeConfirmation = () => {
    setShowConfirmation(false);
  };

  const backPath = "/app/admins/dashboard";

  return (
    <DefaultLayout>
      <BreadCrumb
        pageName="New User"
        homeRoute={ROUTES_CONFIG.admin.entities.super}
        homeRouteName="Dashboard"
      />
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 gap-1">
            <div className="col-span-5 xl:col-span-3">
              <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                {showConfirmation ? (
                  <ConfirmationPage
                    newUser={newUser}
                    closeConfirmation={closeConfirmation}
                  />
                ) : (
                  <div className="p-7">
                    <Header variant="h2">New User Informtion</Header>
                    <FormGroup>
                      <Input
                        label="User Name"
                        name="username"
                        placeholder="Enter User Name"
                        rules={{ required: "User Name is required" }}
                      />
                      <Input
                        label="Email"
                        type="email"
                        name="email"
                        placeholder="Email"
                        rules={{ required: "Email is required" }}
                      />
                    </FormGroup>

                    <FormGroup>
                      <Textarea
                        label="Password"
                        rules={{ required: "Kindly Input" }}
                        name="password"
                        placeholder="Enter Password"
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

function ConfirmationPage({
  newUser,
  closeConfirmation,
}: {
  closeConfirmation: () => {};
  newUser: SubjectFormData;
}) {
  const [error, setError] = React.useState<boolean>(false);

  const navigate = useNavigate();

  const getData = JSON.parse(getLocalStorageItem());
  const adminId = getData.adminId;
  console.log(adminId);

  const handleBackClick = () => {
    // navigate("/app/tickets/new");
  };
  const handleSubmitClick = async () => {
    const send = {
      ...newUser,
      adminId,
    };
    console.log(send);
    const sendData = await addNewUser(send);
    console.log(sendData);
    if (sendData?.status == 201) {
      navigate("/app/admins/dashboard");
    } else {
      setError(true);
    }
  };

  return (
    <Container>
      <Section>
        <Header variant="h2">New User Summary</Header>
        <TextView title="User Name">{newUser?.username}</TextView>
        <TextView title="Email">{newUser?.email}</TextView>
        <TextView title="Password">{newUser?.password}</TextView>
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
          onClick={closeConfirmation}
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
