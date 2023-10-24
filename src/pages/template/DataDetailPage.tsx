import React from 'react';
import DefaultLayout from '../../layout/DefaultLayout';
import Tabs, {Tab} from '../../components/tabs';
import Icons from '../../layout/navIcons';
import TemplateDetailInfo from './TemplateDetailInfo';
import Breadcrumb from '../../components/BreadCrumb';

const tabIconStyle = {marginTop:'5px', marginRight: '5px'};

export default function TemplateDetailsPage() {
  const [tab, setTab] = React.useState<string>('Profile')
  const data = {} //comes from api
   
  return (
    <DefaultLayout>
      <Breadcrumb
        pageName='Template Detail Page' 
        homeRoute='/app/templates/ListPage'
        homeRouteName='Template Table List'
      />
      <Tabs>
        <Tab tab='Profile' activeTab={tab} onChange={setTab}>
          <Icons.Profile style={tabIconStyle}/>
        </Tab>
        <Tab tab='Credentials' activeTab={tab} onChange={setTab}>
          <Icons.Credential style={tabIconStyle}/>
        </Tab>
        <Tab tab='List' activeTab={tab} onChange={setTab}>
          <Icons.List style={tabIconStyle}/>
        </Tab>
      </Tabs>

      {/* Render Components */}
      <TemplateDetailInfo show={tab === 'Profile'} data={data} />
    </DefaultLayout>
  )
}
