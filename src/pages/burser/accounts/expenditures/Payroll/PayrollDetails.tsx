import { Header } from "../../../../../components/container";
import TextView from "../../../../../components/textview";

import { Container, Section } from "../../../../../components/container";

export default function PayrollDetailInfo({
  data,
  show,
}: {
  data: any;
  show: boolean;
}) {
  return show ? (
    <Container>
      <Section>
        <Header variant="h2">Payroll Information</Header>

        <TextView title="Employee ID">828</TextView>
        <TextView title="Status">Active</TextView>
        <TextView title="Employee Name">John Doe</TextView>
        <TextView title="Employee Department">Accounting</TextView>
        <TextView title="Pay Period">Bi-Weekly</TextView>
        <TextView title="Hours Worked">80</TextView>
        <TextView title="Rate of Pay">₦11,500.00</TextView>
        <TextView title="Gross Earnings">₦44,000.00</TextView>
        <TextView title="Deductions">₦4,400.00</TextView>
        <TextView title="Deductible Amount">₦3,000.00</TextView>
        <TextView title="Net Earnings">₦37,000.00</TextView>
        <TextView title="Additional Earnings">₦5,500.00</TextView>
        <TextView title="Total Earnings">₦50,000.00</TextView>
        <TextView title="Payment Method">Direct Deposit</TextView>
        <TextView title="Payment Date">July 15, 2023</TextView>
        <TextView title="Pay Period Start">July 1, 2023</TextView>
        <TextView title="Pay Period End">July 14, 2023</TextView>
        <TextView title="Regular Rate">₦10,500.00</TextView>
        <TextView title="Overtime Rate">₦11,500.00</TextView>
      </Section>
    </Container>
  ) : null;
}
