import React from "react";
import { navItems } from "../resources";

export const Navbar = () => {

  return (
    <nav className="navbar navbar-expand-lg bg-dark w-full position-fixed z-10 shadow-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="#home">
          <h3 className="text-white mx-5 my-auto text-2xl">MR</h3>
        </a>
        <button
          className="navbar-toggler bg-customPrimary mr-5" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-center desktop:justify-end large-desktop:justify-end" id="navbarNav">
          <ul className="navbar-nav gap-7 mr-5 items-center mobile:gap-10 ">
            {navItems.map(({ href, text, id }) => (
              <li className="nav-item" key={id}>
                <a className="nav-link text-white font-subtitle text-base hover:text-gray-400 relative transition-all duration-350 ease-linear" href={href}>
                  {text}
                </a>
              </li>
            ))}

            <li >

              <a className="btn mx-auto bg-customPrimary text-base font-title font-bold w-32 hover:bg-customHover hover:text-black" href="#contacto">
                Contacto
              </a>

            </li>
          </ul>

        </div>
      </div>
    </nav >
  );
};
