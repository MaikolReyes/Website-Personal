

export const Principal = () => {

    // Esta landing page esta destinada para una empresa especializada en brindar servicios de marketing y publicidad a franquicias.

    // Para este proyecto utilice como lenguaje de programacion Typescript + React y para toda la parte estetica de la pagina utilize Boostraps, Animate.CSS y el procesador SASS para todo el codigo CSS.

    const imagePersonal = "../../src/img/IMG_1905.jpg"

    const skills = [
        { icon: "fa-brands fa-html5 icon" },
        { icon: "fa-brands fa-css3-alt icon" },
        { icon: "fa-brands fa-bootstrap icon" },
        { icon: "fa-brands fa-sass icon" },
        { icon: "fa-brands fa-square-js icon" },
        { icon: "fa-brands fa-react icon" },
        { icon: "fa-brands fa-node icon" },
    ];

    const projects = [
        {
            name: "Franquicias360",
            description: "Es un proyecto realizado en conjunto con diseñadores UX/UI. Para el desarrollo de este proyecto, utilice como lenguaje de programacion JavaScript + React y para la parte estética de la página utilice el preprocesador SASS.",
            img: "../../src/img/franquicias360-project.png",
            github: "https://github.com/MaikolReyes/Zulia-Marketing-Digital",
            deploy: "https://franquicias360.netlify.app"
        },
        {
            name: "Zulia Marketing Digital",
            description: "Es una landing page realizada a una empresa de marketing digital en el que se ofrecen servicios de marketing potenciados con inteligencia artificial.",
            img: "../../src/img/zulia-1.png",
            github: "https://github.com/MaikolReyes/Zulia-Marketing-Digital",
            deploy: "https://zuliamarketingdigital.com/"
        },
        {
            name: "Minzke",
            description: "Fue mi primer proyecto como programador, es un ecommerce de herramientas electricas y manuales que posee un carrito de compras hecho con JavaScript.",
            img: "../../src/img/minzke-project.png",
            github: "https://github.com/MaikolReyes/Minzke-Ecommerce",
            deploy: "https://maikolreyes.github.io/Minzke-Ecommerce/"
        }
    ];

    const certificates = [
        {
            href: "../../src/img/certificates/desarrolloWeb.png",
            description: "Certificado de Desarrollo Web"
        },
        {
            href: "../../src/img/certificates/javascript.png",
            description: "certificado en Javascript"
        },
        {
            href: "../../src/img/certificates/react.png",
            description: "Certificado en React.JS"
        },
        {
            href: "../../src/img/certificates/frontEndReact.png"
            ,
            description: "Certificado de Programador Front End"
        },
    ]

    return (
        <>
            <div className="heroImage" id='home' key="name">
                <div className="containerHeroText animate__animated animate__backInLeft">
                    <p className="text-saludo">Hola, Mi nombre es</p>
                    <h2 className='text-name'>Maikol Reyes</h2>
                    <p className="text-presentation">Soy un progamador especializado en el <span className='textResalt'>Desarrollo Frontend.</span> Mis conocimientos técnicos son sólidos y completos en el campo de la programacion y siempre trato de sumergirme en nuevos desafíos que me ayuden a ampliar mis conocimientos como desarrollador de software.</p>
                    <div className='containerButtonsPrincipal'>
                        <a className='buttonsPrincipal btn' href="https://wa.link/l5si8o" target='_blank'><i class="fa-brands fa-whatsapp m-1"></i>Whatsapp</a>
                        <a className='buttonsPrincipal btn' href='CV-Maikol-Reyes.pdf' target='_blank'><i class="fa-regular fa-file m-1"></i>Curriculum</a>
                    </div>
                </div>
            </div>

            {/* About Me */}
            <div className='about'>
                <h2 className='title-about'>Acerca de mi</h2>
            </div>

            <div className='container-about'>

                <img className='imagenPersonal' src={imagePersonal} alt="" />

                <div className='container-text-about'>
                    <p className='description-about'>Soy un Desarrollador de Software, que inicio su preparación en el mundo IT en el año 2022 en el que tome mi primer curso sobre desarrollo web y pude asentar los conocimientos en (HTML), CSS y funcionalidades con JavaScript. Luego de finalizado continúe con mi aprendizaje de JavaScript para poder perfeccionar mis habilidades con el lenguaje de programación y por último aprendí sobre el framework React. JS para poder realizar sitios web más complejos y funcionales. En cada aprendizaje realicé proyectos que se encuentran disponibles en mi repositorio de GitHub. Siempre estoy en constante aprendizaje para mantenerme al día con las últimas tendencias y tecnologías en el mundo del Desarrollo de Software.
                    </p>
                    <p className='description-about' >
                        A lo largo de mi trayecto, he mantenido un constante aprendizaje que me ha permitido ampliar mis conocimientos no solo en front-end, sino también en back-end, testing y principios SOLID.
                    </p>
                </div>
            </div>

            {/* Skills */}
            <div className='sectionSkills'>
                <h2 className="titleSkills">Stack</h2>
            </div>

            <ul className="listSkills">
                {skills.map(({ icon }, index) => (
                    <li key={index} className="icons"><a className="icons-image"><i className={icon}></i></a></li>
                ))}
            </ul>

            {/* Portfolio*/}
            <div className="portfolio" id="portfolio" >
                <h2 className="portfolio-title animate__animated animate__backInLeft">Proyectos</h2>
                <p className="portfolio-subtitle">Te invito a echar un vistazo a mi recorrido en el mundo del desarrollo front-end. Cada proyecto que encontrarás aquí es una pieza clave en mi aprendizaje y evolución. ¡Espero que disfrutes explorando mis creaciones tanto como yo disfruté creándolas!</p>
            </div>

            {projects.map(({ name, img, description, github, deploy }) => (
                <div className="container-projects animate__animated animate__backInLeft">
                    <div className="container-images-projects">
                        <img className="imageProject" src={img} alt={name} />
                    </div>
                    <div className="container-text-projects bg-dark">
                        <h3 className="title-project">{name}</h3>
                        <p className="description-project">{description}</p>
                        <div className="containerButtons">
                            <a className="buttonPortfolio btn" target="_blank" href={deploy}><i class="fa-solid fa-arrow-up-right-from-square p-2"></i>Deploy</a>
                            <a className="buttonPortfolio btn" target="_blank" href={github} ><i class=" fa-brands fa-github p-2"></i>Github</a>
                        </div>
                    </div >
                </div>
            ))}


            {/* Certificates */}
            <div className='certifications' id='certifications' >
                <h2 className="title-certificate">Certificaciones</h2>
                <p className='subtitle-certification'>Me complace presentar mis certificaciones en Desarrollo Web, JavaScript y React. Estos logros reflejan mi compromiso, perseverancia y motivación para crecer y convertirme en un excelente desarrollador de software.</p>
            </div >


            <div id="carouselExampleCaptions" class="carousel slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>

                <div class="carousel-inner">
                    {certificates.map(({ href, description }, index) => (
                        <div key={index} class={`carousel-item ${index === 0 ? 'active' : ''}`}>
                            <img src={href} className="image-certificate" alt={description} />
                        </div>
                    ))}
                </div>

                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div >
        </>
    )
}
