import React from 'react';
import DefaultLayout from '../../../layout/DefaultLayout';
import BreadCrumb from '../../../components/BreadCrumb';
import Tabs, {Tab} from '../../../components/tabs';
import {FaUbuntu} from 'react-icons/fa';

const tabIconStyle = {marginTop:'5px', marginRight: '5px'};

export default function Teacher() {
  const [tab, setTab] = React.useState<string>('Personal')
  return (
    <DefaultLayout>
      <BreadCrumb 
        pageName='Teacher' 
        homeRoute='/app/teachers'
        homeRouteName='Teachers'
      />
      <Tabs>
        <Tab tab='Personal' activeTab={tab} onChange={setTab}>
          <FaUbuntu style={tabIconStyle}/>
        </Tab>
        <Tab tab='Academics' activeTab={tab} onChange={setTab}>
          <FaUbuntu style={tabIconStyle}/>
        </Tab>
        <Tab tab='Learn' activeTab={tab} onChange={setTab}>
          <FaUbuntu style={tabIconStyle}/>
        </Tab>
      </Tabs>
    </DefaultLayout>
  )
}
