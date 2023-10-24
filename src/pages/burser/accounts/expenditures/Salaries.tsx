import DefaultLayout from '../../../../layout/DefaultLayout';
import Breadcrumb from '../../../../components/BreadCrumb';

export default function SalariesPage(props: any) {
  return (
      <DefaultLayout>
        <Breadcrumb 
          routes={[
            { name: 'Salaries', path: '/app/bursers/expenditures/salaries' },
            { name: 'Expenditures', path: '/app/bursers/expenditures' },
        ]}
          homeRoute="/app/bursers/expenditures" 
          homeRouteName="Expenditures" 
          pageName="Salaries" 
        />
      </DefaultLayout>
  )
}


