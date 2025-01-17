import { Link } from "react-router-dom"
import { ListSkills } from "../resources"

export const About = () => {

    const imagePersonal = "../img/perfil.jpg"

    return (
        <>
            <div className='about flex justify-center mt-28 mb-2'>
                <h2 className='title-about text-3xl large-desktop:text-4xl font-semibold font-title'>Acerca de mi</h2>
            </div>

            <div className='container-about flex justify-center items-center flex-col large-desktop:gap-14 large-desktop:flex-row'>

                <img className='imagenPersonal w-96 mt-5 rounded-2xl ' src={imagePersonal} alt="" />

                <div className='container-text-about w-3/4 mobile:ml-0 mt-5 flex flex-col justify-center mobile:w-1/4'>

                    <p className='description-about text-sm font-title large-desktop:text-base'>Soy un programador especializado en el Desarrollo Frontend, apasionado por crear interfaces web dinámicas, atractivas y centradas en el usuario. Poseo sólidos conocimientos en tecnologías como HTML5, CSS3, JavaScript y frameworks modernos como React y Vue.js. Además, domino herramientas como Tailwind CSS, SASS y sistemas de construcción como Vite y Webpack.
                    </p>
                    <p className='description-about mt-3 text-sm font-title large-desktop:text-base'>
                        Mi experiencia incluye la implementación de diseños responsivos y optimizados para dispositivos móviles, garantizando una experiencia fluida en todas las plataformas. Estoy familiarizado con la integración de APIs RESTful, el uso de TypeScript para mayor robustez en el desarrollo y la gestión de versiones con Git.
                    </p>
                    <p className="description-about font-title mt-3 text-sm large-desktop:text-base">
                        He participado en proyectos destacados donde mejoré el rendimiento de sitios web, optimicé procesos de desarrollo y colaboré estrechamente con equipos de diseño y backend para cumplir con los objetivos del cliente.
                    </p>
                    <div className='text-center mt-4'>
                        <a className="button-portfolio btn text-base bg-customPrimary font-title font-bold p-2 w-36 hover:text-black hover:bg-customHover" target="_blank" href='https://github.com/MaikolReyes'><i className="fa-brands fa-github p-2"></i>Github</a>
                    </div>

                </div>
            </div>

            <div className='sectionSkills flex flex-col items-center mt-12 mb-7 mobile:mt-8'>
                <h2 className="titleSkills text-4xl font-semibold font-title mt-2 mb-4">Stack</h2>

                <ul className="listSkills flex justify-center gap-4 mt-2">
                    {ListSkills.map(({ icon }, index) => (
                        <li key={index} className="icons">
                            <a className="icons-image" ><i className={icon}></i></a>
                        </li>
                    ))}
                </ul>

            </div>
        </>
    )
}
