import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import * as atatus from 'atatus-spa';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

// atatus.config('598499e8366d4ee985af8f5f8264c59f').install();
// atatus.notify(new Error('Test Atatus Setup'));

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

serviceWorkerRegistration.register();