import { certificates } from '../resources'

export const Certificates = () => {
    return (
        <>

            <div className='flex items-center flex-col large-desktop:mt-36 mb-4 mt-14' id='certifications' >
                <h2 className="text-3xl large-desktop:text-4xl font-semibold font-title mb-3">Certificaciones</h2>
                <p className='text-sm w-4/5 desktop:w-2/5 large-desktop:w-1/3 large-desktop:text-base text-center font-title'>Me complace presentar mis certificaciones en Análisis de datos, SQL, Desarrollo Web, JavaScript y React. Estos logros reflejan mi compromiso, perseverancia y motivación para crecer y convertirme en un excelente analista de datos</p>
            </div>


            <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" aria-label="Slide 7"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="7" aria-label="Slide 8"></button>
                </div>

                <div className="carousel-inner">
                    {certificates.map(({ href, description }, index) => (
                        <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                            <img src={href} className=" block m-auto desktop:w-1/2 large-desktop:w-1/3 rounded-xl shadow-lg w-3/4" alt={description} />
                        </div>
                    ))}
                </div>

                <button className="carousel-control-prev desktop:w-3/5 large-desktop:w-3/5 p-3 w-12 h-12" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon bg-gray-500 rounded-xl w-8 h-10 hover:bg-gray-700" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next desktop:w-3/5  large-desktop:w-3/5 p-3 w-12 h-12" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon bg-gray-500 rounded-xl w-8 h-10 hover:bg-gray-700" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div >
        </>
    )
}
