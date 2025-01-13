import React from 'react'
import { ListSkills } from '../resources'

export const Skills = () => {
    return (
        <>
            <div className='sectionSkills flex flex-col items-center mt-12 mb-7'>
                <h2 className="titleSkills text-4xl font-semibold font-title mt-4 mb-4">Stack</h2>

                <ul className="listSkills flex justify-center gap-7">
                    {ListSkills.map(({ icon }, index) => (
                        <li key={index} className="icons">
                            <a className="icons-image" ><i className={icon}></i></a>
                        </li>
                    ))}
                </ul>

            </div>
        </>
    )
}
