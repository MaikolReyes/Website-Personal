import React from "react"
import { NavLink } from "react-router-dom"

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <NavLink className="nav-link" to='/' >Inicio</NavLink>
                        <NavLink className="nav-link" to='services'>Servicios</NavLink>
                        <NavLink className="nav-link" to='comunity'>Comunidad</NavLink>
                        <NavLink className="nav-link" to='formContact'>Contacto</NavLink>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
