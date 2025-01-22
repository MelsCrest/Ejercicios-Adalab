import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' //stilos principales de la página
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
