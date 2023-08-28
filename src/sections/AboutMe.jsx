import React from 'react'
import imagenPersonal from '../img/IMG_1905.jpg'

export const AboutMe = () => {
    return (
        <>
            <div className='sectionAboutMe'>
                <h2 className='titleAboutMe'>Acerca de mi</h2>
            </div>

            <div className='containerAboutMe'>

                <img className='imagenPersonal' src={imagenPersonal} alt="" />

                <div className='containerTextAboutMe'>
                    <p className='DescriptionAboutMe'>Soy un progamador especializado en el Desarrollo Frontend,
                        Mis conocimientos técnicos son sólidos y completos, tambien poseo habilidades destacadas en
                        tecnologías clave como HTML, CSS, SASS, Boostraps, JavaScript, Typescript, React y Node.
                        Siempre estoy en constante busqueda para mejorar mis habilidades como programador y
                        mantenerme al día con las últimas tendencias y tecnologías en el mundo del Desarrollo Frontend.
                    </p>
                    <p className='DescriptionAboutMe' >
                        A lo largo de mi trayecto, he mantenido un constante aprendizaje que me ha permitido ampliar
                        mis conocimientos no solo en frontend, sino también en backend, testing y principios SOLID.
                        Si estás buscando un desarrollador frontend con estas características, no busques más y ponte
                        en contacto conmigo para comenzar a trabajar juntos en tu próximo proyecto.
                    </p>
                </div>
            </div>
        </>
    )
}
