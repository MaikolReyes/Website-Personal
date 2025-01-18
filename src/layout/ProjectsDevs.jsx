import React from 'react'
import { projects } from '../resources'

export const ProjectsDevs = () => {
    return (
        <>
            <div className="flex flex-col items-center mt-20" id="portfolio" >
                <h2 className="text-3xl large-desktop:text-4xl font-semibold font-title animate__animated animate__backInLeft">Proyectos</h2>

                <p className="w-4/5 large-desktop:w-1/3 m-4 text-base font-title text-center desktop:w-2/5">Te invito a echar un vistazo a mi recorrido en el mundo del desarrollo front-end. Cada proyecto que encontrarás aquí es una pieza clave en mi aprendizaje y evolución. ¡Espero que disfrutes explorando mis creaciones tanto como yo disfruté creándolas!</p>
            </div>

            {
                projects.map(({ name, id, img, description, github, deploy }) => (
                    <div className="mb-11 flex justify-center text-white flex-col large-desktop:flex-row items-center animate__animated animate__backInLeft" key={id} >

                        <div className="flex items-center w-4/5 h-48 bg-customProject large-desktop:h-80 large-desktop:w-1/4 rounded-xl desktop:h-72">
                            <img className="imageProject w-4/5 mx-auto" src={img} alt={name} />
                        </div>

                        <div className="flex flex-col items-center w-4/5 h-48 justify-center bg-dark large-desktop:w-1/4 large-desktop:h-80 rounded-xl desktop:w-1/3 desktop:h-72">

                            <h3 className="mb-3 font-title text-2xl">{name}</h3>
                            <p className="description-project text-customHover text-base font-text w-4/5 text-center">{description}</p>

                            <div className="mt-3 flex justify-center gap-3">

                                <a className="btn text-base bg-customPrimary font-title font-bold p-2 large-desktop:w-36 hover:text-black hover:bg-customHover" target="_blank" href={deploy}><i className="fa-solid fa-arrow-up-right-from-square p-2"></i>Deploy</a>
                                <a className="btn text-base bg-customPrimary font-title font-bold p-2 large-desktop:w-36 hover:text-black hover:bg-customHover" target="_blank" href={github} ><i className=" fa-brands fa-github p-2 "></i>Github</a>

                            </div>
                        </div >
                    </div>
                ))
            }
        </>
    )
}
