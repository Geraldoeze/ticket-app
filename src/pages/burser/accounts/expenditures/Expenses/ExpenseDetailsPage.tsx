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
        pageName={"Expense Details"}
        homeRoute={ROUTES_CONFIG.admin.entities.expenses}
        homeRouteName="Expenses"
      />
      <Container>
        <Section>
          <Header variant="h2">Expense Information</Header>

          <TextView title="Expenses ID">828</TextView>
          <TextView title="Status">Due</TextView>
          <TextView title="Date">July 14, 2023</TextView>
          <TextView title="Category">supplies</TextView>
          <TextView title="Description">...</TextView>
          <TextView title="Vendor">Abc Shop</TextView>
          <TextView title="Amount">₦11,500.00</TextView>
          <TextView title="Balance Due">₦44,000.00</TextView>
          <TextView title="Paid By">Cash</TextView>
          <TextView title="Department/Project">Teaching Faaculty</TextView>
          <TextView title="Expenses Type">Recurrent</TextView>
        </Section>
      </Container>
    </DefaultLayout>
  );
}
