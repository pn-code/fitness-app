import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <Home />
  </React.StrictMode>
)
