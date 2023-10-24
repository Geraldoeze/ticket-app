import React from "react";
import DefaultLayout from "../../../../../layout/DefaultLayout";
import Breadcrumb from "../../../../../components/BreadCrumb";
import {
  FormGroup,
  Button,
  Input,
  Textarea,
} from "../../../../../components/form";
import {
  Container,
  Header,
  Section,
} from "../../../../../components/container";
import ReactDatePicker from "react-datepicker";
import { useNavigate } from "react-router-dom";

import { useForm, FormProvider } from "react-hook-form";
import Select from "../../../../../components/form/customSelect";

export default function AddPayroll() {
  const navigate = useNavigate();
  const [startDate, setStartDate] = React.useState(new Date());
  const methods = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    const { errors } = methods.formState;
    console.log(data);

    // Check if there are any validation errors
    if (Object.keys(errors).length > 0) {
      console.log("Validation errors:", errors);
      return; // Exit the function if there are errors
    }

    // All required fields are filled correctly, perform the submission
    setNextStep(true);
  };

  const [nextStep, setNextStep] = React.useState(false);
  React.useEffect(() => {
    if (startDate) {
      methods.setValue("date", startDate.toISOString());
    }
  }, [startDate]);

  const [payroll, setPayroll] = React.useState<any>({
    employeName: "",
    payPeriod: "",
    hoursWorked: "",
    rateOfPay: "",
    grossEarnings: "",
    deductions: "",
    deductibleAmount: "",
    netEarnings: "",
    additionalEarnings: "",
    totalEarnings: "",
    paymentMethod: "",
    paymentDate: "",
    paymentPeriodStart: "",
    paymentPeriodEnd: "",
    regularRate: "",
    overtimeRate: "",
    remarks: "",
  });

  const backPath = "/app/admins/accounts/payrolls";

  return (
    <DefaultLayout>
      <Breadcrumb
        pageName="New Payroll"
        homeRoute={"/app/admins/accounts/payrolls"}
        homeRouteName="Payrolls"
      />
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Container>
            <Section>
              <Header variant="h2">Add Payroll Information</Header>
              <FormGroup>
                <Select
                  label="Employee Name"
                  name="employeName"
                  rules={{ required: "This field is required" }}
                >
                  <option value="">Select Employee Name...</option>
                  <option>Jon Snow</option>
                  <option>Jon Snow</option>
                </Select>

                <Select
                  label="Pay Period"
                  name="payPeriod"
                  rules={{ required: "This field is required" }}
                >
                  <option value="">Select Pay Period...</option>
                  <option>Weekly</option>
                  <option>Bi-Weekly Fee</option>
                  <option>Monthly</option>
                </Select>
              </FormGroup>
              <FormGroup>
                <Input
                  label="Hours Worked"
                  name="hoursWorked"
                  placeholder="Enter Hours Worked"
                  rules={{
                    required: "This Field is required",
                  }}
                />

                <Select
                  label="Rate of Pay"
                  name="rateOfPay"
                  rules={{ required: "This field is required" }}
                >
                  <option value="">Select Rate of Pay...</option>
                  <option>Hourly Rate</option>
                  <option>Salary Amount</option>
                </Select>
              </FormGroup>
              <FormGroup>
                <Input
                  label="Gross Earnings"
                  name="grossEarnings"
                  placeholder="Enter Gross Earnings"
                  rules={{
                    required: "This Field is required",
                    pattern: {
                      value: /^[0-9]*$/,
                      message: "Please enter a valid numeric amount",
                    },
                  }}
                />

                <Select
                  label="Deductions"
                  name="deductions"
                  rules={{ required: "This field is required" }}
                >
                  <option value="">Select Deductions...</option>
                  <option>Income Tax</option>
                  <option>Social Security Contributions</option>
                  <option>Health Insurance Premiums</option>
                  <option>Retirement Contributions</option>
                  <option>Other Withholdings</option>
                </Select>
              </FormGroup>

              <FormGroup>
                <Input
                  label="Deductible Amount"
                  name="deducibleAmount"
                  placeholder="Enter Deductible Amount"
                  rules={{ required: "This field is required" }}
                />

                <Input
                  label="Net Earnings"
                  name="netEarnings"
                  placeholder="Enter Net Earnings"
                  rules={{
                    required: "This field is required",
                    pattern: {
                      value: /^[0-9]*$/,
                      message: "Please enter a valid numeric amount",
                    },
                  }}
                />
              </FormGroup>
              <FormGroup>
                <Input
                  label="Additional Earnings"
                  name="additionalEarnings"
                  placeholder="Enter Additional Earnings"
                  rules={{
                    required: "This field is required",
                    pattern: {
                      value: /^[0-9]*$/,
                      message: "Please enter a valid numeric amount",
                    },
                  }}
                />
                <Input
                  label="Total Earnings"
                  name="totalEarnings"
                  placeholder="Enter Total Earnings"
                  rules={{
                    required: "This field is required",
                    pattern: {
                      value: /^[0-9]*$/,
                      message: "Please enter a valid numeric amount",
                    },
                  }}
                />
              </FormGroup>
              <FormGroup>
                <Select
                  label="Payment Method"
                  name="paymentMethod"
                  rules={{ required: "This field is required" }}
                >
                  <option value="">Select Payment Method...</option>
                  <option>Direct Deposit</option>
                  <option>Physical Check</option>
                  <option>Electronic Transfer</option>
                </Select>

                <div className="w-full">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Payment Date(Optional)
                  </label>
                  <ReactDatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date as Date)}
                    className={`z-999999 w-full rounded border border-stroke bg-gray py-3 px-4.5 
           text-black focus:border-primary focus-visible:outline-none dark:border-strokedark 
           dark:bg-meta-4 dark:text-white dark:focus:border-primary`}
                  />
                </div>
              </FormGroup>

              <FormGroup>
                <div className="w-full">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Pay Period Start (Optional)
                  </label>
                  <ReactDatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date as Date)}
                    className={`z-999999 w-full rounded border border-stroke bg-gray py-3 px-4.5 
           text-black focus:border-primary focus-visible:outline-none dark:border-strokedark 
           dark:bg-meta-4 dark:text-white dark:focus:border-primary`}
                  />
                </div>

                <div className="w-full">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Pay Period End (Optional)
                  </label>
                  <ReactDatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date as Date)}
                    className={`z-999999 w-full rounded border border-stroke bg-gray py-3 px-4.5 
           text-black focus:border-primary focus-visible:outline-none dark:border-strokedark 
           dark:bg-meta-4 dark:text-white dark:focus:border-primary`}
                  />
                </div>
              </FormGroup>

              <FormGroup>
                <Input
                  label="Regular Rate (Optional)"
                  name="regularRate"
                  placeholder="Enter Regular Rate"
                  rules={{ required: false }}
                />

                <Input
                  label="Overtime Rate (Optional)"
                  name="overtimeRate"
                  placeholder="Enter Overtime Rate"
                  rules={{ required: false }}
                />
              </FormGroup>
              <FormGroup>
                <Textarea
                  label="Remarks (Optional)"
                  name="remarks"
                  placeholder="Any additional notes or comments related to the payment"
                  rules={{ required: false }}
                />
              </FormGroup>
            </Section>

            <Section classNames="flex gap-6 justify-between">
              <Button
                classNames="w-25"
                variant="primary"
                onClick={() => navigate(backPath)}
                type="button"
                isLoadingText="Saving..."
              >
                Back
              </Button>
              <Button
                classNames="w-25"
                variant="primary"
                type="submit"
                onClick={() => console.log()}
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
