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
import { addNewTicket, statusUpdate } from "../../../api/httpRequest";
import CheckboxGroup from "./Chech";
import SelectField, {
  SelectFieldOption,
} from "../../../components/SelectField";
import { ROUTES_CONFIG } from "../../../layout/config";
import { getLocalStorageItem } from "../../../utils/storage";
import data from "../../../data/countries.json";
type SubjectFormData = {
  customer_name: string;
  date: string;
  result: string;
  description: string;
  action_request: string;
  category: string;
  status: string;
  amount: string;
  communication_mode: string;
  phone_number: string;
  country: string;
  state: string;
  city: string;
  transfer_mode: string;
  request_others: string;
};

export default function NewSubject() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const navigate = useNavigate();
  const [ticket, setTicket] = React.useState<any>({
    country: "",
    state: "",
    city: "",
    date: "",
    priority: "",
    result: "",
    description: "",
    transfer_mode: "",
    status: "created",
  });
  const [showConfirmation, setShowConfirmation] = React.useState(false);
  const [invalid, setInvalid] = React.useState(false);
  const [selectedOptions, setSelectedOptions] = useState<any>([]);
  const [logisticsOptions, setLogisticsOptions] = useState<any>([]);
  const [drugInfoOptions, setDrugInfoOptions] = useState<any>([]);
  const [otherInput, setOtherInput] = useState({
    transfer_mode: false,
    customer_request: false,
    action_request: false,
  });

  const options = [
    "Stock Availability",
    "Price / Quotation",
    "Order Placement",
    "List of Ordered Products",
    "Value of Ordered Products",
    "Value of Order",
    "Others",
  ];
  const option = {
    Logistics: [
      "Station of Delivery",
      "Availability of Service",
      "Cost of Delivery",
    ],
    "Drug Information": [
      "Available Brand or Substitute",
      "Indication",
      "Strength",
      "Pack Size",
    ],
  };
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

  const handleCheckboxChange = (option: any[]) => {
    // Check if the option is already in the selectedOptions array
    if (option == "Others") {
      setOtherInput((prev) => ({
        ...prev,
        customer_request: !otherInput.customer_request,
      }));
    }
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      // Add the option to selectedOptions
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const handleCheckboxChangeTwo = (category, option) => {
    if (category === "Logistics") {
      // Check if the option is already in logisticsOptions
      if (logisticsOptions.includes(option)) {
        setLogisticsOptions(logisticsOptions.filter((item) => item !== option));
      } else {
        setLogisticsOptions([...logisticsOptions, option]);
      }
    } else if (category === "Drug Information") {
      // Check if the option is already in drugInfoOptions
      if (drugInfoOptions.includes(option)) {
        setDrugInfoOptions(drugInfoOptions.filter((item) => item !== option));
      } else {
        setDrugInfoOptions([...drugInfoOptions, option]);
      }
    }
  };

  const handleOthers = (e: any, value: string) => {
    console.log(e, value);
    if (e == "Other") {
      if (value == "transfer_mode") {
        setOtherInput((prev) => ({
          ...prev,
          transfer_mode: !otherInput?.transfer_mode,
        }));
      }
      if (value == "action_request") {
        setOtherInput((prev) => ({
          ...prev,
          action_request: !otherInput?.action_request,
        }));
      }
    } else {
      if (value == "transfer_mode") {
        setOtherInput((prev) => ({
          ...prev,
          transfer_mode: false,
        }));
      }
      if (value == "action_request") {
        setOtherInput((prev) => ({
          ...prev,
          action_request: false,
        }));
      }
    }
  };
  const backPath = "/app/tickets";
  console.log(ticket);
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
                  <ConfirmationPage
                    ticket={ticket}
                    selectedOptions={selectedOptions}
                    drugInfoOptions={drugInfoOptions}
                    logisticsOptions={logisticsOptions}
                  />
                ) : (
                  <div className="p-7">
                    <Header variant="h2">Ticket Informtion</Header>
                    <FormGroup>
                      <Input
                        label="Customer Name"
                        name="customer_name"
                        placeholder="Name"
                        rules={{ required: "Name is required" }}
                      />
                      <Select
                        name="country"
                        label="Country"
                        rules={{ required: "Select Country" }}
                      >
                        <option value="">Select...</option>
                        {data?.map((val, id) => (
                          <option value={val.name} key={val.code}>
                            {val.name}
                          </option>
                        ))}
                      </Select>
                    </FormGroup>
                    <FormGroup>
                      <Input
                        label="State/Province"
                        name="state"
                        placeholder="Type State"
                        rules={{ required: "State is required" }}
                      />
                      <Input
                        label="City"
                        name="city"
                        placeholder="Type City"
                        rules={{ required: "City is required" }}
                      />
                    </FormGroup>
                    <FormGroup>
                      <div className="w-full md:w-1/2">
                        <Select
                          name="communication_mode"
                          label="Communication Mode"
                          classNames="w-1/2"
                          rules={{ required: "Select mode" }}
                        >
                          <option value="">Select...</option>
                          <option value="Calls">Calls</option>
                          <option value="WhatsApp">WhatsApp</option>
                          <option value="Email">Email</option>
                          <option value="Walk In">Walk In</option>
                        </Select>
                      </div>
                      <div className="w-full md:w-1/2">
                        <Select
                          name="transfer_mode"
                          label="Mode of Transfer"
                          rules={{ required: "Select Transfer mode" }}
                          onChange={(e) => handleOthers(e, "transfer_mode")}
                        >
                          <option value="">Select...</option>
                          <option value="CRM">CRM</option>
                          <option value="Physical Submission">
                            Physical Submission
                          </option>
                          <option value="WhatsApp">WhatsApp</option>
                          <option value="Email">Email</option>
                          <option value="Calls">Calls</option>
                          <option value="Other">Other</option>
                        </Select>
                        {otherInput?.transfer_mode && (
                          <Input
                            label="Others"
                            name="transfer_others"
                            placeholder="Type Others"
                          />
                        )}
                      </div>
                    </FormGroup>
                    <div className="my-8">
                      <h2 className="my-2 text-center text-lg font-semibold">
                        Customer’s Request (Tick as Applicable)
                      </h2>
                      <div className="mb-4 flex w-full flex-wrap gap-4">
                        {options.map((option) => (
                          <label key={option} className="mx-4 ">
                            <input
                              type="checkbox"
                              value={option}
                              style={{ margin: "0 6px" }}
                              checked={selectedOptions.includes(option)}
                              onChange={() => handleCheckboxChange(option)}
                            />
                            {option}
                          </label>
                        ))}
                      </div>
                      <div className="mb-3 flex w-full flex-wrap gap-4 ">
                        {Object.entries(option).map(
                          ([category, categoryOptions]) => (
                            <div key={category} className="">
                              <h3>{category}</h3>
                              {categoryOptions.map((option) => (
                                <label key={option} className="mx-4 ">
                                  <input
                                    type="checkbox"
                                    style={{ margin: "0 6px" }}
                                    value={option}
                                    checked={
                                      category === "Logistics"
                                        ? logisticsOptions.includes(option)
                                        : drugInfoOptions.includes(option)
                                    }
                                    onChange={() =>
                                      handleCheckboxChangeTwo(category, option)
                                    }
                                  />
                                  {option}
                                </label>
                              ))}
                            </div>
                          )
                        )}
                      </div>
                      {otherInput?.customer_request && (
                        <Input
                          label="Others"
                          name="request_others"
                          placeholder="Type Others"
                        />
                      )}
                      {invalid && (
                        <h2
                          className="text-center text-sm"
                          style={{ color: "red" }}
                        >
                          Kindly Select One
                        </h2>
                      )}
                    </div>
                    <FormGroup>
                      <div className="w-full md:w-1/2">
                        <Select
                          name="action_request"
                          label="Action Request"
                          onChange={(e) => handleOthers(e, "action_request")}
                          rules={{ required: "Select Action request" }}
                        >
                          <option value="">Select...</option>
                          <option value="Sales">Sales</option>
                          <option value=" Finance">Finance</option>
                          <option value="Procurement">Procurement</option>
                          <option value="Administration">Administration</option>
                          <option value="Logistics">Logistics</option>
                          <option value="Other">Other</option>
                        </Select>
                        {otherInput?.action_request && (
                          <Input
                            label="Others"
                            name=""
                            placeholder="Type Others"
                          />
                        )}
                      </div>
                      <div className="w-full md:w-1/2">
                        <Input
                          label="Phone Number"
                          rules={{ required: "Kindly Input" }}
                          name="phone_number"
                          placeholder="Phone Number"
                        />
                      </div>
                    </FormGroup>
                    <FormGroup>
                      <Textarea
                        label="Description"
                        rules={{ required: "Kindly Input" }}
                        name="description"
                        placeholder="Description"
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
  ticket,

  selectedOptions,
  drugInfoOptions,
  logisticsOptions,
}: {
  drugInfoOptions: [];

  ticket: SubjectFormData;
  logisticsOptions: [];
  selectedOptions: [];
}) {
  const [error, setError] = React.useState<boolean>(false);

  const navigate = useNavigate();

  const getData = JSON.parse(getLocalStorageItem());
  const userId = getData.userId;
  console.log(userId);
  const combinedArray = [].concat(
    logisticsOptions,
    selectedOptions,
    drugInfoOptions
  );
  if (ticket?.request_others) {
    combinedArray.push(ticket?.request_others);
  }
  const handleBackClick = () => {
    navigate("/app/tickets/new");
  };
  const handleSubmitClick = async () => {
    const send = { ...ticket, userId, customer_request: combinedArray };
    console.log(send);
    const sendData = await addNewTicket(send);
    console.log(sendData);
    if (sendData?.status == 201) {
    //   statusUpdate(sendData?.data?.response?.insertedId);
      navigate("/app/tickets");
    } else {
      setError(true);
    }
  };

  return (
    <Container>
      <Section>
        <Header variant="h2">Ticket Summary</Header>
        <TextView title="Customer Name">{ticket?.customer_name}</TextView>
        <TextView title="Country">{ticket?.country}</TextView>
        <TextView title="State">{ticket?.state}</TextView>
        <TextView title="City">{ticket?.city}</TextView>
        <TextView title="Action Request">{ticket?.action_request}</TextView>
        <TextView title="Date">{ticket?.date}</TextView>
        <TextView title="Status">{ticket?.status}</TextView>
        <TextView title="Description">{ticket?.description}</TextView>
        <TextView title="Transfer Mode">{ticket?.transfer_mode}</TextView>
        <TextView title="Phone Number">{ticket?.phone_number}</TextView>

        <TextView title="Communication Mode">
          {ticket?.communication_mode}
        </TextView>
        <TextView title="Customer's Request">
          {selectedOptions?.map((val, id) => (
            <span key={id}>
              {val}
              <br />{" "}
            </span>
          ))}{" "}
          {logisticsOptions?.length >= 1 && (
            <p>
              Logistics:{" "}
              {logisticsOptions?.map((val, id) => (
                <span key={id}>
                  {val}
                  <br />
                </span>
              ))}{" "}
            </p>
          )}{" "}
          {drugInfoOptions?.length >= 1 && (
            <p>
              Drug Information:{" "}
              {drugInfoOptions?.map((val, id) => (
                <span key={id}>
                  {val}
                  <br />
                </span>
              ))}
            </p>
          )}
          {!!ticket?.request_others && ticket?.request_others}
          {""}
        </TextView>
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
