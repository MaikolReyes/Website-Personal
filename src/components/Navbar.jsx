export const Navbar = () => {

  return (
    <nav className="navbar navbar-expand-lg bg-dark w-full position-fixed z-10 shadow-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="#home">
          <h3 className="text-white mx-5 my-auto text-2xl">Maikol Reyes</h3>
        </a>
        <button
          className="navbar-toggler bg-customPrimary mr-5" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-center desktop:justify-end large-desktop:justify-end" id="navbarNav">
          <ul className="navbar-nav gap-10 large-desktop:gap-7  items-center mobile:gap-10 ">
            <li className="nav-item">
              <a className="nav-link text-white font-subtitle text-base hover:text-gray-400 relative transition-all duration-350 ease-linear" href="#home">
                Inicio
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-white font-subtitle text-base hover:text-gray-400 relative transition-all duration-350 ease-linear" href="#portfolio">
                Portfolio
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-white font-subtitle text-base hover:text-gray-400 relative transition-all duration-350 ease-linear" href="#certifications">
                Certificaciones
              </a>
            </li>

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
