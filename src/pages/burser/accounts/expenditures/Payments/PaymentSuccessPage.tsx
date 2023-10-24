import React from "react";
import DefaultLayout from "../../../../../layout/DefaultLayout";
import Breadcrumb from "../../../../../components/BreadCrumb";
import UweruEvent from "../../../../../components/event";
import SuccessIcon from "../../../../../images/success.svg";
import { useNavigate } from "react-router-dom";

export default function PaymentSuccessPage() {
  const [tab, setTab] = React.useState<string>("success");
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/app/admins/accounts/payments");
  };

  return (
    <DefaultLayout>
      <Breadcrumb
        pageName="Payment Success Page"
        homeRoute="/app/admins/accounts/payments"
        homeRouteName="Payments"
      />

      <UweruEvent
        image={SuccessIcon}
        title="Success!"
        description="Your payment was successfully added."
        buttonText="Back to Payments"
        onNavigate={handleNavigate}
      />
    </DefaultLayout>
  );
}
