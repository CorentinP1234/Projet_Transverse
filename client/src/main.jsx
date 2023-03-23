import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./App"
import Footer from './components/Footer'
import Formulaire from './checkout/Formulaire'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App></App>
    {/* <Formulaire></Formulaire> */}
  </React.StrictMode>,
)

