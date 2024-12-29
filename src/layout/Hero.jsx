
export const Hero = () => {


    return (
        <div className="heroImage" id='home' key="name">
            <div className="containerHeroText animate__animated animate__backInLeft">
                <p className="text-saludo">Hola, Mi nombre es</p>
                <h2 className='text-name'>Maikol Reyes</h2>
                <p className="text-presentation">Soy un progamador especializado en el <span className='textResalt'>Desarrollo Frontend.</span> Mis conocimientos técnicos son sólidos y completos en el campo de la programacion y siempre trato de sumergirme en nuevos desafíos que me ayuden a ampliar mis conocimientos como desarrollador de software.</p>
                <div className='containerButtonsPrincipal'>
                    <a className='buttonsPrincipal btn' href="https://wa.link/l5si8o" target='_blank'><i className="fa-brands fa-whatsapp m-1"></i>Whatsapp</a>
                    <a className='buttonsPrincipal btn' href='CV-Maikol-Frontend.pdf' target='_blank'><i className="fa-regular fa-file m-1"></i>Curriculum</a>
                </div>
            </div>
        </div>
    )
}
