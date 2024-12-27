import desarrolloWeb from '/img/services/desarrollo.jpg'
import posicionamiento from '/img/services/posicionamiento.jpg'
import basic from '/img/services/giphy.gif'

export const Services = () => {
    return (
        <>
            <div className="textProjectsPrincipal" id='services'>
                <h2 className="titleServices text-center">Servicios</h2>
            </div >

            <div className='containerGeneralServices'>

                <div className='containerTextServices'>
                    <p className='textServices'>¡Hola! Si estás buscando un desarrollador frontend de alta calidad, has llegado al lugar correcto. Permíteme presentarte mis servicios de desarrollo frontend y cómo puedo ayudarte a crear una presencia en línea efectiva y atractiva.</p>
                    <p className='textServices'>
                        Ya sea que necesites un sitio web nuevo o una actualización de tu sitio existente, puedo trabajar contigo para crear una solución que se adapte a tus necesidades específicas. Desde la planificación y el diseño hasta la implementación y el mantenimiento, puedo ayudarte en cada paso del proceso de desarrollo.
                    </p>
                </div>

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
                                    <img src={basic} className="imageServices" alt="..." />
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
                                    <img src={basic} className="imageServices" alt="..." />
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
