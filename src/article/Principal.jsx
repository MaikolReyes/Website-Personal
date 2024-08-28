import imagenPersonal from '../img/IMG_1905.jpg'
//
import projectFranquicias360 from '../img/franquicias360-project.png'
import projectZulia from '../img/zulia-1.png'
import projectMinzke from '../img/minzke-project.png'
//
import certificateDesarrolloWeb from '../img/certificates/desarrolloWeb.png'
import certificateJavascript from '../img/certificates/javascript.png'
import certificateReact from '../img/certificates/react.png'
import certificateFrontEndReact from '../img/certificates/frontEndReact.png'

export const Principal = () => {
    return (
        <>
            <div className="heroImage" id='home'>
                <div className="containerHeroText animate__animated animate__backInLeft">
                    <p className="textName">Hola, Mi nombre es</p>
                    <h2 className='textNamePrincipal'>Maikol Reyes</h2>
                    <p className="textDescription">Soy un <span className='textResalt'>Desarrollador Frontend</span> en constante evolucion
                        en busqueda de nuevas experiencias en el mundo IT, Siempre trato de sumergirme en nuevos desafíos
                        que me ayuden a ampliar mis conocimientos como desarrollador de software</p>
                    <div className='containerButtonsPrincipal'>
                        <a className='buttonsPrincipal btn' href="https://wa.link/l5si8o" target='_blank'><i class="fa-brands fa-whatsapp m-1"></i>Whatsapp</a>
                        <a className='buttonsPrincipal btn' href='CV-Maikol-Reyes.pdf' target='_blank'>CV</a>
                    </div>
                </div>
            </div>

            {/* About Me */}

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


            {/* Skills */}

            <section className='sectionSkills'>
                <h2 className="titleSkills">Habilidades</h2>
            </section>

            <ul className="listSkills">
                <li className="icons-skill"><a className="icons-image"><i className="fa-brands fa-html5 icon"></i></a></li>
                <li className="icons-skill"><a className="icons-image"><i className="fa-brands fa-css3-alt icon"></i></a></li>
                <li className="icons-skill"><a className="icons-image"><i className="fa-brands fa-bootstrap icon"></i></a></li>
                <li className="icons-skill"><a className="icons-image"><i className="fa-brands fa-sass icon"></i></a></li>
                <li className="icons-skill"><a className="icons-image"><i className="fa-brands fa-square-js icon"></i></a></li>
                <li className="icons-skill"><a className="icons-image"><i className="fa-brands fa-react icon"></i></a></li>
                <li className="icons-skill"><a className="icons-image"><i className="fa-brands fa-node icon"></i></a></li>
            </ul>

            {/* Portfolio*/}
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

            {/* Certificates */}
            <section className='sectionCertifications' id='certifications'>
                <h2 className="titleCertifications">Certificaciones</h2>
                <p className='subtitleCertification'>Me complace presentar mis certificaciones en Desarrollo Web, JavaScript y React. Estos logros reflejan mi compromiso, perseverancia y motivación para crecer y convertirme en un excelente desarrollador de software.</p>
            </section>


            <div id="carouselExampleCaptions" class="carousel slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={certificateDesarrolloWeb} className="image-certificate" alt="certificate Desarrollo Web" />
                    </div>
                    <div class="carousel-item">
                        <img src={certificateJavascript} className="image-certificate" alt="certificate Javascript" />
                    </div>
                    <div class="carousel-item">
                        <img src={certificateReact} className="image-certificate" alt="certificate React" />
                    </div>
                    <div class="carousel-item">
                        <img src={certificateFrontEndReact} className="image-certificate" alt="certificate FrontEnd React" />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}
