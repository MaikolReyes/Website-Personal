import { services } from '../resources/services'

export const Services = () => {
    return (
        <>
            <div className="textProjectsPrincipal" id='services'>
                <h2 className="titleServices text-4xl font-semibold font-title">Servicios</h2>
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
                                {services.map(({ title, id, image, description }) => (
                                    <div className="card" key={id}>
                                        <img src={image} className="imageServices" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{title}</h5>
                                            <p className="card-text">{description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </>
    )
}
