import React, { useEffect, useState } from "react";
import DefaultLayout from "../../../layout/DefaultLayout";
import BreadCrumb from "../../../components/BreadCrumb";
import Tabs, { Tab } from "../../../components/tabs";
import Icons from "../../../layout/navIcons";
import SubjectDetailInfo from "./SubjectDetailInfo";
import { getTicket } from "../../../api/httpRequest";

const tabIconStyle = { marginTop: "5px", marginRight: "5px" };

export default function Subject() {
  const [tab, setTab] = React.useState<string>("Details");
  const [data, setData] = React.useState<[]>([]);
  const id = window.location.pathname.split("/");
  const ticketId = id[id.length - 1];
  useEffect(() => {
    const fetchData = async () => {
      const getData = await getTicket(ticketId);
    // const getData = await fetch(`http://localhost:7000/ticket/fetch/${ticketId}`)
      console.log(getData);
      setData(getData?.data?.response)
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
      {!!data && <SubjectDetailInfo show={tab === "Details"} data={data} />}
    </DefaultLayout>
  );
}
