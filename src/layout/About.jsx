import { Link } from "react-router-dom"
import { ListSkills } from "../resources"

export const About = () => {

    const imagePersonal = "../img/perfil.jpg"

    return (
        <>
            <div className='flex justify-center mt-5 large-desktop:mt-28 large-desktop:mb-2'>
                <h2 className='title-about text-3xl large-desktop:text-4xl font-semibold font-title'>Acerca de mi</h2>
            </div>

            <div className='flex justify-center items-center flex-col tablet:flex-row desktop:flex-row desktop:gap-14 large-desktop:gap-14 large-desktop:flex-row'>

                <img className='max-w-96 h-72 mt-3 desktop:h-96 large-desktop:h-auto large-desktop:mt-5 rounded-2xl ' src={imagePersonal} alt="" />

                <div className='mobile:ml-0 mt-4 large-desktop:mt-5 flex flex-col justify-center w-4/5 desktop:w-2/6 desktop:mt-14 large-desktop:w-1/4'>

                    <p className='text-sm font-title large-desktop:text-base'>Soy un programador especializado en el Desarrollo Frontend, apasionado por crear interfaces web dinámicas, atractivas y centradas en el usuario. Poseo sólidos conocimientos en tecnologías como HTML5, CSS3, JavaScript y frameworks modernos como React y Vue.js. Además, domino herramientas como Tailwind CSS, SASS y sistemas de construcción como Vite y Webpack.
                    </p>
                    <p className='mt-3 text-sm font-title large-desktop:text-base'>
                        Mi experiencia incluye la implementación de diseños responsivos y optimizados para dispositivos móviles, garantizando una experiencia fluida en todas las plataformas. Estoy familiarizado con la integración de APIs RESTful, el uso de TypeScript para mayor robustez en el desarrollo y la gestión de versiones con Git.
                    </p>
                    <p className="font-title mt-3 text-sm large-desktop:text-base">
                        He participado en proyectos destacados donde mejoré el rendimiento de sitios web, optimicé procesos de desarrollo y colaboré estrechamente con equipos de diseño y backend para cumplir con los objetivos del cliente.
                    </p>
                    <div className='text-center mt-4'>
                        <a className="btn text-base bg-customPrimary font-title font-bold p-2 w-36 hover:text-black hover:bg-customHover" target="_blank" href='https://github.com/MaikolReyes'><i className="fa-brands fa-github p-2"></i>Github</a>
                    </div>

                </div>
            </div>

            <div className='flex flex-col items-center mt-12 mb-7 mobile:mt-8'>
                <h2 className="text-3xl large-desktop:text-4xl font-semibold font-title mt-2 mb-4">Stack</h2>

                <ul className="flex flex-wrap justify-center gap-4 mt-2">
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
