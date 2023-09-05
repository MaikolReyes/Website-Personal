import React from 'react'

export const Skills = () => {
    return (
        <>
            <section className='sectionSkills'>
                <h2 className="titleSkills">Habilidades</h2>
            </section>

            <ul className="listSkills">
                <li className="icons-skill"><a className="icons-image"><i className="fa-brands fa-html5 icon"></i></a></li>
                <li className="icons-skill"><a className="icons-image"><i className="fa-brands fa-css3-alt icon"></i></a></li>
                <li className="icons-skill"><a className="icons-image"><i className="fa-brands fa-bootstrap icon"></i></a></li>
                <li className="icons-skill"><a className="icons-image"><i className="fa-brands fa-sass icon"></i></a></li>
                <li className="icons-skill"><a className="icons-image"><i className="fa-brands fa-square-js icon"></i></a></li>
                <li className="icons-skill"><a className="icons-image"><i className="fa-brands fa-react icon"></i></a></li>
                <li className="icons-skill"><a className="icons-image"><i className="fa-brands fa-node icon"></i></a></li>
            </ul>
        </>
    )
}
