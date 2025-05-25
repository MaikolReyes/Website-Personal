import { projectsDev } from '../lib'

export const ProjectsDevs = () => {
    return (
        <>
            <div className="flex flex-col items-center mt-20" id="portfolio" >
                <h2 className="text-3xl large-desktop:text-4xl font-semibold font-title animate__animated animate__backInLeft">Proyectos en Programacion</h2>

                <p className="w-4/5 text-sm m-4 large-desktop:text-base font-title text-center desktop:w-1/3">Te invito a echar un vistazo a mi recorrido en el mundo del desarrollo front-end. Cada proyecto que encontrarás aquí es una pieza clave en mi aprendizaje y evolución. ¡Espero que disfrutes explorando mis creaciones tanto como yo disfruté creándolas!</p>
            </div>

            {
                projectsDev.map(({ name, id, img, description, github, deploy }) => (
                    <div className="mb-11 flex justify-center text-white flex-col desktop:flex-row items-center" key={id} >

                        <div className="flex items-center w-4/5 h-48 rounded-xl bg-customProject desktop:h-72 desktop:w-1/4">
                            <img className="imageProject large-desktop:w-[400px] w-[300px] mx-auto" src={img} alt={name} />
                        </div>

                        <div className="flex flex-col items-center w-4/5 justify-center bg-dark rounded-xl desktop:h-72 desktop:w-1/4">

                            <h3 className="mb-3 font-title desktop:text-2xl">{name}</h3>
                            <p className="text-sm text-customHover  desktop:text-base font-text text-center w-4/5">{description}</p>

                            <div className="mt-3 flex justify-center gap-3">

                                <a className="btn text-sm bg-customPrimary font-title font-bold p-2 hover:text-black hover:bg-customHover desktop:w-36 desktop:text-base" target="_blank" href={deploy}><i className="fa-solid fa-arrow-up-right-from-square p-2"></i>Deploy</a>

                                <a className="btn text-sm bg-customPrimary font-title font-bold p-2 hover:text-black hover:bg-customHover desktop:w-36 desktop:text-base" target="_blank" href={github} ><i className=" fa-brands fa-github p-2"></i>Github</a>

                            </div>
                        </div >
                    </div>
                ))
            }
        </>
    )
}
