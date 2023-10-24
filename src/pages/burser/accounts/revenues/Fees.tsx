import DefaultLayout from '../../../../layout/DefaultLayout';
import Breadcrumb from '../../../../components/BreadCrumb';

export default function FeesPage(props: any) {
  return (
      <DefaultLayout>
        <Breadcrumb 
          routes={[
            { name: 'Fees', path: '/app/bursers/revenues/fees' },
            { name: 'Revenues', path: '/app/bursers/revenues' },
        ]}
          homeRoute="/app/bursers/revenues" 
          homeRouteName="Revenues" 
          pageName="Fees" 
        />
      </DefaultLayout>
  )
}


