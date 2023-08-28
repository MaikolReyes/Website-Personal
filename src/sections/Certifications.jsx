import certificateDesarrolloWeb from '../img/certificates/desarrolloWeb.png'
import certificateJavascript from '../img/certificates/javascript.png'
import certificateReact from '../img/certificates/react.png'
import certificateFrontEndReact from '../img/certificates/frontEndReact.png'

export const Certifications = () => {
    return (
        <>
            <section className='sectionCertifications' id='certifications'>
                <h2 className="titleCertifications">Certificaciones</h2>
                <p className='subtitleCertification'>Me complace presentar mis certificaciones en Desarrollo Web, JavaScript y React. Estos logros reflejan mi compromiso, perseverancia y motivación para crecer y convertirme en un excelente desarrollador de software.</p>
            </section>


            <div id="carouselExampleCaptions" class="carousel slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={certificateDesarrolloWeb} className="image-certificate" alt="certificate Desarrollo Web" />
                    </div>
                    <div class="carousel-item">
                        <img src={certificateJavascript} className="image-certificate" alt="certificate Javascript" />
                    </div>
                    <div class="carousel-item">
                        <img src={certificateReact} className="image-certificate" alt="certificate React" />
                    </div>
                    <div class="carousel-item">
                        <img src={certificateFrontEndReact} className="image-certificate" alt="certificate FrontEnd React" />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

        </>
    )
}
