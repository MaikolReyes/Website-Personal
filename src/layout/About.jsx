import React from 'react'

export const About = () => {

    const imagePersonal = "../img/perfil.jpg"

    return (
        <>
            <div className='about'>
                <h2 className='title-about'>Acerca de mi</h2>
            </div>

            <div className='container-about'>

                <img className='imagenPersonal' src={imagePersonal} alt="" />

                <div className='container-text-about'>
                    <p className='description-about'>Soy un Desarrollador de Software, que inicio su preparación en el mundo IT en el año 2022 en el que tome mi primer curso sobre desarrollo web y pude asentar los conocimientos en HTML, CSS y funcionalidades con JavaScript. Luego de finalizado continúe con mi aprendizaje de JavaScript para poder perfeccionar mis habilidades con el lenguaje de programación y por último aprendí sobre el framework React. JS para poder realizar sitios web más complejos y funcionales.
                    </p>
                    <p className='description-about'>
                        En cada aprendizaje realicé proyectos que se encuentran disponibles en mi repositorio de GitHub. Siempre estoy en constante aprendizaje para mantenerme al día con las últimas tendencias y tecnologías en el mundo del Desarrollo de Software.
                    </p>
                    <div className='text-center mt-2'>
                        <a className="buttonPortfolio btn" target="_blank" href='https://github.com/MaikolReyes'><i class="fa-brands fa-github p-2"></i>Github</a>
                    </div>

                </div>
            </div>
        </>
    )
}
