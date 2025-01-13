import React from "react";
import { navItems } from "../../resources";

export const Navbar = () => {
  return (
    <nav className="navbar w-full navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#home">
          <h3 className="text-white mx-5 my-auto">MR</h3>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav" QQQ
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse align-items-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            {navItems.map(({ href, text, id }) => (
              <li className="nav-item" key={id}>
                <a className="nav-link" href={href}>
                  {text}
                </a>
              </li>
            ))}
            <li>
              <a className="buttonContactoNavbar btn" href="#contacto">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
