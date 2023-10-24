import React from "react";
import DefaultLayout from "../../../../../layout/DefaultLayout";
import Tabs, { Tab } from "../../../../../components/tabs";
import Icons from "../../../../../layout/navIcons";
import PayrollDetailInfo from "./PayrollDetails";
import Breadcrumb from "../../../../../components/BreadCrumb";

const tabIconStyle = { marginTop: "5px", marginRight: "5px" };

export default function Payroll() {
  const [tab, setTab] = React.useState<string>("Profile");
  const data = {}; //comes from api

  return (
    <DefaultLayout>
      <Breadcrumb
        pageName="Payroll Detail Page"
        homeRoute="/app/admins/accounts/payrolls"
        homeRouteName="Payrolls"
      />
      {/* <Tabs>
        <Tab tab="Profile" activeTab={tab} onChange={setTab}>
          <Icons.Profile style={tabIconStyle} />
        </Tab>
        <Tab tab="Credentials" activeTab={tab} onChange={setTab}>
          <Icons.Credential style={tabIconStyle} />
        </Tab>
        <Tab tab="List" activeTab={tab} onChange={setTab}>
          <Icons.List style={tabIconStyle} />
        </Tab>
      </Tabs> */}

      {/* Render Components */}
      <PayrollDetailInfo show={tab === "Profile"} data={data} />
    </DefaultLayout>
  );
}
