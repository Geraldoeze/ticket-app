import React from 'react';
import DefaultLayout from '../../../layout/DefaultLayout';
import BreadCrumb from '../../../components/BreadCrumb';
import Tabs, { Tab } from '../../../components/tabs';
import Icons from '../../../layout/navIcons';
import QuestionDetailInfo from './QuestionDetailInfo';

const tabIconStyle = { marginTop: '5px', marginRight: '5px' };

export default function Question() {
    const [tab, setTab] = React.useState<string>('Details')
    const data = {} //comes from api

    return (
        <DefaultLayout>
            <BreadCrumb
                pageName='Question Detail Page'
                homeRoute='/app/admins/academics/questions'
                homeRouteName='Questions'
            />
            {/* Render Components */}
            <QuestionDetailInfo show={tab === 'Details'} data={data} />
        </DefaultLayout>
    )
}
