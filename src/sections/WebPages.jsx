import React from "react"
import image from '../img/loguito.png'
export const WebPages = () => {
    return (
        <>
            <div className="textProjects" >
                <h2 className="text-pages bg-white text-dark mt-5 mb-5">Proyectos Destacados</h2>
            </div >

            <div className="d-flex justify-content-around mb-5">
                <div class="card" >
                    <img src={image} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div className="d-flex">
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div class="card" >
                    <img src={image} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div className="d-flex">
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div class="card" >
                    <img src={image} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div className="d-flex">
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
