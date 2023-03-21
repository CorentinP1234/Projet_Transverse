import React from 'react'
import ReactDOM from 'react-dom/client'
import SignInSide from './SignIn_PAGE/SignIn'
import AppBar from './components/Pages/Profile'
import Dashboard from './components/Pages/Profile'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <SignInSide></SignInSide> */}
    <Dashboard></Dashboard>
  </React.StrictMode>,
)

