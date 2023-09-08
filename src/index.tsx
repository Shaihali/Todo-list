import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { TableContextProvider } from './components/context/context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <TableContextProvider>
      <App />
    </TableContextProvider>
  </React.StrictMode>
);
