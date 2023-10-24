import DefaultLayout from '../../../../layout/DefaultLayout';
import Breadcrumb from '../../../../components/BreadCrumb';

export default function LevysPage(props: any) {
  return (
      <DefaultLayout>
        <Breadcrumb 
          routes={[
            { name: 'Levys', path: '/app/bursers/revenues/levys' },
            { name: 'Revenues', path: '/app/bursers/revenues' },
        ]}
          homeRoute="/app/bursers/revenues" 
          homeRouteName="Revenues" 
          pageName="Levys" 
        />
      </DefaultLayout>
  )
}


