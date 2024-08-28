import React from "react"

export const Navbar = () => {

    const navItems = [
        { href: "#home", text: "Inicio", id: 1 },
        { href: "#portfolio", text: "Portfolio", id: 2 },
        { href: "#certifications", text: "Certificaciones", id: 3 },
    ];

    return (
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">

                <a className="navbar-brand" href="#home"><h3 className="text-white mx-5 my-auto">Maikol Reyes</h3></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">

                        {navItems.map(({ href, text, id }) => (
                            <li className="nav-item" key={id}>
                                <a className="nav-link" href={href}>{text}</a>
                            </li>))
                        };
                        <li>
                            <a className="buttonContactoNavbar btn" href="#contacto">Contacto</a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}