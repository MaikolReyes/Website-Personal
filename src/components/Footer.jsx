import React from 'react'

export const Footer = () => {
    return (
        <footer className='containerFooter bg-dark'>
            <ul className="social-media">
                <li className="icons mb-5 mt-5">
                    <a className="icons-image" target="_blank" href="https://github.com/MaikolReyes"><i class="fa-brands fa-github icon"></i></a>
                </li>
                <li className="icons mt-5 mb-5">
                    <a className="icons-image" target="_blank" href="https://twitter.com/MaikolJReyes"><i className="fab fa-twitter icon"></i></a>
                </li>
                <li className="icons mb-5 mt-5">
                    <a className="icons-image" target="_blank" href="https://www.linkedin.com/in/maikol-reyes/"><i className="fab fa-linkedin-in icon"></i></a>
                </li>
                {/* <li className="icons mb-5 mt-5">
                    <a className="icons-image" target="_blank" href="https://www.maikolreyes209@gmail.com"><i className="fab fa-google-plus-g icon"></i></a>
                </li> */}
            </ul>
            <p className='textDerechos'>Copyright ©2023 Maikol Reyes, Todos los derechos reservados.</p>
        </footer>
    )
}
