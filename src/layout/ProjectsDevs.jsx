import React from 'react'
import { projects } from '../resources'

export const ProjectsDevs = () => {
    return (
        <>
            <div className="portfolio flex flex-col items-center mt-20" id="portfolio" >
                <h2 className="portfolio-title text-4xl font-semibold font-title animate__animated animate__backInLeft">Proyectos</h2>

                <p className="portfolio-subtitle w-1/3 m-4 text-base font-title text-center">Te invito a echar un vistazo a mi recorrido en el mundo del desarrollo front-end. Cada proyecto que encontrarás aquí es una pieza clave en mi aprendizaje y evolución. ¡Espero que disfrutes explorando mis creaciones tanto como yo disfruté creándolas!</p>
            </div>

            {
                projects.map(({ name, id, img, description, github, deploy }) => (
                    <div className="container-projects mb-11 flex justify-center text-white animate__animated animate__backInLeft" key={id} >

                        <div className="container-images-projects flex items-center bg-customProject h-80 w-1/4 rounded-xl">
                            <img className="imageProject w-4/5 mx-auto" src={img} alt={name} />
                        </div>

                        <div className="container-text-projects flex flex-col items-center justify-center bg-dark w-1/4 h-80 rounded-xl">

                            <h3 className="title-project mb-3 font-title text-2xl">{name}</h3>
                            <p className="description-project text-customHover text-base font-text w-4/5 text-center">{description}</p>

                            <div className="container-buttons mt-3 flex justify-center gap-3">

                                <a className="button-portfolio btn text-base bg-customPrimary font-title font-bold p-2 w-36 hover:text-black hover:bg-customHover" target="_blank" href={deploy}><i className="fa-solid fa-arrow-up-right-from-square p-2"></i>Deploy</a>
                                <a className="button-portfolio btn text-base bg-customPrimary font-title font-bold p-2 w-36 hover:text-black hover:bg-customHover" target="_blank" href={github} ><i className=" fa-brands fa-github p-2"></i>Github</a>

                            </div>
                        </div >
                    </div>
                ))
            }
        </>
    )
}
