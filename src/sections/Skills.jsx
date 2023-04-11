import React from 'react'
import gif from '../img/giphy.gif'
import { Certifications } from './Certifications'

export const Skills = () => {


    return (
        <>
            <div className="containerSkills">
                <div className='containerTextSkills bg-white'>
                    <img className='gifSkills' src={gif} alt="" />
                    <p className="textSkills mt-5 text-dark">la fuente de mis conocimientos provienen de cursos y aprendizajes
                        autodidactas constantes.
                    </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, nesciunt quidem laudantium aperiam dolorum
                        reiciendis provident sequi eius vel deserunt!</p>
                </div>

                <div className='d-flex flex-column align-items-center'>
                    <h3 className="textHabilities bg-white text-dark">Habilidades</h3>
                    <ul class="listSkills">
                        <li class="icons-skill"><a class="icons-image" href="#"><i class="fa-brands fa-html5 icon"></i></a></li>
                        <li class="icons-skill"><a class="icons-image" href="#"><i class="fa-brands fa-css3-alt icon"></i></a></li>
                        <li class="icons-skill"><a class="icons-image" href="#"><i class="fa-brands fa-bootstrap icon"></i></a></li>
                        <li class="icons-skill"><a class="icons-image" href="#"><i class="fa-brands fa-square-js icon"></i></a></li>
                        <li class="icons-skill"><a class="icons-image" href="#"><i class="fa-brands fa-react icon"></i></a></li>
                        <li class="icons-skill"><a class="icons-image" href="#"><i class="fa-brands fa-node icon"></i></a></li>
                        <li class="icons-skill"><a class="icons-image" href="#"><i class="fa-brands fa-sass icon"></i></a></li>
                        <li class="icons-skill"><a class="icons-image" href="#"><i class="fa-brands fa-python icon"></i></a></li>
                        <li class="icons-skill"><a class="icons-image" href="#"><i class="fa-brands fa-square-git icon"></i></a></li>
                        <li class="icons-skill"><a class="icons-image" href="#"><i class="fa-brands fa-square-git icon"></i></a></li>
                        <li class="icons-skill"><a class="icons-image" href="#"><i class="fa-brands fa-square-git icon"></i></a></li>
                        <li class="icons-skill"><a class="icons-image" href="#"><i class="fa-brands fa-square-git icon"></i></a></li>
                    </ul>
                </div>
            </div>

            <Certifications />
        </>
    )
}
