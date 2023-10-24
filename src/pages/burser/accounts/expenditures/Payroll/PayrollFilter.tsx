import React, { Fragment, useRef } from "react";
import MultiSelect from "../../../../../components/MultiSelect";
import DatePicker from "react-datepicker";
import "./PayrollFilter.css";

const Checkbox: React.FC<{
  isSelected: boolean;
  value: string;
  name: string;
  onChecked: (name: string, value: string) => void;
}> = ({ isSelected, onChecked, value, name }) => (
  <div className="my-2">
    <input
      value={value}
      checked={isSelected}
      onChange={() => onChecked(name, value)}
      type="checkbox"
      id={name}
    />
    <label htmlFor={name} className="ml-2">
      {value}
    </label>
  </div>
);

type PayrollFilterProps = {
  onFilter: (data: any) => void;
  onCancel: () => void;
};

export default function PayrollFilter(props: PayrollFilterProps) {
  const [selectedOptions, setSelectedOptions] = React.useState<any>({});

  const [category, setCategory] = React.useState<any>({});
  const [dateRange, setDateRange] = React.useState<any>({});
  const [employee, setEmployee] = React.useState<any>({});
  const [payType, setPayType] = React.useState<any>({});
  const [deduction, setDeduction] = React.useState<any>({});
  const [payPeriod, setPayPeriod] = React.useState<any>({});
  const [department, setDepartment] = React.useState<any>({});
  const [paymentMethod, setPaymentMethod] = React.useState<any>({});
  const [overtime, setOvertime] = React.useState<any>({});
  const [tax, setTax] = React.useState<any>({});
  const [hourlyRate, setHourlyRate] = React.useState<any>({});

  const handleCheckedEvent = (key: string, val: string) => {
    if (key.match(/dateRange-(\w+)/)) {
      setDateRange((prev: any) => ({ ...prev, [val]: !prev[val] }));
    } else if (key.match(/employee-(\w+)/)) {
      setEmployee((prev: any) => ({ ...prev, [val]: !prev[val] }));
    } else if (key.match(/payType-(\w+)/)) {
      setPayType((prev: any) => ({ ...prev, [val]: !prev[val] }));
    } else if (key.match(/deduction-(\w+)/)) {
      setDeduction((prev: any) => ({ ...prev, [val]: !prev[val] }));
    } else if (key.match(/payPeriod-(\w+)/)) {
      setPayPeriod((prev: any) => ({ ...prev, [val]: !prev[val] }));
    } else if (key.match(/department-(\w+)/)) {
      setDepartment((prev: any) => ({ ...prev, [val]: !prev[val] }));
    } else if (key.match(/paymentMethod-(\w+)/)) {
      setPaymentMethod((prev: any) => ({ ...prev, [val]: !prev[val] }));
    } else if (key.match(/overtime-(\w+)/)) {
      setOvertime((prev: any) => ({ ...prev, [val]: !prev[val] }));
    } else if (key.match(/tax-(\w+)/)) {
      setTax((prev: any) => ({ ...prev, [val]: !prev[val] }));
    } else if (key.match(/hourlyRate-(\w+)/)) {
      setHourlyRate((prev: any) => ({ ...prev, [val]: !prev[val] }));
    }
  };

  const [showDatePicker, setShowDatePicker] = React.useState<boolean>(false);
  const datePickerRef = useRef<any>(null);
  const [date, setDate] = React.useState<any>(new Date());

  const handleFilter = () => {
    props.onFilter({
      dateRange,
      employee,
      payType,
      deduction,
      payPeriod,
      department,
      paymentMethod,
      overtime,
      tax,
    });
  };

  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  React.useEffect(() => {
    if (selectedOptions.length > 0) {
      console.log(selectedOptions);
    }
  });

  return (
    <div>
      <div className="mb-5 grid grid-cols-1 gap-4 text-left md:grid-cols-3">
        {/* Column 1: */}
        <div>
          <div className="mb-4">
            <h3 className="text-lg font-bold">Date Range</h3>

            <Checkbox
              name="dateRange-yesterday"
              value="Yesterday"
              isSelected={dateRange["Yesterday"]}
              onChecked={handleCheckedEvent}
            />
            <Checkbox
              name="dateRange-last-week"
              value="Last Week"
              isSelected={dateRange["last-week"]}
              onChecked={handleCheckedEvent}
            />
            <Checkbox
              name="dateRange-last-month"
              value="Last Month"
              isSelected={dateRange["last-month"]}
              onChecked={handleCheckedEvent}
            />
            <Checkbox
              name="dateRange-the-beginning"
              value="The beginning"
              isSelected={dateRange["the-beginning"]}
              onChecked={handleCheckedEvent}
            />

            <label
              className="my-2 cursor-pointer"
              htmlFor="jumpToDateCheckbox"
              style={{ display: "flex", alignItems: "center" }}
            >
              {/* Checkbox for "Jump to a specific date" */}
              <input
                type="checkbox"
                id="jumpToDateCheckbox"
                checked={showDatePicker}
                onChange={() => {
                  setShowDatePicker((prev) => !prev);
                }}
              />
              <span style={{ marginLeft: "5px" }}>Jump to a specific date</span>
            </label>

            {showDatePicker && (
              <DatePicker
                ref={datePickerRef}
                selected={date}
                onSelect={(dt) => setDate(dt)}
                onChange={(dt) => setDate(dt)}
                className="custom-date-picker"
              />
            )}
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-bold">Pay Type</h3>
            <Checkbox
              name="payType-regular-wages"
              value="Regular Wages"
              isSelected={payType["regular-wages"]}
              onChecked={handleCheckedEvent}
            />
            <Checkbox
              name="payType-overtime"
              value="Overtime"
              isSelected={payType["overtime"]}
              onChecked={handleCheckedEvent}
            />
            <Checkbox
              name="payType-bonuses"
              value="Bonuses"
              isSelected={payType["bonuses"]}
              onChecked={handleCheckedEvent}
            />
            <Checkbox
              name="payType-commissions"
              value="Commissions"
              isSelected={payType["commissions"]}
              onChecked={handleCheckedEvent}
            />
          </div>

          <div>
            <h3 className="text-lg font-bold">Deduction</h3>
            <Checkbox
              name="deduction-taxes"
              value="Taxes"
              isSelected={deduction["taxes"]}
              onChecked={handleCheckedEvent}
            />
            <Checkbox
              name="deduction-insurance-premiums"
              value="Insurance Premiums"
              isSelected={deduction["insurance-premiums"]}
              onChecked={handleCheckedEvent}
            />
            <Checkbox
              name="deduction-retirement-contributions"
              value="Retirement Contributions"
              isSelected={deduction["retirement-contributions"]}
              onChecked={handleCheckedEvent}
            />
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <div>
            <h3 className="text-lg font-bold">Pay Period</h3>
            <Checkbox
              name="payPeriod-weekly"
              value="Weekly"
              isSelected={payPeriod["Weekly"]}
              onChecked={handleCheckedEvent}
            />
            <Checkbox
              name="payPeriod-bi-Weekly"
              value="Bi-Weekly"
              isSelected={payPeriod["bi-Weekly"]}
              onChecked={handleCheckedEvent}
            />
            <Checkbox
              name="payPeriod-semi-Monthly"
              value="Semi-Monthly"
              isSelected={payPeriod["semi-Monthly"]}
              onChecked={handleCheckedEvent}
            />
            <Checkbox
              name="payPeriod-monthly"
              value="Monthly"
              isSelected={payPeriod["monthly"]}
              onChecked={handleCheckedEvent}
            />
          </div>

          <div className="mb-2">
            <h3 className="text-lg font-bold">Department</h3>
            <Checkbox
              name="department-academic"
              value="Academic"
              isSelected={department["academic"]}
              onChecked={handleCheckedEvent}
            />
            <Checkbox
              name="department-non-academic"
              value="Non Academic"
              isSelected={department["non-academic"]}
              onChecked={handleCheckedEvent}
            />
          </div>
          <div>
            <h3 className="text-lg font-bold">Employee</h3>
            <Checkbox
              name="employee-employee-id"
              value="Employee ID"
              isSelected={employee["Employee ID"]}
              onChecked={handleCheckedEvent}
            />
            <Checkbox
              name="employee"
              value="Employee Name"
              isSelected={employee["Employee Name"]}
              onChecked={handleCheckedEvent}
            />
            <Checkbox
              name="employee"
              value="Employee Department"
              isSelected={employee["Employee Department"]}
              onChecked={handleCheckedEvent}
            />
          </div>
          <div>
            <h3 className="text-lg font-bold">Payment Method</h3>
            <Checkbox
              name="paymentMethod"
              value="Direct deposit"
              isSelected={paymentMethod["Direct deposit"]}
              onChecked={handleCheckedEvent}
            />
            <Checkbox
              name="paymentMethod"
              value="Physical Check"
              isSelected={paymentMethod["Physical Check"]}
              onChecked={handleCheckedEvent}
            />
            <Checkbox
              name="paymentMethod"
              value="Electronic Transfer"
              isSelected={paymentMethod["Electronic Transfer"]}
              onChecked={handleCheckedEvent}
            />
          </div>
        </div>

        {/* Column 3 */}
        <div>
          <div className="mb-2">
            <h3 className="text-lg font-bold">Hourly Rate</h3>
            <Checkbox
              name="hourlyRate"
              value="₦1000 per hour"
              isSelected={hourlyRate["₦1000 per hour"]}
              onChecked={handleCheckedEvent}
            />
            <Checkbox
              name="hourlyRate"
              value="₦1500 per hour"
              isSelected={hourlyRate["₦1500 per hour"]}
              onChecked={handleCheckedEvent}
            />
            <Checkbox
              name="hourlyRate"
              value="₦5000 per hour"
              isSelected={hourlyRate["₦5000 per hour"]}
              onChecked={handleCheckedEvent}
            />
          </div>
          <div className="mb-2">
            <h3 className="text-lg font-bold">Overtime</h3>
            <Checkbox
              name="overtime"
              value="Contract"
              isSelected={overtime["Contract"]}
              onChecked={handleCheckedEvent}
            />
            <Checkbox
              name="overtime"
              value="Full-Time"
              isSelected={overtime["Full-Time"]}
              onChecked={handleCheckedEvent}
            />
            <Checkbox
              name="overtime"
              value="Part-Time"
              isSelected={overtime["Part-Time"]}
              onChecked={handleCheckedEvent}
            />
            <Checkbox
              name="type-fulltime"
              value="Subtitute"
              isSelected={overtime["Subtitute"]}
              onChecked={handleCheckedEvent}
            />
          </div>
        </div>
      </div>

      <div className="-mx-3 flex flex-wrap gap-y-4">
        <div className="w-full px-3 2xsm:w-1/2">
          <button
            type="button"
            onClick={() => props.onCancel()}
            className="dark:hover:primary dark:hover:primary block w-full rounded border border-stroke bg-gray 
                    p-3 text-center font-medium text-black transition
                    hover:border-primary hover:bg-primary hover:text-white dark:border-strokedark 
                    dark:bg-meta-4 dark:text-white"
          >
            Cancel
          </button>
        </div>
        <div className="w-full px-3 2xsm:w-1/2">
          <button
            type="button"
            onClick={handleFilter}
            className="block w-full rounded border border-primary bg-primary p-3 text-center 
                    font-medium text-white transition hover:bg-opacity-90"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
}
