import React from "react"

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div><h3 className="text-white mx-5">Maikol Reyes</h3></div>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li><a className="nav-link" href="#home">Inicio</a></li>
                        <li><a className="nav-link" href='#services'>Servicios</a></li>
                        <li><a className="nav-link" href="#portfolio">Portfolio</a></li>
                        <li><a className="btn" href="#contacto">Contacto</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
