import React from 'react';
import ReactDOM from 'react-dom/client';
import { Navbar, Footer, FormContact } from './components'
import { Principal, AboutMe, Skills, Portfolio, Certifications } from "./sections"
import './sass/styles.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />

    <Principal />

    <AboutMe />

    <Skills />


    <Portfolio />

    <Certifications />

    <FormContact />

    <Footer />
  </React.StrictMode>
)
