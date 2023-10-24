import React from 'react'
import ReactDOM from 'react-dom/client'
import 'react-toastify/dist/ReactToastify.css'
import App from './App'
import './index.css'
import '../src/css/dependencies.css';
import './satoshi.css'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { AppProvider } from './context/AppContext'
import AppLoader, { globalLoadingRef } from './components/Loader'
import { ToastContainer } from 'react-toastify'
import 'react-calendar/dist/Calendar.css' 
//custom styling pf react calendar
//https://github.com/wojtekmaj/react-calendar
import 'react-datepicker/dist/react-datepicker.css'
// https://github.com/Hacker0x01/react-datepicker

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <QueryClientProvider client={queryClient}>
        <ToastContainer />
        <App />
      </QueryClientProvider>
    </AppProvider>
    <AppLoader ref={globalLoadingRef} />
  </React.StrictMode>
)