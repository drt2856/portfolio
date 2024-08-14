import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { LenguageContext } from './context/lenguageContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <LenguageContext>
    <App />
  </LenguageContext>,
)
