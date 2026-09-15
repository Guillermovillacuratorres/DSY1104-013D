import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Inicio from './pages/inicio/Inicio.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Inicio />
  </StrictMode>,
)
