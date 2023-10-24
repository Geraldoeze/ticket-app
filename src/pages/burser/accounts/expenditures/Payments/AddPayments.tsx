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
import { ROUTES_CONFIG } from "../../../../../layout/config";
import jsPDF from "jspdf";
import TextView from "../../../../../components/textview";
import TextViewGroup from "../../../../../components/textview/TextViewGroup";

import {
  useForm,
  FormProvider,
  SubmitHandler,
  FieldValues,
} from "react-hook-form";
import Select from "../../../../../components/form/customSelect";

interface PaymentData {
  date: Date;
  class: string;
  studentName: string;
  paymentID: string;
  amount: string;
  discount: string;
  paymentMethod: string;
  purpose: string;
  remarks: string;
  academicTerm: string;
  payeeName: string;
  payeePhone: string;
}

export default function AddPayments() {
  const { handleSubmit } = useForm<PaymentData>();
  const navigate = useNavigate();
  const [startDate, setStartDate] = React.useState(new Date());
  const [selected, setSelected] = React.useState<string>("");
  const methods = useForm();
  const [showConfirmation, setShowConfirmation] = React.useState(false);

  React.useEffect(() => {
    if (startDate) {
      methods.setValue("date", startDate.toISOString());
    }
  }, [startDate]);

  const [payments, setPayments] = React.useState<any>({
    date: "",
    class: "",
    studentName: "",
    paymentID: "",
    amount: "",
    discount: "",
    paymentMethod: "",
    purpose: "",
    remarks: "",
    academicTerm: "",
    payeeName: "",
    payeePhone: "",
  });

  const backPath = "/app/admins/accounts/payments";

  const handleFormSubmit: SubmitHandler<FieldValues> = (data) => {
    setPayments(data);
    setShowConfirmation(true);
  };

  return (
    <DefaultLayout>
      <Breadcrumb
        pageName={showConfirmation ? "Confirmation Page" : "Add Payment"}
        homeRoute={ROUTES_CONFIG.admin.entities.payments}
        homeRouteName="Payments"
      />

      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(handleFormSubmit)}>
          <Container>
            {showConfirmation ? (
              <ConfirmationPage payments={payments} />
            ) : (
              <>
                <Section>
                  <Header variant="h2">Add Payment Information</Header>
                  <FormGroup>
                    <div className="w-full">
                      <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                        Paid Date
                      </label>
                      <ReactDatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date as Date)}
                        className={`z-999999 w-full rounded border border-stroke bg-gray py-3 px-4.5 
           text-black focus:border-primary focus-visible:outline-none dark:border-strokedark 
           dark:bg-meta-4 dark:text-white dark:focus:border-primary`}
                      />
                    </div>

                    <Select
                      label="Class"
                      name="class"
                      rules={{ required: "This field is required" }}
                    >
                      <option value="">Select Class...</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </Select>
                  </FormGroup>

                  <FormGroup>
                    <Select
                      label="Student Name"
                      name="studentName"
                      rules={{ required: "This field is required" }}
                    >
                      <option value="">Select Student...</option>
                      <option>...</option>
                    </Select>

                    <Input
                      label="Payment ID"
                      name="paymentID"
                      placeholder="Enter Payment ID"
                      rules={{
                        required: "This Field is required",
                      }}
                    />
                  </FormGroup>

                  <FormGroup>
                    <Input
                      label="Amount"
                      name="amount"
                      placeholder="Enter Amount"
                      rules={{
                        required: "This Field is required",
                        pattern: {
                          value: /^[0-9]*$/,
                          message: "Please enter a valid numeric amount",
                        },
                      }}
                    />

                    <Input
                      label="Discount"
                      name="discount"
                      placeholder="Enter Discounted Amount"
                      rules={{
                        required: "This Field is required",
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
                      rules={{ required: "Please select" }}
                    >
                      <option value="">Select Payment Method...</option>
                      <option>POS</option>
                      <option>Cash</option>
                      <option>Bank Transfer</option>
                      <option>Credit/Debit Card</option>
                      <option>Bank Deposit</option>
                      <option>Cash</option>
                    </Select>

                    <Select
                      label="Purpose "
                      name="purpose"
                      rules={{ required: "This field is required" }}
                    >
                      <option value="">Select Purpose...</option>
                      <option>Tuition</option>
                      <option>Admission</option>
                      <option>Excursion</option>
                      <option>Examination</option>
                      <option>Library</option>
                      <option>Laboratory</option>
                      <option>Sports</option>
                      <option>Transportation</option>
                      <option>Field Trip</option>
                      <option>Uniform</option>
                      <option>Facility/Infrastructure</option>
                      <option>Meal</option>
                      <option>Development</option>
                      <option>Security</option>
                      <option>Special Needs/Support</option>
                      <option>Examination Results</option>
                      <option>Graduation</option>
                      <option>Hostel</option>
                      <option> Alumni Association</option>
                      <option>Others</option>
                    </Select>
                  </FormGroup>
                  <FormGroup>
                    <Select
                      label="Status"
                      name="status"
                      rules={{ required: "Please select" }}
                    >
                      <option value="">Please select...</option>
                      <option>Successful</option>
                      <option>Verified</option>
                      <option>Pending</option>
                      <option>Failed</option>
                    </Select>

                    <Select
                      label="Academic Term"
                      name="term"
                      rules={{ required: "Please select" }}
                    >
                      <option value="">Please select...</option>
                      <option>First Term</option>
                      <option>Second Term</option>
                      <option>Third Term</option>
                    </Select>
                  </FormGroup>

                  <FormGroup>
                    <Input
                      label="Payee Name"
                      name="payeeName"
                      placeholder="Enter Payee Name"
                      rules={{ required: "Name is required" }}
                    />

                    <Input
                      label="Payee Phone Number"
                      name="payeePhoneNumber"
                      placeholder="Enter Payee Phone Number"
                      rules={{
                        required: "This Field is required",
                      }}
                    />
                  </FormGroup>

                  <FormGroup>
                    <Textarea
                      label="Remarks"
                      name="remarks"
                      placeholder="Enter Remarks"
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
              </>
            )}
          </Container>
        </form>
      </FormProvider>
    </DefaultLayout>
  );
}

