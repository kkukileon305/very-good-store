import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { SWRConfig } from 'swr';
import App from './App';
import './globals.css';
import { fetcher } from './pages/products/ProductList';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <SWRConfig
        value={{
          fetcher,
          suspense: true,
        }}
      >
        <App />
      </SWRConfig>
    </BrowserRouter>
  </React.StrictMode>
);
