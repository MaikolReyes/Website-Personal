
export const Hero = () => {


    return (
        <div className="heroImage" id='home' key="name">

            <div className="containerHeroText large-desktop:items-start large-desktop:text-start  mobile:text-center mobile:items-center flex flex-col font-text ml-52 animate__animated animate__backInLeft">

                <h2 className="text-saludo text-sm text-white font-title large-desktop:text-base">Hola, Mi nombre es</h2>

                <h2 className='text-name text-3xl text-white large-desktop:text-7xl font-title font-bold'>Maikol Reyes</h2>


                <p className="text-presentation text-sm large-desktop:w-1/3 mobile:w-3/4 text-white font-title large-desktop:text-base">Soy un progamador especializado en el <span className='textResalt font-title text-customPrimary font-bold'>Desarrollo Frontend</span>, Poseo una sólida formación y un conocimiento integral en el desarrollo de software, lo que me permite abordar desafíos con un enfoque detallado y preciso.</p>
                <div className='containerButtonsPrincipal flex gap-3 mt-3'>

                    <a className='buttonsPrincipal btn text-base bg-customPrimary font-title font-bold p-2 w-44 hover:text-black hover:bg-customHover' href="https://wa.link/l5si8o" target='_blank'><i className="fa-brands fa-whatsapp m-1"></i>Whatsapp</a>

                    <a className='buttonsPrincipal btn text-base bg-customPrimary font-title font-bold p-2 w-44 hover:text-black hover:bg-customHover' href='CV-Maikol-Frontend.pdf' target='_blank'><i className="fa-regular fa-file m-1"></i>CV</a>

                </div>
            </div>
        </div>
    )
}
