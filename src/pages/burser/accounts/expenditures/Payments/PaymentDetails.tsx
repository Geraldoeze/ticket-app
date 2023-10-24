import { Header } from "../../../../../components/container";
import TextView from "../../../../../components/textview";
import DefaultLayout from "../../../../../layout/DefaultLayout";
import Breadcrumb from "../../../../../components/BreadCrumb";
import { ROUTES_CONFIG } from "../../../../../layout/config";

import { Container, Section } from "../../../../../components/container";

export default function ExpenseDetailsPage() {
  return (
    <DefaultLayout>
      <Breadcrumb
        pageName={"Payment Details"}
        homeRoute={ROUTES_CONFIG.admin.entities.payments}
        homeRouteName="Payments"
      />
      <Container>
        <Section>
          <Header variant="h2">Payment Information</Header>

          <TextView title="Date">July 14, 2023</TextView>
          <TextView title="Entry Date">July 14, 2023</TextView>
          <TextView title="Late Fees">Non</TextView>
          <TextView title="Receipt ID">8934</TextView>
          <TextView title="Payment ID">0384</TextView>
          <TextView title="Amount">₦11,500.00</TextView>
          <TextView title="Discount Amount">₦44,000.00</TextView>
          <TextView title="Payment Method">Cash</TextView>
          <TextView title="Purpose">Examination Result</TextView>
          <TextView title="Status">Succesful</TextView>
          <TextView title="Receipt Number">038012</TextView>
          <TextView title="Remarks">...</TextView>
          <TextView title="Academic Term">First</TextView>
          <TextView title="Payee Name">Jon Snow</TextView>
          <TextView title="Payee Phone Number">+23480123456789</TextView>
          <TextView title="Recorded By">Ezenna Ademola Farouk</TextView>
          <TextView title="Recorder ID">40570</TextView>
        </Section>

        <Section>
          <Header variant="h2">Student Information</Header>

          <TextView title="Name">Jon Snow</TextView>
          <TextView title="Student ID">043580</TextView>
          <TextView title="Class">5</TextView>
          <TextView title="Amount">₦44,000.00</TextView>
        </Section>
      </Container>
    </DefaultLayout>
  );
}
