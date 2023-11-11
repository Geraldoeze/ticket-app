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
import { State } from "country-state-city";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

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
  state: string;
  city: string;
  transfer_mode: string;
  request_others: string;
  email: string;
  custom_logistics: string;
  custom_drugInfo: string;
};

export default function NewSubject() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const navigate = useNavigate();
  const [country, setCountry] = React.useState<string>("");
  const [phone_number, setPhone_Number] = React.useState<{
    valid: boolean;
    value: string;
  }>({
    valid: false,
    value: "",
  });
  const [stateData, setStateData] = React.useState<any>([]);
  const [ticket, setTicket] = React.useState<any>({
    state: "",
    city: "",
    date: "",
    priority: "",
    result: "",
    description: "",
    transfer_mode: "",
    status: "created",
    email: "",
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
  const [custom_request, setCustom_Request] = useState({
    logistics: false,
    drug_info: false,
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
      "status of Delivery",
      "Availability of Service",
      "Cost of Delivery",
      "others",
    ],
    "Drug Information": [
      "Available Brand/Substitute/Quantity",
      "Strength",
      "Indication",
      "others",
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
    if (phone_number.value?.length <= 2) {
      setPhone_Number((prev) => ({ ...prev, valid: true }));
      return;
    }
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
      if (option === "others") {
        setCustom_Request((prev) => ({
          ...prev,
          logistics: !prev.logistics,
        }));
      }
      // Check if the option is already in logisticsOptions
      if (logisticsOptions.includes(option)) {
        setLogisticsOptions(logisticsOptions.filter((item) => item !== option));
      } else {
        setLogisticsOptions([...logisticsOptions, option]);
      }
    } else if (category === "Drug Information") {
      if (option === "others") {
        setCustom_Request((prev) => ({
          ...prev,
          drug_info: !prev.drug_info,
        }));
      }

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
  // close confirmation
  const closeConfirmation = () => {
    setShowConfirmation(false);
  };

  // handle country selected
  const handleCountrySelected = async (country: string) => {
    setCountry(country);
    const code = data?.find((val) => val.name === country)?.code;
    // const states = await getStates(code);
    // console.log(states);
    const states = State.getStatesOfCountry(code);
    if (states?.length >= 1) {
      setStateData(states);
    } else {
      setStateData([]);
    }
  };

  // phone handler
  const phoneHandler = (e) => {
    console.log(e);
    setPhone_Number(() => ({ valid: false, value: e }));
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
                  <ConfirmationPage
                    ticket={ticket}
                    country={country}
                    selectedOptions={selectedOptions}
                    drugInfoOptions={drugInfoOptions}
                    logisticsOptions={logisticsOptions}
                    closeConfirmation={closeConfirmation}
                    phoneNumber={phone_number?.value}
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
                    </FormGroup>
                    <FormGroup>
                      <div className="w-full xl:w-1/2">
                        <label
                          htmlFor="country"
                          className="mb-2.5 block text-black dark:text-white"
                        >
                          Country
                        </label>
                        <select
                          onChange={(e) =>
                            handleCountrySelected(e.target.value)
                          }
                          value={country}
                          className="relative z-20 w-full rounded border border-stroke bg-gray py-3 px-5 
                            outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary
                            "
                        >
                          <option value="">Select Country</option>
                          {data?.map((val, id) => (
                            <option value={val.name} key={val.code}>
                              {val.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="w-full xl:w-1/2">
                        <Select
                          name="action_request"
                          label="Request for Attention "
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
                    </FormGroup>
                    <FormGroup>
                      <div className="w-full xl:w-1/2">
                        <Select
                          name="state"
                          label="State/Province"
                          classNames="w-1/2"
                        >
                          <option value="">Select State</option>
                          <option value="">
                            Ensure you've selected a country
                          </option>
                          {stateData?.map((val, id) => (
                            <option key={id} value={val?.name}>
                              {val?.name}
                            </option>
                          ))}
                        </Select>
                      </div>
                      <div className="w-full xl:w-1/2">
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
                    <FormGroup>
                      <div className="w-full xl:w-1/2">
                        <Input
                          label="Address/Location"
                          name="city"
                          placeholder="Type City"
                          rules={{
                            required: "Address or location is required",
                          }}
                        />
                      </div>
                      <div className="w-full xl:w-1/2"></div>
                    </FormGroup>
                    <FormGroup>
                      <div className="w-full xl:w-1/2">
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <PhoneInput
                          containerStyle={{}}
                          inputStyle={{
                            opacity: 1,
                            background: "rgb(239 244 251)",
                            borderRadius: "8px",
                            border: "2px",
                            borderColor: "rgb(60 80 224 )",
                            width: "100%",
                            height: "3rem",
                            margin: "10px 0",
                          }}
                          country={"us"}
                          value={phone_number?.value}
                          onChange={(e) => phoneHandler(e)}
                        />
                        {phone_number?.valid && (
                          <h2
                            className="text-center text-sm"
                            style={{ color: "red" }}
                          >
                            Kindly input number
                          </h2>
                        )}
                      </div>
                    </FormGroup>
                    <FormGroup>
                      <div className="w-full xl:w-1/2">
                        <Input
                          label="Email"
                          type="email"
                          rules={{ required: "Kindly Input" }}
                          name="email"
                          placeholder="Enter Email"
                        />
                      </div>
                    </FormGroup>

                    <div className="my-8">
                      <h2 className="my-2 text-center text-lg font-semibold">
                        Customer’s Request (Tick as Applicable)
                      </h2>
                      <div className="flex flex-1">
                        <div className="mb-4 w-full xl:w-1/2">
                          {options.map((option) => (
                            <label key={option} className="mx-4 block">
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
                        <div className="mb-3  w-full xl:w-1/2">
                          {Object.entries(option).map(
                            ([category, categoryOptions]) => (
                              <div key={category} className="flex flex-col">
                                <h3>{category}</h3>
                                {categoryOptions.map((option) => (
                                  <label
                                    key={option}
                                    className="mx-4 min-w-[50px]"
                                  >
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
                                        handleCheckboxChangeTwo(
                                          category,
                                          option
                                        )
                                      }
                                    />
                                    {option}
                                  </label>
                                ))}
                              </div>
                            )
                          )}
                        </div>
                      </div>
                      <div className="flex flex-wrap justify-between">
                        {otherInput?.customer_request && (
                          <div className="w-[48%]">
                            <Input
                              label="Others"
                              name="request_others"
                              placeholder="Type Others"
                            />
                          </div>
                        )}
                        {custom_request?.logistics && (
                          <div className="w-[48%]">
                            <Input
                              label="Logistics Others"
                              name="custom_logistics"
                              placeholder="Type Logistics Others"
                            />
                          </div>
                        )}
                        {custom_request?.drug_info && (
                          <div className="w-[48%]">
                            <Input
                              label="Drug Information Others"
                              name="custom_drugInfo"
                              placeholder="Type Drug Information Others"
                            />
                          </div>
                        )}
                      </div>
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
  closeConfirmation,
  phoneNumber,
  selectedOptions,
  drugInfoOptions,
  country,
  logisticsOptions,
}: {
  drugInfoOptions: [];
  closeConfirmation: () => {};
  phoneNumber: string;
  country: string;
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

  if (ticket?.custom_logistics?.length >= 1) {
    console.log(ticket.custom_drugInfo, ticket.custom_logistics);
    combinedArray.push(ticket?.custom_logistics);
  }
  if (ticket?.custom_drugInfo?.length >= 1) {
    combinedArray.push(ticket?.custom_drugInfo);
  }
  const handleBackClick = () => {
    // navigate("/app/tickets/new");
  };
  const handleSubmitClick = async () => {
    const send = {
      ...ticket,
      userId,
      phoneNumber,
      customer_request: combinedArray,
      country: country,
    };
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
        <TextView title="Country">{country}</TextView>
        <TextView title="State">{ticket?.state}</TextView>
        <TextView title="City">{ticket?.city}</TextView>
        <TextView title="Action Request">{ticket?.action_request}</TextView>
        <TextView title="Date">{ticket?.date}</TextView>
        <TextView title="Status">{ticket?.status}</TextView>
        <TextView title="Description">{ticket?.description}</TextView>
        <TextView title="Transfer Mode">{ticket?.transfer_mode}</TextView>
        <TextView title="Phone Number">{phoneNumber}</TextView>
        <TextView title="Email">{ticket?.email}</TextView>
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
          {!!ticket?.request_others && ticket?.request_others},{" "}
          {ticket?.custom_drugInfo}, {ticket?.custom_logistics}
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
