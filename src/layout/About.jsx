import { ListSkills } from "../resources"

export const About = () => {

    const imagePersonal = "../img/profesional.png"

    return (
        <>
            <div className='flex justify-center'>
                <h2 className='mt-16 title-about text-3xl large-desktop:text-4xl font-semibold font-title tablet:mt-28 tablet:mb-5'>Acerca de mi</h2>
            </div>

            <div className='flex justify-center items-center flex-col tablet:flex-row tablet:gap-14'>

                <div className="flex flex-col">

                    <img className='h-96 rounded-xl ' src={imagePersonal} alt="imagen perfil" />

                    <div className='text-center mt-2'>
                        <a className="btn text-base bg-customPrimary font-title font-bold w-full hover:text-black hover:bg-customHover" target="_blank" href='https://github.com/MaikolReyes'>
                            <i className="fa-brands fa-github p-2"></i>
                            Github
                        </a>
                    </div>
                </div>

                <div className='flex flex-col text-center desktop:justify-center w-4/5 desktop:w-2/5 large-desktop:w-[600px] '>
                    <p className='text-sm font-title large-desktop:text-base'>Soy un profesional con conocimientos técnicos tanto en el <strong>desarrollo de software</strong> como en el <strong>análisis de datos.</strong> Cuento con experiencia en <strong>Power BI, SQL y Python</strong> aplicados al análisis de datos, con capacidad para diseñar dashboards y soluciones de visualización eficientes, integrando múltiples fuentes de información y aplicando principios de desarrollo de software como <strong>reutilización, escalabilidad y mantenimiento.</strong>
                    </p>
                    <p className="font-title mt-3 text-sm large-desktop:text-base">En el ámbito del desarrollo frontend, tengo experiencia en la construcción de sitios web responsivos utilizando tecnologías como <strong>HTML, CSS, Tailwind, SASS, Vite y Webpack,</strong> además del uso de lenguajes de programacion como <strong>Javascript, TypeScript, Python y SQL.</strong> Tambien estoy familiarizado con la integración de APIs RESTful y con metodologías de control de versiones mediante <strong>Git.</strong></p>
                    <p className='mt-3 text-sm font-title large-desktop:text-base'>
                        Mi enfoque en el análisis de datos está centrado en generar <strong>insights accionables</strong> que impulsen decisiones fundamentadas y alineadas con los <strong>objetivos de la empresa.</strong>
                    </p>
                </div>
            </div>

            <div className='mt-60 flex flex-col items-center desktop:mt-20 mb-7 '>
                <h2 className="text-3xl large-desktop:text-4xl font-semibold font-title mt-20 mb-4 desktop:mt-0">Stack</h2>

                <ul className="flex flex-wrap justify-center gap-4 mt-2">
                    {ListSkills.map(({ icon, label }, index) => (
                        <li key={index} className="icons text-center">
                            <a href="#" className="icons-image" aria-label={label} ><i className={icon}></i></a>
                            <p className="font-title text-sm mt-2">{label}</p>
                        </li>
                    ))}
                </ul>

            </div>
        </>
    )
}
