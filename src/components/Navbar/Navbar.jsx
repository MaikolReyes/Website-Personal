import React from "react";
import { navItems } from "../../resources";

export const Navbar = () => {

  return (
    <nav className="navbar navbar-expand-lg bg-dark w-full position-fixed z-10 shadow-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="#home">
          <h3 className="text-white mx-5 my-auto text-2xl">MR</h3>
        </a>
        <button
          className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="navbar-collapse cola justify-content-end" id="navbarNav">
          {/* collapse */}
          <ul className="navbar-nav gap-7 mr-5 items-center">
            {navItems.map(({ href, text, id }) => (
              <li className="nav-item" key={id}>
                <a className="nav-link text-white font-subtitle text-base hover:text-gray-400 relative transition-all duration-350 ease-linear" href={href}>
                  {text}
                </a>
              </li>
            ))}

            <li >

              <a className="buttonContactoNavbar btn" href="#contacto">
                Contacto
              </a>

            </li>
          </ul>

        </div>
      </div>
    </nav >
  );
};
