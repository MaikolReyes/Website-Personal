
import { motion } from "framer-motion";

const Services = [
    {
        category: "Desarrollo Web",
        items: [
            "Sitios Web Profesionales",
            "Tiendas Online (E-commerce)",
            "Mantenimiento y Optimización",
            "SEO Técnico",
            "Desarrollo Frontend con React",
            "Automatizaciones Web"
        ]
    },
    {
        category: "Análisis de Datos",
        items: [
            "Dashboards con Power BI",
            "Limpieza y Transformación de Datos",
            "Automatización con Python",
            "Web Scraping Ético",
            "Análisis Exploratorio",
            "Consultoría y KPIs"
        ]
    }
];


export const ServicesCarousel = () => {

    return (
        <>
            <div className="flex flex-col items-center mt-10 tablet:mt-20" id="portfolio" >

                <h2 className="text-xl desktop:text-3xl font-semibold font-title">Servicios</h2>

                <p className="w-3/4 text-sm m-4 large-desktop:text-base font-title text-center desktop:w-2/5 ">Potenciá tu negocio o empresa con una página web 100% personalizada y que represente tu marca de la mejor forma. También ofrezco servicios de análisis de datos a medida. Si buscás soluciones profesionales, rápidas y efectivas, estoy listo para ayudarte a llevar tus ideas al siguiente nivel.</p>

            </div>

            <div className="flex justify-center w-full overflow-hidden py-10">
                <div className="flex flex-col gap-4 tablet:gap-0 tablet:flex-row tablet:space-x-6 animate-slide">
                    {Services.map((block, index) => (
                        <motion.div
                            key={index}
                            className="min-w-[300px] bg-white shadow-lg rounded-2xl p-6 border border-gray-200"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 200 }}
                        >
                            <h3 className="text-xl font-semibold mb-4 font-subtitle">{block.category}</h3>
                            <ul className="space-y-2 text-gray-700">
                                {block.items.map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 font-title">
                                        <span className="w-2 h-2 bg-black rounded-full"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <a href="#contacto" className="flex justify-center">
                                <button className="mt-4 bg-customPrimary text-black font-title font-bold py-2 px-4 rounded hover:bg-customHover">
                                    Contactar
                                </button>
                            </a>
                        </motion.div>
                    ))}
                </div>

            </div>
        </>
    )
}