function ConfirmationPage({ payments }: { payments: PaymentData }) {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/app/admins/accounts/addpayments");
  };

  const generatePdf = () => {
    const doc = new jsPDF("p", "pt", "a2");
    doc.html(document.querySelector("#receipt") as HTMLElement, {
      callback: (pdf) => {
        pdf.save("receipt");
        navigate("/app/admins/accounts/paymentsuccess");
      },
    });
  };

  const handleFormSubmit: SubmitHandler<FieldValues> = (data) => {
    // setPayments(data);
    generatePdf();
  };

  return (
    <Container>
      <Section>
        <Header variant="h2">Payment Information</Header>

        <div id="receipt">
          <TextViewGroup>
            <TextView title="Employee ID">828</TextView>
            <TextView title="Employee Name">John Doe</TextView>
          </TextViewGroup>
          <TextViewGroup>
            <TextView title="Employee Department">Accounting</TextView>
            <TextView valueColor="success" title="Verification Status">
              Active
            </TextView>
          </TextViewGroup>
          <TextViewGroup>
            <TextView title="Pay Period">Bi-Weekly</TextView>
            <TextView title="Hours Worked">80</TextView>
          </TextViewGroup>
          <TextViewGroup>
            <TextView title="Rate of Pay">₦11,500.00</TextView>
            <TextView title="Gross Earnings">₦44,000.00</TextView>
          </TextViewGroup>
          <TextViewGroup>
            <TextView title="Deductible Amount">₦3,000.00</TextView>
            <TextView title="Net Earnings">₦37,000.00</TextView>
          </TextViewGroup>
          <TextViewGroup>
            <TextView title="Additional Earnings">₦5,500.00</TextView>
            <TextView title="Total Earnings">₦50,000.00</TextView>
          </TextViewGroup>
          <TextViewGroup>
            <TextView title="Payment Method">Direct Deposit</TextView>
            <TextView title="Payment Date">July 15, 2023</TextView>
          </TextViewGroup>
          <TextViewGroup>
            <TextView title="Pay Period Start">July 1, 2023</TextView>
            <TextView title="Pay Period End">July 14, 2023</TextView>
          </TextViewGroup>
          <TextViewGroup>
            <TextView title="Regular Rate">₦10,500.00</TextView>
            <TextView title="Total Earnings">Overtime Rate</TextView>
          </TextViewGroup>
        </div>
      </Section>

      <Section classNames="flex gap-6 justify-between">
        <Button
          classNames="w-25"
          variant="primary"
          onClick={generatePdf}
          type="button"
        >
          Download
        </Button>
      </Section>
    </Container>
  );
}
