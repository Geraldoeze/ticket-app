import DefaultLayout from '../../../../layout/DefaultLayout';
import Breadcrumb from '../../../../components/BreadCrumb';

export default function SubscriptionPage(props: any) {
  return (
      <DefaultLayout>
        <Breadcrumb 
          routes={[
            { name: 'Subscriptions', path: '/app/bursers/expenditures/subscriptions' },
            { name: 'Expenditures', path: '/app/bursers/expenditures' },
        ]}
          homeRoute="/app/bursers/expenditures" 
          homeRouteName="Expenditures" 
          pageName="Subscriptions" 
        />
      </DefaultLayout>
  )
}


