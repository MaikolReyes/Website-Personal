import React from 'react'

export const Footer = () => {

    const redSocial = [
        {
            id: 1,
            link: "https://github.com/MaikolReyes",
            icon: "fa-brands fa-github icon"
        },
        {
            id: 2,
            link: "https://twitter.com/MaikolJReyes",
            icon: "fab fa-twitter icon"
        },
        {
            id: 3,
            link: "https://www.linkedin.com/in/maikol-reyes/",
            icon: "fab fa-linkedin-in icon"
        },
        {
            id: 4,
            link: "https://www.maikolreyes209@gmail.com",
            icon: "fab fa-google-plus-g icon"
        }
    ]

    return (
        <footer className='containerFooter bg-dark'>

            <ul className="social-media">
                {redSocial.map(({ id, link, icon }) => (
                    <li className="icons mb-5 mt-5" key={id}>
                        <a className="icons-image" target="_blank" href={link}><i className={icon}></i></a>
                    </li>
                ))}
            </ul>

            <p className='textDerechos'>Copyright ©2025 Maikol Reyes, Todos los derechos reservados.</p>
        </footer>
    )
}
