import React from 'react';
import { createRoot } from 'react-dom/client';
import HomePage from './index.jsx';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>
); 