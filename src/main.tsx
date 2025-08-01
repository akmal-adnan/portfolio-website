import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/index.scss';
import App from '@/pages/App';
import { BrowserRouter } from 'react-router';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
