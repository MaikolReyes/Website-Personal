import React from 'react'
import imagenPersonal from '../img/IMG_1905.jpg'
import { Skills } from './Skills'
import { WebPages } from './WebPages'

export const Principal = () => {
    return (
        <>
            <div className="heroImage">
                <div className="heroText animate__animated animate__backInLeft">
                    <h1 className="textName">¡Hola!  Mi nombre es <span>Maikol Reyes</span></h1>
                    <p className="textDescription">Soy un Desarrollador Front-End en constante evolucion
                        en busqueda de experiencia en el mundo IT, Siempre estoy en busca de nuevos desafíos
                        y oportunidades de aprendizaje</p>
                </div>
            </div >

            <div className='textAboutMe'>
                <h2 className='text-pages bg-white text-dark mt-5'>Acerca de Mi</h2>
            </div>

            <div className='d-flex align-content-center'>

                <div className='containerImage'>
                    <img className='imagenPersonal' src={imagenPersonal} alt="" />
                </div>
                <div>
                    <p className='textDescription text-white'>Soy un progamador especializado en el front-end Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Iusto, obcaecati dignissimos. Officiis ex maiores molestias tempore cupiditate, ducimus ut iure eligendi
                        soluta nulla repudiandae totam quos recusandae, enim dolor saepe provident, quo aliquam ipsum maxime
                        blanditiis alias! Officia ex ipsa est ad molestias! Neque sit dolores perspiciatis et repellendus at?</p>
                </div>
            </div>

            <Skills />

            <WebPages />
        </>
    )
}
