import { Header } from "../../../../../components/container";
import TextView from "../../../../../components/textview";
import DefaultLayout from "../../../../../layout/DefaultLayout";
import Breadcrumb from "../../../../../components/BreadCrumb";
import { ROUTES_CONFIG } from "../../../../../layout/config";

import { Container, Section } from "../../../../../components/container";

export default function SalaryDetailsPage() {
  return (
    <DefaultLayout>
      <Breadcrumb
        pageName={"Salary Details"}
        homeRoute={"/app/admins/accounts/salaries"}
        homeRouteName="Salaries"
      />
      <Container>
        <Section>
          <Header variant="h2">Salary Information</Header>

          <TextView title="Reference ID">828</TextView>
          <TextView title="Employee ID">053</TextView>
          <TextView title="Employee Name">Ada Ejiofor</TextView>
          <TextView title="Position">Teacher</TextView>
          <TextView title="Department">Teaching Faculty</TextView>
          <TextView title="Basic Salary">₦50,500.00</TextView>
          <TextView title="Allowances">₦11,500.00</TextView>
          <TextView title="Deductions">₦4,000.00</TextView>
          <TextView title="Net Salary">₦50,500.00</TextView>
          <TextView title="Date">July 14, 2023</TextView>
        </Section>
      </Container>
    </DefaultLayout>
  );
}
