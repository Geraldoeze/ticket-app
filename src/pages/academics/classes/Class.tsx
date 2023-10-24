import React from 'react';
import DefaultLayout from '../../../layout/DefaultLayout';
import BreadCrumb from '../../../components/BreadCrumb';
import Tabs, { Tab } from '../../../components/tabs';
import Icons from '../../../layout/navIcons';
import ClassDetailInfo from './ClassDetailInfo';

const tabIconStyle = { marginTop: '5px', marginRight: '5px' };

export default function Class() {
    const [tab, setTab] = React.useState<string>('Details')
    const data = {} //comes from api

    return (
        <DefaultLayout>
            <BreadCrumb
                pageName='Classes Detail Page'
                homeRoute='/app/admins/academics/classes'
                homeRouteName='Classes'
            />
            {/* Render Components */}
            <ClassDetailInfo show={tab === 'Details'} data={data} />
        </DefaultLayout>
    )
}
