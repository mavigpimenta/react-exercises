import React from 'react'
import ReactDOM from 'react-dom/client'
import { Login } from './Login/components/login'
import { Navbar } from './Home/components/Navbar'
import { Home } from './Home/Home' 
import '../src/index.css'
import { Wind } from './wind/Wind'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Wind></Wind>
  </React.StrictMode>,
)
