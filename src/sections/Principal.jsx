// Imports React
import React from 'react'
// Personal Image
import imagenPersonal from '../img/IMG_1905.jpg'
//Sections
import { Services } from './Services';
import { Portfolio } from "./Portfolio";
import { FormContact } from "../components/FormContact";
import { Certifications } from './Certifications';

export const Principal = () => {
    return (
        <>
            <div className="heroImage" id='home'>
                <div className="heroText animate__animated animate__backInLeft">
                    <p className="textName d-flex">Hola, Mi nombre es</p>
                    <h2 className='textNamePrincipal mt-5'>Maikol Reyes</h2>
                    <p className="textDescription">Soy un <span className='textResalt'>Desarrollador Frontend</span> en constante evolucion
                        en busqueda de experiencia en el mundo IT, Siempre estoy en busca de nuevos desafíos
                        y oportunidades de aprendizaje.</p>
                    <div className='containerButtonsPrincipal'>
                        <a className='buttonsPrincipal btn' href="#contacto">Contacto</a>
                        <a className='buttonsPrincipal btn'>CV</a>
                    </div>
                </div>
            </div>

            <div className='textAboutMe'>
                <h2 className='titleAboutMe'>Acerca de mi</h2>
            </div>

            <div className='containerAboutMe'>
                <div>
                    <img className='imagenPersonal' src={imagenPersonal} alt="" />
                </div>
                <div className='containerTextAboutMe'>
                    <p className='textDescriptionAboutMe'>Soy un progamador especializado en el Desarrollo Frontend, Mis conocimientos técnicos son sólidos y completos, tambien poseo habilidades destacadas en tecnologías clave como HTML, CSS, SASS, Boostraps, JavaScript, Typescript, React y Node.
                        Siempre estoy en constante busqueda para mejorar mis habilidades como programador y mantenerme al día con las últimas tendencias y tecnologías en el mundo del Desarrollo Frontend.
                    </p>
                    <p className='textDescriptionAboutMe' >
                        En resumen, como desarrollador frontend, soy un profesional altamente calificado, comprometido con la creación de soluciones personalizadas y atractivas que brinden a los usuarios una experiencia excepcional.
                        Si estás buscando un desarrollador frontend con estas características, no busques más y ponte en contacto conmigo para comenzar a trabajar juntos en tu próximo proyecto.
                    </p>
                </div>
            </div>

            <div className="containerSkills">
                <div className='d-flex flex-column align-items-center'>
                    <h2 className="titleHabilities">Habilidades</h2>
                    <div>
                        <ul className="listSkills">
                            <li className="icons-skill"><a className="icons-image" href="#"><i className="fa-brands fa-html5 icon"></i></a></li>
                            <li className="icons-skill"><a className="icons-image" href="#"><i className="fa-brands fa-css3-alt icon"></i></a></li>
                            <li className="icons-skill"><a className="icons-image" href="#"><i className="fa-brands fa-bootstrap icon"></i></a></li>
                            <li className="icons-skill"><a className="icons-image" href="#"><i className="fa-brands fa-sass icon"></i></a></li>
                            <li className="icons-skill"><a className="icons-image" href="#"><i className="fa-brands fa-square-js icon"></i></a></li>
                            <li className="icons-skill"><a className="icons-image" href="#"><i className="fa-brands fa-react icon"></i></a></li>
                            <li className="icons-skill"><a className="icons-image" href="#"><i className="fa-brands fa-node icon"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <Services />

            <Portfolio />

            <Certifications />

            <FormContact />
        </>
    )
}
