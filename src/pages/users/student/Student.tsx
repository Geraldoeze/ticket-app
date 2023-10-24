import React from 'react';
import DefaultLayout from '../../../layout/DefaultLayout';
import BreadCrumb from '../../../components/BreadCrumb';
import Tabs, {Tab} from '../../../components/tabs';
import {FaUbuntu} from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import StudentStepComponent from './StudentDetail/tabSteps';

const tabIconStyle = {marginTop:'5px', marginRight: '5px'};

export default function Student() {
  const [tab, setTab] = React.useState<string>('Personal')
  const {id} = useParams()
  return (
    <DefaultLayout>
      <BreadCrumb 
        pageName='Students' 
        homeRoute='/app/students'
        homeRouteName='Students'
      />
      <Tabs>
        <Tab tab='Personal' activeTab={tab} onChange={setTab}>
          <FaUbuntu style={tabIconStyle}/>
        </Tab>
        <Tab tab='Parents' activeTab={tab} onChange={setTab}>
          <FaUbuntu style={tabIconStyle}/>
        </Tab>
        <Tab tab='Medical' activeTab={tab} onChange={setTab}>
          <FaUbuntu style={tabIconStyle}/>
        </Tab>

        <Tab tab='Payments' activeTab={tab} onChange={setTab}>
          <FaUbuntu style={tabIconStyle}/>
        </Tab>
        <Tab tab='Analytics' activeTab={tab} onChange={setTab}>
          <FaUbuntu style={tabIconStyle}/>
        </Tab>
        <Tab tab='Settings' activeTab={tab} onChange={setTab}>
          <FaUbuntu style={tabIconStyle}/>
        </Tab>
      </Tabs>
       
       <div className='bg-white p-6 dark:bg-boxdark-2 dark:text-bodydark'>
       <StudentStepComponent 
       step={tab}
      />
       </div>
      
    </DefaultLayout>
  )
}
