import React from 'react';
import DefaultLayout from '../../../layout/DefaultLayout';
import BreadCrumb from '../../../components/BreadCrumb';
import Tabs, { Tab } from '../../../components/tabs';
import Icons from '../../../layout/navIcons';
import EvaluationDetailInfo from './EvaluationDetailInfo';

const tabIconStyle = { marginTop: '5px', marginRight: '5px' };

export default function Evaluation() {
    const [tab, setTab] = React.useState<string>('Details')
    const data = {} //comes from api

    return (
        <DefaultLayout>
            <BreadCrumb
                pageName='Evaluation Detail'
                homeRoute='/app/admins/academics/evaluations'
                homeRouteName='Evaluation'
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
            <EvaluationDetailInfo show={tab === 'Details'} data={data} />
        </DefaultLayout>
    )
}
