
export const Hero = () => {
    return (
        <div className="heroImage" id='home' key="name">

            <div className="w-4/5 flex flex-col items-center text-center font-text desktop:w-2/5 animate__animated animate__backInLeft">

                <h2 className="text-sm text-white font-title tablet:text-base">Hola, Mi nombre es</h2>

                <h2 className='text-3xl text-white font-title font-bold mb-1 mt-1 tablet:text-4xl'>Maikol Reyes</h2>

                <p className="text-sm text-white font-title tablet:text-base large-desktop:w-4/5">Soy <span className='textResalt font-title text-customPrimary'>Analista de Pricing</span> y estudiante de la Licenciatura en Economía. Me especializo en el <span className='textResalt font-title text-customPrimary'>Análisis de datos</span> y <span className='textResalt font-title text-customPrimary'>Business Intelligence</span>, desarrollando soluciones con <span className='textResalt font-title text-customPrimary'>Power BI</span>, <span className='textResalt font-title text-customPrimary'>SQL</span> y <span className='textResalt font-title text-customPrimary'>Python</span> para convertir datos en información estratégica que facilite la toma de decisiones y la mejora del desempeño del negocio.</p>

                <div className='flex gap-3 mt-3'>
                    <a className='btn text-base bg-customPrimary font-title font-bold p-2 w-36 tablet:w-44 hover:text-black hover:bg-customHover' href="https://wa.link/l5si8o" target='_blank'><i className="fa-brands fa-whatsapp m-1"></i>WhatsApp</a>

                    <a className='btn text-base bg-customPrimary font-title font-bold p-2 w-36 tablet:w-44 hover:text-black hover:bg-customHover' href='CV-Maikol-BI.pdf' target='_blank'><i className="fa-regular fa-file m-1"></i>CV</a>

                </div>
            </div>
        </div>
    )
}
