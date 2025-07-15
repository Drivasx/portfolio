import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './animations.css'
import App from './App.tsx'
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({
  duration: 800,
  delay: 100,
  once: true,
  easing: 'ease-out-cubic'
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
