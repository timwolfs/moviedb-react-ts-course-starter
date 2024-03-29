import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import ContextWrapper from './contexts/ContextWrapper';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ContextWrapper>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ContextWrapper>
  </React.StrictMode>
);
