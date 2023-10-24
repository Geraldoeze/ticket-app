import DefaultLayout from '../../../../layout/DefaultLayout';
import Breadcrumb from '../../../../components/BreadCrumb';

export default function ExpensesPage(props: any) {
  return (
      <DefaultLayout>
        <Breadcrumb 
          routes={[
            { name: 'Expenses', path: '/app/bursers/expenditures/expenses' },
            { name: 'Expenditures', path: '/app/bursers/expenditures' },
        ]}
          homeRoute="/app/bursers/expenditures" 
          homeRouteName="Expenditures" 
          pageName="Expenses" 
        />
      </DefaultLayout>
  )
}


