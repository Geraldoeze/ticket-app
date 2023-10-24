import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FieldInput from '../../components/FieldInput';
import PasswordInput from '../../components/PasswordInput';
import { Button } from '../../components/form'
import Logo from '../../images/logo/uweru-logo.png';
import SignupStages from './components/SignupStages';

export default function SignUp(props) {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [togglePassword, setTogglePassword] = useState(true);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignin = (e) => { 
    e?.preventDefault();

    setLoading(true)
    setTimeout(() => {
      setLoading(false);
      navigate('/auth/steptwo');
    }, 6000)
  }

  return (
    <div className="flex h-screen flex-1 flex-col justify-center 
    px-6 py-12 lg:px-8 rounded-sm border border-stroke bg-white 
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
        activeStage={"School Info"} 
        stages={[
          {title: 'School Info', desc: 'The school basic information'},
          ]} 
        />

        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSignin} className="space-y-6" action="#" method="POST">
            <FieldInput
              label="School Name"
              id="username"
              name="username"
              placeholder="Leads High School"
              value={username} 
              onChange={setUsername}
            />
            <FieldInput
              label="Username"
              id="username"
              name="username"
              placeholder="modelschool"
              value={username} 
              onChange={setUsername}
            />
            <PasswordInput 
              label="Passord"
              id="password"
              name="password"
              value={password} 
              placeholder="********"
              onChange={setPassword}
              togglePassword={togglePassword}
              onTogglePassword={setTogglePassword}
            />
            <Button variant='primary'>{loading ? 'Loading...' : 'Sign Up'}</Button>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
          Already have an account?{' '}
            <Link to="/auth/signin" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 text-primary">
            Sign In
            </Link>
          </p>
        </div>
      </div>
  )
}