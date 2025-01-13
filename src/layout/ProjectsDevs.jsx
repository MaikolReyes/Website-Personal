import React from 'react'
import { projects } from '../resources'

export const Projects = () => {
    return (
        <>
            <div className="portfolio" id="portfolio" >
                <h2 className="portfolio-title animate__animated animate__backInLeft">Proyectos</h2>
                <p className="portfolio-subtitle">Te invito a echar un vistazo a mi recorrido en el mundo del desarrollo front-end. Cada proyecto que encontrarás aquí es una pieza clave en mi aprendizaje y evolución. ¡Espero que disfrutes explorando mis creaciones tanto como yo disfruté creándolas!</p>
            </div>
            {
                projects.map(({ name, id, img, description, github, deploy }) => (
                    <div className="container-projects animate__animated animate__backInLeft" key={id} >

                        <div className="container-images-projects">
                            <img className="imageProject" src={img} alt={name} />
                        </div>

                        <div className="container-text-projects bg-dark">
                            <h3 className="title-project">{name}</h3>
                            <p className="description-project">{description}</p>

                            <div className="container-buttons">

                                <a className="button-portfolio btn" target="_blank" href={deploy}><i className="fa-solid fa-arrow-up-right-from-square p-2"></i>Deploy</a>
                                <a className="button-portfolio btn" target="_blank" href={github} ><i className=" fa-brands fa-github p-2"></i>Github</a>

                            </div>
                        </div >
                    </div>
                ))
            }
        </>
    )
}
