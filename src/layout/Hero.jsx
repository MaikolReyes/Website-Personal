
export const Hero = () => {


    return (
        <div className="heroImage" id='home' key="name">

            <div className="containerHeroText flex flex-col font-text ml-52 items-start animate__animated animate__backInLeft">

                <h2 className="text-saludo text-white font-title text-base">Hola, Mi nombre es</h2>

                <h2 className='text-name text-white text-7xl font-title font-bold'>Maikol Reyes</h2>


                <p className="text-presentation text-white font-title text-base w-2/5">Soy un progamador especializado en el <span className='textResalt font-title text-customPrimary font-bold'>Desarrollo Frontend</span>, Poseo una sólida formación y un conocimiento integral en el desarrollo de software, lo que me permite abordar desafíos con un enfoque detallado y preciso.</p>
                <div className='containerButtonsPrincipal flex gap-3 mt-3'>

                    <a className='buttonsPrincipal btn text-base bg-customPrimary font-title font-bold p-2 w-44 hover:text-black hover:bg-customHover' href="https://wa.link/l5si8o" target='_blank'><i className="fa-brands fa-whatsapp m-1"></i>Whatsapp</a>

                    <a className='buttonsPrincipal btn text-base bg-customPrimary font-title font-bold p-2 w-44 hover:text-black hover:bg-customHover' href='CV-Maikol-Frontend.pdf' target='_blank'><i className="fa-regular fa-file m-1"></i>Curriculum</a>

                </div>
            </div>
        </div>
    )
}
