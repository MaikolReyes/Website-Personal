import React from "react";
import { redSocials } from "../resources";

export const Footer = () => {
  return (
    <footer className="mt-20 bg-dark">
      <ul className="flex justify-center">
        {redSocials.map(({ id, link, icon }) => (
          <li className="iconso mb-5 mt-5" key={id}>
            <a className="icons-image" target="_blank" href={link}>
              <i className={icon}></i>
            </a>
          </li>
        ))}
      </ul>

      <p className="text-white text-sm large-desktop:text-base mx-0 font-semibold flex justify-center pb-2">
        Copyright ©2025 Maikol Reyes, Todos los derechos reservados.
      </p>
    </footer>
  );
};
