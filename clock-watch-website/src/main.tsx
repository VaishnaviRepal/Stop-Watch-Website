// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import CustomHooks_Study from './CustomHooks_Study';

createRoot(document.getElementById('root')!).render(
  <>
    <App />
    <CustomHooks_Study />
  </>
    
  
)
