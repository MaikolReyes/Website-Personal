import React from "react"
import projectFranquicias360 from '../img/franquicias360-project.png'
import projectZulia from '../img/zulia-1.png'
import projectMinzke from '../img/minzke-project.png'

export const Portfolio = () => {

    return (
        <>
            <section className="sectionPortfolio" id="portfolio" >
                <h2 className="titlePortfolio animate__animated animate__backInLeft">Proyectos</h2>
                <p className="subtitlePortfolio">Te invito a echar un vistazo a mi recorrido en el mundo del desarrollo frontend.
                    Cada proyecto que encontrarás aquí es una pieza clave en mi aprendizaje y evolución.
                    Este es mi pequeño espacio para compartir los proyectos que he realizado hasta ahora
                    ¡Espero que disfrutes explorando mis creaciones tanto como yo disfruté creándolas!.</p>
            </section>

            <div className="containerProjects animate__animated animate__backInLeft">

                <div className="containerImageProjects">
                    <img className="imageProject" src={projectFranquicias360} alt="" />
                </div>
                <div className="containerTextProjects bg-dark">
                    <h3 className="titleProject">Franquicias360</h3>
                    <p className="descriptionProjects">Franquicias360 es mi primer proyecto realizado en conjunto con diseñadores UX/UI.
                        Para el desarrollo de este proyecto, utilice como lenguaje de programacion JavaScript + React y para la parte estética de la página utilice el preprocesador SASS, ya que permite una mayor estructura y enfoque en cada sección del sitio.
                        Esta landing page esta destinada para una empresa especializada en brindar servicios de marketing y publicidad a franquicias.</p>
                    <div className="containerButtons">
                        <a className="buttonPortfolio btn" target="_blank" href="https://franquicias360.netlify.app"><i class="fa-solid fa-arrow-up-right-from-square p-2"></i>Deploy</a>
                        <a className="buttonPortfolio btn" target="_blank" href="https://github.com/MaikolReyes/Franquicias360" ><i class=" fa-brands fa-github p-2"></i>Github</a>
                    </div>
                </div >
            </div >

            <div className="containerProjects animate__animated animate__backInLeft">

                <div className="containerTextProjects bg-dark">
                    <h3 className="titleProject">Zulia Marketing Digital</h3>
                    <p className="descriptionProjects">Zulia Marketing Digital es un proyecto personal fundado por mi a modo de emprendimiento en el que se ofrecen servicios de marketing digital potenciados con inteligencia artificial.
                        Para este proyecto utilice como lenguaje de programacion Typescript + React y para toda la parte estetica de la pagina utilize Boostraps, Animate.CSS y el procesador SASS para todo el codigo CSS.</p>
                    <div className="containerButtons">
                        <a className="buttonPortfolio btn" href="https://zuliamarketingdigital.com/" target="_blank"><i class="fa-solid fa-arrow-up-right-from-square p-2"></i>Deploy</a>
                        <a className="buttonPortfolio btn" href="https://github.com/MaikolReyes/Zulia-Marketing-Digital" target="_blank"><i class="fa-brands fa-github p-2"></i>Github</a>
                    </div>
                </div>
                <div className="containerImageProjects">
                    <img className="imageProject" src={projectZulia} alt="" />
                </div>
            </div>


            <div className="containerProjects animate__animated animate__backInLeft">
                <div className="containerImageProjects">
                    <img className="imageProject" src={projectMinzke} alt="" />
                </div>
                <div className="containerTextProjects bg-dark">
                    <h3 className="titleProject">Minzke</h3>
                    <p className="descriptionProjects">Minzke fue mi primer proyecto como programador y me ayudo a asentar las bases de mis conocimientos, es un ecommerce de herramientas electricas y manuales posee un carrito de compras hecho únicamente con JavaScript.</p>
                    <div className="containerButtons">
                        <a className="buttonPortfolio btn" href="https://maikolreyes.github.io/Minzke-Ecommerce/" target="_blank"><i class="fa-solid fa-arrow-up-right-from-square p-2"></i>Deploy</a>
                        <a className="buttonPortfolio btn" href="https://github.com/MaikolReyes/Minzke-Ecommerce" target="_blank"><i class="fa-brands fa-github p-2"></i>Github</a>
                    </div>
                </div>

            </div>
        </>
    )
}
