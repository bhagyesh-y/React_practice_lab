import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import hooks from './hooks.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <hooks />
  </StrictMode>,
)
