

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
            <div className="heroImage" id='home'>
                <div className="containerHeroText animate__animated animate__backInLeft">
                    <p className="textName">Hola, Mi nombre es</p>
                    <h2 className='textNamePrincipal'>Maikol Reyes</h2>
                    <p className="textDescription">Soy un <span className='textResalt'>Desarrollador Frontend</span> en constante evolucion en busqueda de nuevas experiencias en el mundo IT, Siempre trato de sumergirme en nuevos desafíos que me ayuden a ampliar mis conocimientos como desarrollador de software</p>
                    <div className='containerButtonsPrincipal'>
                        <a className='buttonsPrincipal btn' href="https://wa.link/l5si8o" target='_blank'><i class="fa-brands fa-whatsapp m-1"></i>Whatsapp</a>
                        <a className='buttonsPrincipal btn' href='CV-Maikol-Reyes.pdf' target='_blank'><i class="fa-regular fa-file m-1"></i>Curriculum</a>
                    </div>
                </div>
            </div>

            {/* About Me */}
            <div className='sectionAboutMe'>
                <h2 className='titleAboutMe'>Acerca de mi</h2>
            </div>

            <div className='containerAboutMe'>

                <img className='imagenPersonal' src={imagePersonal} alt="" />

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
            <div className='sectionSkills'>
                <h2 className="titleSkills">Habilidades</h2>
            </div>

            <ul className="listSkills">
                {skills.map(({ icon }) => (
                    <li className="icons-skill"><a className="icons-image-skill"><i className={icon}></i></a></li>
                ))}
            </ul>

            {/* Portfolio*/}
            <div className="sectionPortfolio" id="portfolio" >
                <h2 className="titlePortfolio animate__animated animate__backInLeft">Proyectos</h2>
                <p className="subtitlePortfolio">Te invito a echar un vistazo a mi recorrido en el mundo del desarrollo frontend.
                    Cada proyecto que encontrarás aquí es una pieza clave en mi aprendizaje y evolución.
                    Este es mi pequeño espacio para compartir los proyectos que he realizado hasta ahora
                    ¡Espero que disfrutes explorando mis creaciones tanto como yo disfruté creándolas!.</p>
            </div>

            {projects.map(({ name, img, description, github, deploy }) => (
                <div className="containerProjects animate__animated animate__backInLeft">
                    <div className="containerImageProjects">
                        <img className="imageProject" src={img} alt={name} />
                    </div>
                    <div className="containerTextProjects bg-dark">
                        <h3 className="titleProject">{name}</h3>
                        <p className="descriptionProjects">{description}</p>
                        <div className="containerButtons">
                            <a className="buttonPortfolio btn" target="_blank" href={deploy}><i class="fa-solid fa-arrow-up-right-from-square p-2"></i>Deploy</a>
                            <a className="buttonPortfolio btn" target="_blank" href={github} ><i class=" fa-brands fa-github p-2"></i>Github</a>
                        </div>
                    </div >
                </div>
            ))}


            {/* Certificates */}
            <div className='sectionCertifications' id='certifications' >
                <h2 className="titleCertifications">Certificaciones</h2>
                <p className='subtitleCertification'>Me complace presentar mis certificaciones en Desarrollo Web, JavaScript y React. Estos logros reflejan mi compromiso, perseverancia y motivación para crecer y convertirme en un excelente desarrollador de software.</p>
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
