// Imports React
import React from 'react'
// Personal Image
import imagenPersonal from '../img/IMG_1905.jpg'
//Sections
import { Services } from './Services';
import { Portfolio } from "./Portfolio";
import { FormContact } from "../components/FormContact";
import { Certifications } from './Certifications';
import { AboutMe } from './AboutMe';
import { Skills } from './Skills';

export const Principal = () => {
    return (
        <>
            <div className="heroImage" id='home'>
                <div className="containerHeroText animate__animated animate__backInLeft">
                    <p className="textName">Hola, Mi nombre es</p>
                    <h2 className='textNamePrincipal'>Maikol Reyes</h2>
                    <p className="textDescription">Soy un <span className='textResalt'>Desarrollador Frontend</span> en constante evolucion
                        en busqueda de experiencia en el mundo IT, Siempre estoy en busca de nuevos desafíos
                        y oportunidades de aprendizaje.</p>
                    <div className='containerButtonsPrincipal'>
                        <a className='buttonsPrincipal btn' href="#contacto">Contacto</a>
                        <a className='buttonsPrincipal btn' href='CV-Maikol-Reyes.pdf' target='_blank'>CV</a>
                    </div>
                </div>
            </div>
        </>
    )
}
