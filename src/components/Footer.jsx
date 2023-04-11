import React from 'react'

export const Footer = () => {
    return (
        <footer className='bg-light'>
            <ul className="social-media">
                <li className="icons mb-5 mt-5">
                    <a className="icons-image" href="#"><i className="fab fa-facebook-f icon"></i></a>
                </li>
                <li className="icons mt-5 mb-5">
                    <a className="icons-image" href="#"><i className="fab fa-twitter icon"></i></a>
                </li>
                <li className="icons mb-5 mt-5">
                    <a className="icons-image" href="#"><i className="fab fa-linkedin-in icon"></i></a>
                </li>
                <li className="icons mb-5 mt-5">
                    <a className="icons-image" href="#"><i className="fab fa-google-plus-g icon"></i></a>
                </li>
            </ul>
        </footer>
    )
}
