import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import NodeContextProvider from './contexts/NodeContext.tsx'
import ContextProvider from './contexts/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </StrictMode>,
)
