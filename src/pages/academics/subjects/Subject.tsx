import React, { useEffect, useState } from "react";
import DefaultLayout from "../../../layout/DefaultLayout";
import BreadCrumb from "../../../components/BreadCrumb";
import Tabs, { Tab } from "../../../components/tabs";
import Icons from "../../../layout/navIcons";
import SubjectDetailInfo from "./SubjectDetailInfo";
import { getTicket, getMessage } from "../../../api/httpRequest";
import { getLocalStorageItem } from "../../../utils/storage";

const tabIconStyle = { marginTop: "5px", marginRight: "5px" };

export default function Subject() {
  const [tab, setTab] = React.useState<string>("Details");
  const [data, setData] = React.useState<{}>({});
  
  const id = window.location.pathname.split("/");
  const ticketId = id[id.length - 1];
  
  const userInfo = JSON.parse(getLocalStorageItem());
  
  useEffect(() => {
    
    
    const fetchData = async () => {
      const getDetails = await getTicket(ticketId);
      console.log(getDetails);
      setData(getDetails?.data?.response)
    };
    if (ticketId?.length > 4) {
      console.log(ticketId);
      fetchData();
    }
  }, []);
    
  
  return (
    <DefaultLayout>
      <BreadCrumb
        pageName="Ticket Detail Page"
        homeRoute="/app/tickets"
        homeRouteName="Ticket"
      />
      {/* <Tabs>
                <Tab tab='Profile' activeTab={tab} onChange={setTab}>
                    <Icons.Profile style={tabIconStyle} />
                </Tab>
                <Tab tab='Credentials' activeTab={tab} onChange={setTab}>
                    <Icons.Credential style={tabIconStyle} />
                </Tab>
                <Tab tab='List' activeTab={tab} onChange={setTab}>
                    <Icons.List style={tabIconStyle} />
                </Tab>
            </Tabs> */}

      {/* Render Components */}
      {!!data && <SubjectDetailInfo  userInfo={userInfo} show={tab === "Details"} data={data} />}
    </DefaultLayout>
  );
}
