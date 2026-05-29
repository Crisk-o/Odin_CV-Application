import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
import General_Info from './components/General-Info.jsx'
import Education_Info from './components/Education-Info.jsx'
import Experience_Info from './components/Experience-Info.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <General_Info />
    <Education_Info/>
    <Experience_Info/>
  </StrictMode>,
)
