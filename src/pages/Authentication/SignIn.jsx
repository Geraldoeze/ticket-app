import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FieldInput from '../../components/FieldInput';
import PasswordInput from '../../components/PasswordInput';
import Button from '../../components/Button';
import Logo from '../../images/logo/uweru-logo.png';

export default function SignIn(props) {
  const navigate = useNavigate();
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [togglePassword, setTogglePassword] = useState(true)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSignin = (e) => { 
   setError(false)
    e?.preventDefault()
    if (username?.length < 2 || password?.length < 4) {
      setError(true)
      return;
    } else {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      navigate('/app/tickets');
    }, 6000)
  }
  }

  return (
    <div className = "flex h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark" >
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
         
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSignin} className="space-y-6" action="#" method="POST">
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
            <Button width='w-[258px]' size='lg' elevation={1} variant='primary'>{loading ? 'Loading...' : 'Sign In'}</Button>
          </form>
        { error && <h4 style={{color: 'red'}} className="text-center" >Invalid Credentials</h4>}
         
        </div>
      </div>
  )
}