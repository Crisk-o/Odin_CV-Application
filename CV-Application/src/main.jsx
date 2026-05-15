import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
import General_Info from './components/General-Info.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <General_Info />
  </StrictMode>,
)
