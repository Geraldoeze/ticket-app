import DefaultLayout from '../../../../layout/DefaultLayout';
import Breadcrumb from '../../../../components/BreadCrumb';

export default function PayrollPage(props: any) {
  return (
      <DefaultLayout>
        <Breadcrumb 
          routes={[
            { name: 'Payrolls', path: '/app/bursers/expenditures/payrolls' },
            { name: 'Expenditures', path: '/app/bursers/expenditures' },
        ]}
          homeRoute="/app/bursers/expenditures" 
          homeRouteName="Expenditures" 
          pageName="Payrolls" 
        />
      </DefaultLayout>
  )
}


