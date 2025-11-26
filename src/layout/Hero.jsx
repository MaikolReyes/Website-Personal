
export const Hero = () => {
    return (
        <div className="heroImage" id='home' key="name">

            <div className="w-4/5 flex flex-col items-center text-center font-text desktop:w-2/5 animate__animated animate__backInLeft">

                <h2 className="text-sm text-white font-title tablet:text-base">Hola, Mi nombre es</h2>

                <h2 className='text-3xl text-white font-title font-bold mb-1 mt-1 tablet:text-4xl'>Maikol Reyes</h2>

                <p className="text-sm text-white font-title tablet:text-base large-desktop:w-4/5">Soy un progamador especializado en el <span className='textResalt font-title text-customPrimary'>Desarrollo de Software</span> y <span className='textResalt font-title text-customPrimary'>Análisis de Datos</span>. Cuento con una sólida formación y un conocimiento integral en ambas áreas, lo que me permite abordar desafíos con un enfoque preciso, analítico y orientado a resultados.</p>

                <div className='flex gap-3 mt-3'>
                    <a className='btn text-base bg-customPrimary font-title font-bold p-2 w-36 tablet:w-44 hover:text-black hover:bg-customHover' href="https://wa.link/l5si8o" target='_blank'><i className="fa-brands fa-whatsapp m-1"></i>WhatsApp</a>

                    <a className='btn text-base bg-customPrimary font-title font-bold p-2 w-36 tablet:w-44 hover:text-black hover:bg-customHover' href='CV-Maikol-Analista.pdf' target='_blank'><i className="fa-regular fa-file m-1"></i>CV</a>
                </div>
            </div>
        </div>
    )
}
