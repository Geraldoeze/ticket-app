import DefaultLayout from '../../../../layout/DefaultLayout';
import Breadcrumb from '../../../../components/BreadCrumb';

export default function TaxesPage(props: any) {
  return (
      <DefaultLayout>
        <Breadcrumb 
          routes={[
            { name: 'Taxes', path: '/app/bursers/expenditures/taxes' },
            { name: 'Expenditures', path: '/app/bursers/expenditures' },
        ]}
          homeRoute="/app/bursers/expenditures" 
          homeRouteName="Expenditures" 
          pageName="Taxes" 
        />
      </DefaultLayout>
  )
}


