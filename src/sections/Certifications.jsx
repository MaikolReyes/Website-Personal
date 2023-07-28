import certificateDesarrolloWeb from '../img/certificates/desarrolloWeb.png'
import certificateJavascript from '../img/certificates/javascript.png'
import certificateReact from '../img/certificates/react.png'
import certificateFrontEndReact from '../img/certificates/frontEndReact.png'

export const Certifications = () => {
    return (
        <>
            <div className='textCertifications'>
                <h2 className="titleCertificate">Certificaciones</h2>
            </div>

            <div className='certificateContainer'>

                <div className='articleCertificationsContainer'>
                    <p className='articleCertifications'>"Estoy orgulloso de compartir mis certificaciones en Desarrollo Web, JavaScript y React. Estas certificaciones representan mi dedicación y pasión por el desarrollo de aplicaciones web de alta calidad.
                        Mi certificación en Desarrollo Web refleja mi conocimiento en las mejores prácticas y estándares de la industria, incluyendo HTML, CSS, y las últimas tecnologías y herramientas.
                        Finalmente,
                        Con mi certificación en JavaScript, he demostrado mi habilidad para crear interacciones dinámicas y funcionalidades para sitios web. Además, mi certificación en React valida mi capacidad para crear aplicaciones web modernas y escalables utilizando el popular framework de React.
                        Estas certificaciones son una prueba de mi compromiso con la excelencia en el Desarrollo Frontend y estoy emocionado de seguir construyendo soluciones creativas y eficientes para mis clientes. Con mi habilidad para crear aplicaciones web dinámicas, escalables y responsivas, estoy seguro de que puedo aportar valor a cualquier proyecto que se me presente."</p>
                </div>

                <div id="carouselExampleCaptions" class="carousel slide">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={certificateDesarrolloWeb} className="imagesCertificate" alt="certificate Desarrollo Web" />
                        </div>
                        <div class="carousel-item">
                            <img src={certificateJavascript} className="imagesCertificate" alt="certificate Javascript" />
                        </div>
                        <div class="carousel-item">
                            <img src={certificateReact} className="imagesCertificate" alt="certificate React" />
                        </div>
                        <div class="carousel-item">
                            <img src={certificateFrontEndReact} className="imagesCertificate" alt="certificate FrontEnd React" />
                        </div>
                    </div>
                    <button class="carousel-control-prev bg-dark" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next bg-dark" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </>
    )
}
