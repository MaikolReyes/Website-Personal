import React from 'react'

export const Principal = () => {
    return (
        <>
            <div className="heroImage" id='home'>
                <div className="containerHeroText animate__animated animate__backInLeft">
                    <p className="textName">Hola, Mi nombre es</p>
                    <h2 className='textNamePrincipal'>Maikol Reyes</h2>
                    <p className="textDescription">Soy un <span className='textResalt'>Desarrollador Frontend</span> en constante evolucion
                        en busqueda de nuevas experiencias en el mundo IT, Siempre trato de sumergirme en nuevos desafíos
                        que me ayuden a ampliar mis conocimientos como desarrollador de software</p>
                    <div className='containerButtonsPrincipal'>
                        <a className='buttonsPrincipal btn' href="https://wa.link/l5si8o" target='_blank'><i class="fa-brands fa-whatsapp m-1"></i>Whatsapp</a>
                        <a className='buttonsPrincipal btn' href='CV-Maikol-Reyes.pdf' target='_blank'>CV</a>
                    </div>
                </div>
            </div>
        </>
    )
}
