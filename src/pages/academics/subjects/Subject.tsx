import React from 'react';
import DefaultLayout from '../../../layout/DefaultLayout';
import BreadCrumb from '../../../components/BreadCrumb';
import Tabs, { Tab } from '../../../components/tabs';
import Icons from '../../../layout/navIcons';
import SubjectDetailInfo from './SubjectDetailInfo';

const tabIconStyle = { marginTop: '5px', marginRight: '5px' };

export default function Subject() {
    const [tab, setTab] = React.useState<string>('Details')
    const data = {} //comes from api

    return (
        <DefaultLayout>
            <BreadCrumb
                pageName='Ticket Detail Page'
                homeRoute='/app/tickets'
                homeRouteName='Ticket'
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
            <SubjectDetailInfo show={tab === 'Details'} data={data} />
        </DefaultLayout>
    )
}
