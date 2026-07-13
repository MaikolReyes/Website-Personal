import { ListSkills } from "../resources"

export const About = () => {

    const imagePersonal = "../img/profesional.png"

    return (
        <>
            <div className='flex justify-center'>
                <h2 className='mt-16 mb-10 title-about text-3xl large-desktop:text-4xl font-semibold font-title tablet:mt-28 tablet:mb-10'>Acerca de mi</h2>
            </div>

            <div className='flex flex-col justify-center items-center tablet:flex-row tablet:gap-14'>

                <div className="flex flex-col mb-10 tablet:mb-0">

                    <img className='max-w-96 h-72 desktop:h-80 large-desktop:h-96 rounded-xl ' src={imagePersonal} alt="imagen perfil" />

                    <div className='text-center mt-2'>
                        <a className="btn text-base bg-customPrimary font-title font-bold w-full hover:text-black hover:bg-customHover" target="_blank" href='https://github.com/MaikolReyes'>
                            <i className="fa-brands fa-github p-2"></i>
                            Github
                        </a>
                    </div>
                </div>

                <div className='flex flex-col w-4/5 desktop:w-2/5 large-desktop:w-[600px] h-80 large-desktop:h-96'>

                    <p className='text-sm font-title large-desktop:text-base'>Soy Analista de Pricing y estudiante de la Licenciatura en Economía, con interés en el análisis de datos, Business Intelligence y la toma de decisiones basada en evidencia. Cuento con experiencia en el análisis de información comercial utilizando Power BI, SQL, Python y Excel, transformando grandes volúmenes de datos en indicadores y visualizaciones que facilitan el seguimiento del negocio y la identificación de oportunidades de mejora.
                    </p>

                    <p className="font-title mt-3 text-sm large-desktop:text-base">Complemento mi perfil con conocimientos de programación y desarrollo de soluciones de datos, lo que me permite automatizar procesos, integrar distintas fuentes de información y construir reportes escalables y mantenibles. También poseo experiencia en el uso de Git para el control de versiones y en el consumo de APIs para la obtención y procesamiento de datos.</p>

                    <p className='mt-3 text-sm font-title large-desktop:text-base'>
                        Mi formación en Economía fortalece mi capacidad para interpretar la información desde una perspectiva estratégica, combinando análisis cuantitativo, comprensión del negocio y pensamiento crítico para generar insights que contribuyan a la toma de decisiones y a la mejora del desempeño empresarial.
                    </p>
                </div>
            </div>

            <div className='flex flex-col items-center mt-32 mb-7 tablet:mt-10 large-desktop:mt-20 '>
                <h2 className="text-3xl large-desktop:text-4xl font-semibold font-title mt-20 mb-4 desktop:mt-0">Stack</h2>

                <ul className="flex flex-wrap justify-center gap-5 mt-2 large-desktop:mb-10">
                    {ListSkills.map(({ icon, label }, index) => (
                        <li key={index} className="icons text-center">
                            <a href="#" className="icons-image" aria-label={label} ><i className={icon}></i></a>
                            <p className="font-subtitle text-sm mt-2">{label}</p>
                        </li>
                    ))}
                </ul>

            </div>
        </>
    )
}
