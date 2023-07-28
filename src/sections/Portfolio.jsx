import React from "react"
import image from '../img/franquicias360-project.png'


export const Portfolio = () => {

    const github = 'https://github.com/MaikolReyes/Franquicias360'

    return (
        <>
            <div className="textProjectsPrincipal" id="portfolio" >
                <h2 className="titlePortfolio animate__animated animate__backInLeft">Proyectos</h2>
            </div>
            <div className="containerTextPortfolio animate__animated animate__backInLeft">
                <p className="textPortfolio">Como desarrollador frontend, he tenido la oportunidad de trabajar en una variedad de proyectos interesantes. He creado sitios web para pequeñas y grandes empresas, aplicaciones móviles y proyectos web para startups. Cada proyecto que abordo es una oportunidad para aplicar mi experiencia y habilidades para crear algo verdaderamente único y atractivo.</p>
                <p className="textPortfolio mb-5">Mi enfoque se centra en crear proyectos que sean visualmente atractivos y altamente funcionales. Comienzo cada proyecto realizando una investigación exhaustiva sobre la marca o el negocio del cliente y sus objetivos específicos. Esto me ayuda a diseñar soluciones personalizadas que se adapten a las necesidades del cliente y que también brinden una experiencia excepcional al usuario.</p>
            </div >

            <div className="containerProjects mb-5 animate__animated animate__backInLeft">
                <div className="imageProjects">
                    <img className="imageSize" src={image} alt="" />
                </div>
                <div className="textProjects bg-dark">
                    <h3 className="titleProject">Franquicias360</h3>
                    <p className="descriptionProject">Franquicias360 es mi primer proyecto en el que participe de manera colaborativa con diseñadores UX/UI. El lenguaje que utilize para realizar este proyecto fue JavaScript utilizando
                        React como framework. Toda la parte de diseño y estetica de la pagina fue realizada con el preprocesador SASS para una mayor organizacion y enfoque en cada una de las secciones de la pagina. La pagina en si es una landing page
                        para un empresa que ofrece servicios de marketing y publicidad a franquicias y franquiciados.</p>
                    <div className="containerButtons">
                        <a className="btn" target="_blank" href="https://franquicias360.netlify.app"><i class="fa-solid fa-arrow-up-right-from-square p-2"></i>Deploy</a>
                        <a className="btn" target="_blank" href="https://github.com/MaikolReyes/Franquicias360" ><i class=" fa-brands fa-github p-2"></i>Github</a>
                    </div>
                </div >
            </div >
            <div className="containerProjects animate__animated animate__backInLeft mb-5">
                <div className="textProjects bg-dark">
                    <h3 className="titleProject">Zulia Marketing Digital</h3>
                    <p className="descriptionProject"></p>
                    <div className="containerButtons">
                        <button className="btn"><i class="fa-solid fa-arrow-up-right-from-square p-2"></i>Deploy</button>
                        <button className="btn"><i class="fa-brands fa-github p-2"></i>Github</button>
                    </div>
                </div>
                <div className="imageProjects">
                    {/* <img className="imageSize" src={image} alt="" /> */}
                </div>
            </div>
            {/* <div className="containerProjects mb-5">
                <div className="imageProjects">
                    <img className="imageSize" src={image} alt="" />
                </div>
                <div className="textProjects bg-dark">
                    <h3 className="titleProject">Journal App</h3>
                    <p className="descriptionProject"></p>
                    <div className="containerButtons">
                        <button className="btn"><i class="fa-solid fa-arrow-up-right-from-square p-2"></i>Deploy</button>
                        <button className="btn"><i class="fa-brands fa-github p-2"></i>Github</button>
                    </div>
                </div>
            </div> */}
        </>
    )
}
