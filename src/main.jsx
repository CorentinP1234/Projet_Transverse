import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import SignInSide from './sign-in-side/SignInSide'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <SignInSide></SignInSide>
  </React.StrictMode>,
)
