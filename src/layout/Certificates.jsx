import React from 'react'
import { certificates } from '../resources'

export const Certificates = () => {
    return (
        <>

            <div className='certifications' id='certifications' >
                <h2 className="title-certificate">Certificaciones</h2>
                <p className='subtitle-certification'>Me complace presentar mis certificaciones en Desarrollo Web, JavaScript y React. Estos logros reflejan mi compromiso, perseverancia y motivación para crecer y convertirme en un excelente desarrollador de software.</p>
            </div >


            <div id="carouselExampleCaptions" class="carousel slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                </div>

                <div class="carousel-inner">
                    {certificates.map(({ href, description }, index) => (
                        <div key={index} class={`carousel-item ${index === 0 ? 'active' : ''}`}>
                            <img src={href} className="image-certificate" alt={description} />
                        </div>
                    ))}
                </div>

                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div >
        </>
    )
}
