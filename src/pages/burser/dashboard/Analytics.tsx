import DefaultLayout from '../../../layout/DefaultLayout';
import Breadcrumb from '../../../components/BreadCrumb';

export default function AnalyticsPage(props: any) {
  return (
      <DefaultLayout>
        <Breadcrumb 
          homeRoute="/app/bursers/dashboards" 
          homeRouteName="Dashboard" 
          pageName="Analytics" 
        />
      </DefaultLayout>
  )
}


