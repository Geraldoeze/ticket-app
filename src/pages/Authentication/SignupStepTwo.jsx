import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { Button } from '../../components/form'
import Logo from '../../images/logo/uweru-logo.png';
import SignupStages from './components/SignupStages';
import SelectField, { SelectFieldOption } from '../../components/SelectField';


export default function StepTwo(props) {
  const navigate = useNavigate();
  const [plan, setPlan] = useState('');
  const [accountCreator, setAccountCreator] = useState('');
  const [schoolAccountType, setSchoolAccountType] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => { 
    e?.preventDefault();

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/auth/stepthree');
    }, 6000)
  }

  return (
    <div className="flex h-screen flex-1 flex-col justify-center 
    px-6 py-8 lg:px-8 rounded-sm border border-stroke bg-white
    shadow-default dark:border-strokedark dark:bg-boxdark overflow-scroll">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src={Logo}
            alt="Uweru School"
            style={{width: '100px', height: '100px'}}
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign Up to Uweru
          </h2>
        </div>

        <SignupStages 
        stageCount="2"
        activeStage="Account Setup"
        stages={[{title: 'Account Setup', desc: 'Account Setup Information'}]} 
        />

        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6" action="#" method="POST">
            <SelectField isRequired label="Account Creator" value={accountCreator} onChange={setAccountCreator}>
                <SelectFieldOption value="admin">School Admin</SelectFieldOption>
                <SelectFieldOption value="owner">School Owner</SelectFieldOption>
                <SelectFieldOption value="header teacher">Head Teacher</SelectFieldOption>
                <SelectFieldOption value="teacher">School Teacher</SelectFieldOption>
                <SelectFieldOption value="employee">School Employee</SelectFieldOption>
            </SelectField>
            <SelectField 
                isRequired
                description="Choose the multiple schools option if you have more than one school locations, branches or 
                different schools owned by one entity." 
                label="School Account Type" 
                value={schoolAccountType} 
                onChange={setSchoolAccountType}>
                <SelectFieldOption value="single">Single School</SelectFieldOption>
                <SelectFieldOption value="multiple">Multiple Schools</SelectFieldOption>
            </SelectField>
            <SelectField 
                label="Subscription Plan"
                isRequired
                description="The free plan has limited features and it's best for trial purpose. 
                You can change the plan anytime on your settings." 
                value={plan} 
                onChange={setPlan}>
                <SelectFieldOption value="free">Free Plan</SelectFieldOption>
                <SelectFieldOption value="premium">Premium Plan</SelectFieldOption>
                <SelectFieldOption value="enterprise">Enterpise Plan</SelectFieldOption>
            </SelectField>
            <Button>{loading ? 'Loading...' : 'Save'}</Button>
          </form>

          <p className="mt-7 text-center text-sm text-gray-500">
          Already have an account?{' '}
            <Link to="/auth/signin" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 text-primary">
            Sign In
            </Link>
          </p>
        </div>
      </div>
  )
}