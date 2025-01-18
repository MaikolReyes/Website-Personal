import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './tailwind.css'
import './sass/styles.scss'
import { Footer, FormContact, Navbar } from './components';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <App />
    <FormContact />
    <Footer />
  </React.StrictMode>
)
