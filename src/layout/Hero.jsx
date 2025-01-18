
export const Hero = () => {


    return (
        <div className="heroImage" id='home' key="name">

            <div className="containerHeroText desktop:items-start desktop:text-start  items-center flex flex-col font-text ml-52 animate__animated animate__backInLeft">

                <h2 className="text-saludo text-sm text-white font-title large-desktop:text-base">Hola, Mi nombre es</h2>

                <h2 className='text-name text-3xl text-white large-desktop:text-7xl font-title font-bold mb-2 mt-2 large-desktop:mt-0 large-desktop:mb-0'>Maikol Reyes</h2>


                <p className="text-presentation text-sm text-start w-3/4 text-white font-title large-desktop:text-base large-desktop:w-1/3">Soy un progamador especializado en el <span className='textResalt font-title text-customPrimary font-bold'>Desarrollo Frontend</span>, Poseo una sólida formación y un conocimiento integral en el desarrollo de software, lo que me permite abordar desafíos con un enfoque detallado y preciso.</p>
                <div className='containerButtonsPrincipal flex gap-3 mt-3'>

                    <a className='buttonsPrincipal btn text-base bg-customPrimary font-title font-bold p-2 w-44 hover:text-black hover:bg-customHover' href="https://wa.link/l5si8o" target='_blank'><i className="fa-brands fa-whatsapp m-1"></i>Whatsapp</a>

                    <a className='buttonsPrincipal btn text-base bg-customPrimary font-title font-bold p-2 w-44 hover:text-black hover:bg-customHover' href='CV-Maikol-Frontend.pdf' target='_blank'><i className="fa-regular fa-file m-1"></i>CV</a>

                </div>
            </div>
        </div>
    )
}
