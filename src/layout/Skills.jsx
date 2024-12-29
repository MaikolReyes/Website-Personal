import React from 'react'
import { ListSkills } from '../resources'

export const Skills = () => {
    return (
        <>
            <div className='sectionSkills'>
                <h2 className="titleSkills">Stack</h2>

                <ul className="listSkills">
                    {ListSkills.map(({ icon }, index) => (
                        <li key={index} className="icons">
                            <a className="icons-image"><i className={icon}></i></a>
                        </li>
                    ))}
                </ul>

            </div>
        </>
    )
}
