import React from "react";
import DefaultLayout from "../../../../../layout/DefaultLayout";
import Breadcrumb from "../../../../../components/BreadCrumb";
import TextView from "../../../../../components/textview";
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
import { ROUTES_CONFIG } from "../../../../../layout/config";
import { useNavigate } from "react-router-dom";

import {
  useForm,
  FormProvider,
  SubmitHandler,
  FieldValues,
} from "react-hook-form";
import Select from "../../../../../components/form/customSelect";

interface ExpensesData {
  date: Date;
  category: string;
  description: string;
  vendor: string;
  amount: string;
  balanceDue: string;
  paidBy: string;
  department: string;
  expensesType: string;
}

export default function AddExpenses() {
  const { handleSubmit } = useForm<ExpensesData>();
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

  const [expenses, setExpenses] = React.useState<any>({
    date: "",
    category: "",
    description: "",
    vendor: "",
    amount: "",
    balanceDue: "",
    paidBy: "",
    department: "",
    expensesType: "",
  });

  const backPath = "/app/admins/accounts/expenses";

  const handleFormSubmit: SubmitHandler<FieldValues> = (data) => {
    setExpenses(data);
    setShowConfirmation(true);
  };

  return (
    <DefaultLayout>
      <Breadcrumb
        pageName={showConfirmation ? "Confirmation Page" : "New Expense"}
        homeRoute={ROUTES_CONFIG.admin.entities.expenses}
        homeRouteName="Expenses"
      />
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(handleFormSubmit)}>
          <Container>
            {showConfirmation ? (
              <ConfirmationPage expenses={expenses} />
            ) : (
              <>
                <Section>
                  <Header variant="h2">Add Expenses</Header>
                  <FormGroup>
                    <div className="w-full">
                      <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                        Date
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
                      label="Category"
                      name="category"
                      rules={{ required: "This field is required" }}
                    >
                      <option value="">Select Category...</option>
                      <option>Supplies</option>
                      <option>Maintenance</option>
                      <option>Salaries</option>
                      <option>Transportation</option>
                      <option>Insurance</option>
                      <option>Technology</option>
                      <option>Professional Development</option>
                      <option>Events and Activities</option>
                      <option>Food Services</option>
                      <option>Books and Educational Resources</option>
                      <option>Facilities Rental</option>
                      <option>Advertising and Marketing</option>
                      <option>Safety and Security</option>
                      <option>Grants and Scholarships</option>
                      <option>Professional Services</option>
                      <option>Miscellaneous</option>
                    </Select>
                  </FormGroup>

                  <FormGroup>
                    <Textarea
                      label="Description (Optional)"
                      name="description"
                      placeholder="Enter Description"
                      rules={{ required: false }}
                    />

                    <Input
                      label="Vendor (Optional)"
                      name="vendor"
                      placeholder="Enter Vendor"
                      rules={{ required: false }}
                    />
                  </FormGroup>

                  <FormGroup>
                    <Input
                      label="Amount"
                      name="amount"
                      placeholder="Enter Expense Amount"
                      rules={{
                        required: "This Field is required",
                        pattern: {
                          value: /^[0-9]*$/,
                          message: "Please enter a valid numeric amount",
                        },
                      }}
                    />

                    <Input
                      label="Balance Due"
                      name="balanceDue"
                      placeholder="Enter Expense Amount"
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
                      label="Paid By"
                      name="paidBy"
                      rules={{ required: "Please select" }}
                    >
                      <option value="">Select Method of Payment...</option>
                      <option>Cash</option>
                      <option>Pos</option>
                      <option>Credit Card</option>
                      <option>Bank Transfer</option>
                      <option>Cheque</option>
                    </Select>

                    <Select
                      label="Department/Project"
                      name="department"
                      rules={{ required: "Please select" }}
                    >
                      <option value="">Select Department...</option>
                      <option>Administration</option>
                      <option>Academic Affairs</option>
                      <option>Student Affairs</option>
                      <option>Teaching Faculty</option>
                      <option>Human Resources</option>
                      <option>Facilities and Maintenance</option>
                      <option>Information Technology (IT)</option>
                      <option>Admissions and Enrollment</option>
                      <option>Academic Support</option>
                      <option>Library</option>
                      <option>Athletics and Physical Education</option>
                      <option>Communications and Public Relations</option>
                      <option>Guidance and Counseling</option>
                      <option>Research and Development</option>
                    </Select>
                  </FormGroup>

                  <FormGroup>
                    <Select
                      label="Expenses Type (Optional)"
                      name="expensesType"
                      rules={{ required: false }}
                      classNames="w-1/2"
                    >
                      <option value="">Select Expenses Type...</option>
                      <option>Recurrent</option>
                      <option>One-time</option>
                    </Select>
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
                    Submit
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

function ConfirmationPage({ expenses }: { expenses: ExpensesData }) {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/app/admins/accounts/expenses");
  };

  return (
    <Container>
      <Section>
        <Header variant="h2">Expenses Summary</Header>

        <TextView title="Date">06/10/2023</TextView>
        <TextView title="Category">Supplies</TextView>
        <TextView title="Description">John Doe</TextView>
        <TextView title="Vendor">Abc Shop</TextView>
        <TextView title="Amount">₦11,500.0</TextView>
        <TextView title="Balance Due">₦11,500.00</TextView>
        <TextView title="Paid By">Cash</TextView>
        <TextView title="Department">Teaching Faculty</TextView>
        <TextView title="Expenses Type">Recurrent</TextView>
      </Section>

      <Section>
        <Button
          classNames="w-25 ml-0"
          variant="primary"
          onClick={handleBackClick}
          type="button"
        >
          Back
        </Button>
      </Section>
    </Container>
  );
}
