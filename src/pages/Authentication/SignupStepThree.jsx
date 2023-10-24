import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FieldInput from '../../components/FieldInput';
import { Button } from '../../components/form'
import Logo from '../../images/logo/uweru-logo.png';
import SignupStages from './components/SignupStages';
import SelectField, { SelectFieldOption } from '../../components/SelectField';
import CountriesAndStates from '../../data/countries-and-states.json';


export default function StepThree(props) {
  const navigate = useNavigate();
  const [country, setCountry] = useState('')
  const [state, setState] = useState('')
  const [city, setCity] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e?.preventDefault();

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/app/dashboard');
    }, 6000)
  }

  let selectedStates = CountriesAndStates?.filter(c => c?.country === country)[0] || CountriesAndStates[0]?.states

  return (
    <div className="flex h-screen flex-1 flex-col justify-center 
    px-6 py-12 lg:px-8 rounded-sm border border-stroke bg-white 
    shadow-default dark:border-strokedark dark:bg-boxdark overflow-scroll">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src={Logo}
          alt="Uweru School"
          style={{ width: '100px', height: '100px' }}
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign Up to Uweru
        </h2>
      </div>

      <SignupStages
        stageCount="3"
        activeStage="School Meta Info"
        stages={[{ title: 'School Meta Info', desc: 'The school address and location' }]}
      />

      <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-6" action="#" method="POST">
          <SelectField label="Country" value={country} onChange={setCountry}>
            {
              CountriesAndStates?.map(ct => (<SelectFieldOption value={ct.country}>{ct.country}</SelectFieldOption>))
            }
          </SelectField>
          <SelectField label="State" value={state} onChange={setState}>
            {
              selectedStates?.states?.map(c => (<SelectFieldOption value={c}>{c}</SelectFieldOption>))
            }
          </SelectField>
          <FieldInput
            label="City"
            id="city"
            name="city"
            placeholder="City"
            value={city}
            onChange={setCity}
          />
          <Button>{loading ? 'Loading...' : 'Complete Registration'}</Button>
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