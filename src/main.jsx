import { StrictMode } from 'react';
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';// ✅ correct — matches actual filename
import My from './My.jsx';
import Thumb from './Thumb.jsx';  
import Todo from './Todo.jsx';
import Quote from './assets/Quote.jsx';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>
);