import React from "react";
import DefaultLayout from "../../../layout/DefaultLayout";
import BreadCrumb from "../../../components/BreadCrumb";
import Tabs, { Tab } from "../../../components/tabs";
import { FaUbuntu } from "react-icons/fa";
import EmployeeStepComponent from "./EmployeeDetail/tabSteps";

const tabIconStyle = { marginTop: "5px", marginRight: "5px" };

export default function Teacher() {
  const [tab, setTab] = React.useState<string>("Personal");
  return (
    <DefaultLayout>
      <BreadCrumb
        pageName="Employee"
        homeRoute="/app/employees"
        homeRouteName="Employees"
      />
      <Tabs>
        <Tab tab="Personal" activeTab={tab} onChange={setTab}>
          <FaUbuntu style={tabIconStyle} />
        </Tab>
        <Tab tab="Academics" activeTab={tab} onChange={setTab}>
          <FaUbuntu style={tabIconStyle} />
        </Tab>
        <Tab tab="Learn" activeTab={tab} onChange={setTab}>
          <FaUbuntu style={tabIconStyle} />
        </Tab>
      </Tabs>

      <div className='bg-white p-6'>
       <EmployeeStepComponent
       step={tab}
      />
       </div>
    </DefaultLayout>
  );
}
