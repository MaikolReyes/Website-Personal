import React from 'react'
//Images of Services

export const Services = () => {
    return (
        <>
            <div className="textProjectsPrincipal" id='services'>
                <h2 className="titleServices">Servicios</h2>
            </div >

            <div className='containerGeneralServices'>

                {/* <div className='containerTextServices'>
                    <p className='textServices'>¡Hola! Si estás buscando un desarrollador frontend de alta calidad, has venido al lugar correcto. Permíteme presentarte mis servicios de desarrollo frontend.
                        Como desarrollador frontend, tengo experiencia en la creación de sitios web y aplicaciones altamente funcionales y atractivas. Me especializo en el uso de tecnologías como HTML, CSS, JavaScript y React para crear interfaces de usuario intuitivas y atractivas que sean fáciles de usar y que brinden una experiencia excepcional al usuario.
                        Ya sea que necesites un sitio web nuevo o una actualización de tu sitio existente, puedo trabajar contigo para crear una solución que se adapte a tus necesidades específicas. Desde la planificación y el diseño hasta la implementación y el mantenimiento, puedo ayudarte en cada paso del proceso de desarrollo frontend.
                    </p>
                    <p className='textServices'>
                        Mi enfoque se centra en crear soluciones que no solo sean visualmente atractivas, sino también altamente funcionales y accesibles. Me aseguro de que todos mis proyectos cumplan con los estándares de accesibilidad web para que las personas con discapacidades también puedan disfrutar de la experiencia del usuario en tu sitio web.
                        En resumen, mis servicios de desarrollo frontend ofrecen soluciones de alta calidad que te ayudarán a crear una presencia en línea efectiva y atractiva. Si estás interesado en trabajar con un desarrollador frontend con experiencia, ¡contáctame hoy mismo para comenzar a trabajar juntos!
                    </p>
                </div> */}

                <div id="carouselExample" className="carousel slide">
                    <div className="carousel-inner">

                        <div className="carousel-item active ">
                            <div className='containerCards'>
                                <div className="card">
                                    <img src={desarrolloWeb} className="imageServices" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Diseño Web</h5>
                                        <p className="card-text"></p>
                                    </div>
                                </div>
                                {/* <div className="card">
                                    <img src={aplicacionesMoviles} className="imageServices" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title mt-4">Aplicaciones Moviles</h5>
                                        <p className="card-text">Como desarrollador de aplicaciones móviles con una gran experiencia,
                                            estoy comprometido en crear aplicaciones móviles personalizadas y atractivas que no solo se vean bien,
                                            sino que también proporcionen una experiencia de usuario excepcional.</p>
                                    </div>
                                </div> */}
                                <div className="card" >
                                    <img src={diseno} className="imageServices" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Diseño UX/UI</h5>
                                        <p className="card-text"></p>
                                    </div>
                                </div>
                                <div className="card" >
                                    <img src={posicionamiento} className="imageServices" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Posicionamiento SEO</h5>
                                        <p className="card-text"></p>
                                    </div>
                                </div>
                                <div className="card" >
                                    <img src={ecommerce2} className="imageServices" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">E-commerces</h5>
                                        <p className="card-text"></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className='buttonsCarousel'>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <span className="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div> */}
                </div>

            </div >
        </>
    )
}
