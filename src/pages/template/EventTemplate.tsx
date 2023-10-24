import React from 'react';
import DefaultLayout from '../../layout/DefaultLayout';
import Breadcrumb from '../../components/BreadCrumb';
import UweruEvent from '../../components/event';
import ErrorIcon from '../../images/error.svg';
import SuccessIcon from '../../images/success.svg';
import NotFoundIcon from '../../images/not-found.svg';
import SelectField, { SelectFieldOption } from '../../components/SelectField';


export default function TemplateDetailsPage() {
  const [tab, setTab] = React.useState<string>('notFound')
  
  const handleNavigate = (e: any) => {}
  const handldSelect = (e: any) => {}
   
  const RendersImageComponent = tab === 'error' ? ErrorIcon
  : tab === 'success' ? SuccessIcon : NotFoundIcon

  return (
    <DefaultLayout>
      <Breadcrumb
        pageName='Template Event Page' 
        homeRoute='/app/templates/ListPage'
        homeRouteName='Template List Page'
      />
      <SelectField
        classNames='w-48'
        id="events"
        name="events"
        value={tab}
        onChange={(val: string) => setTab(val)}
        label="Select Event Pages">
        <SelectFieldOption isDefault value="notFound">Not Found Page</SelectFieldOption>
        <SelectFieldOption value="success">Success Page</SelectFieldOption>
        <SelectFieldOption value="error">Error Page</SelectFieldOption>
      </SelectField>
      <UweruEvent 
        image={RendersImageComponent}
        title='Sorry, the page can’t be found'
        description='The page you were looking for appears to have been moved, deleted or does not exist.'
        buttonText='Back to Home'
        onNavigate={handleNavigate}
      />
    </DefaultLayout>
  )
}
