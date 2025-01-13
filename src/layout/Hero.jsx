
export const Hero = () => {


    return (
        <div className="heroImage" id='home' key="name">

            <div className="containerHeroText animate__animated animate__backInLeft">

                <h2 className="text-saludo">Hola, Mi nombre es</h2>

                <h2 className='text-name'>Maikol Reyes</h2>

                <p className="text-presentation">Soy un progamador especializado en el <span className='textResalt'>Desarrollo Frontend</span>, Poseo una sólida formación y un conocimiento integral en el desarrollo de software, lo que me permite abordar desafíos con un enfoque detallado y preciso.</p>

                <div className='containerButtonsPrincipal'>

                    <a className='buttonsPrincipal btn' href="https://wa.link/l5si8o" target='_blank'><i className="fa-brands fa-whatsapp m-1"></i>Whatsapp</a>

                    <a className='buttonsPrincipal btn' href='CV-Maikol-Frontend.pdf' target='_blank'><i className="fa-regular fa-file m-1"></i>Curriculum</a>

                </div>
            </div>
        </div>
    )
}
