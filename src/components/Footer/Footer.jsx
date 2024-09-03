import React from 'react'

export const Footer = () => {

    const redSocial = [
        { link: "https://github.com/MaikolReyes", icon: "fa-brands fa-github icon" },
        { link: "https://twitter.com/MaikolJReyes", icon: "fab fa-twitter icon" },
        { link: "https://www.linkedin.com/in/maikol-reyes/", icon: "fab fa-linkedin-in icon" },
        { link: "https://www.maikolreyes209@gmail.com", icon: "fab fa-google-plus-g icon" }
    ]

    return (
        <footer className='containerFooter bg-dark'>

            <ul className="social-media">
                {redSocial.map(({ link, icon }) => (
                    <li className="icons mb-5 mt-5">
                        <a className="icons-image" target="_blank" href={link}><i class={icon}></i></a>
                    </li>
                ))}
            </ul>

            <p className='textDerechos'>Copyright ©2024 Maikol Reyes, Todos los derechos reservados.</p>
        </footer>
    )
}
