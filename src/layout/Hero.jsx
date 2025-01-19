
export const Hero = () => {


    return (
        <div className="heroImage" id='home' key="name">

            <div className="items-center text-center flex flex-col font-text tablet:text-start desktop:text-start desktop:items-start large-desktop:items-start desktop:ml-36 large-desktop:ml-52 large-desktop:text-start desktop:w-1/3 large-desktop:w-1/3 animate__animated animate__backInLeft">

                <h2 className="text-sm text-white font-title large-desktop:text-base">Hola, Mi nombre es</h2>

                <h2 className='text-3xl text-white large-desktop:text-7xl font-title font-bold mb-2 mt-2 large-desktop:mt-0 large-desktop:mb-0'>Maikol Reyes</h2>


                <p className="text-sm text-white font-title large-desktop:text-base">Soy un progamador especializado en el <span className='textResalt font-title text-customPrimary font-bold'>Desarrollo Frontend</span>, Poseo una sólida formación y un conocimiento integral en el desarrollo de software, lo que me permite abordar desafíos con un enfoque detallado y preciso.</p>

                <div className='flex gap-3 mt-3'>

                    <a className='btn text-base bg-customPrimary font-title font-bold p-2 w-36 large-desktop:w-44 hover:text-black hover:bg-customHover' href="https://wa.link/l5si8o" target='_blank'><i className="fa-brands fa-whatsapp m-1"></i>Whatsapp</a>

                    <a className='btn text-base bg-customPrimary font-title font-bold p-2 w-36 large-desktop:w-44 hover:text-black hover:bg-customHover' href='CV-Maikol-Frontend.pdf' target='_blank'><i className="fa-regular fa-file m-1"></i>CV</a>

                </div>
            </div>
        </div>
    )
}
