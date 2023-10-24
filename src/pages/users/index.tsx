import DefaultLayout from '../../layout/DefaultLayout';
import Breadcrumb from '../../components/BreadCrumb';


export default function Users() {
  return (
      <DefaultLayout>
        <Breadcrumb 
          homeRoute="/app/dashboard" 
          homeRouteName="Dashboard" 
          pageName="Users" 
        />
      </DefaultLayout>
  )
}


