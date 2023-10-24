import DefaultLayout from '../../../../layout/DefaultLayout';
import Breadcrumb from '../../../../components/BreadCrumb';

export default function CreditsPage(props: any) {
  return (
      <DefaultLayout>
        <Breadcrumb 
          routes={[
            { name: 'Credits', path: '/app/bursers/revenues/credits' },
            { name: 'Revenues', path: '/app/bursers/revenues' },
        ]}
          homeRoute="/app/bursers/revenues" 
          homeRouteName="Revenues" 
          pageName="Credits" 
        />
      </DefaultLayout>
  )
}


