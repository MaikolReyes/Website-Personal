import { projectsDev } from '../lib'

export const ProjectsDevs = () => {
    return (
        <>
            <div className="flex flex-col items-center mt-10 tablet:mt-20" id="portfolio" >
                <h2 className="text-xl desktop:text-3xl font-semibold font-title">Proyectos en Programación</h2>

                <p className="w-3/4 text-sm m-4 large-desktop:text-base font-title text-center desktop:w-2/5">Te invito a echar un vistazo a mi recorrido en el mundo del desarrollo front-end. Cada proyecto que encontrarás aquí es una pieza clave en mi aprendizaje y evolución. ¡Espero que disfrutes explorando mis creaciones tanto como yo disfruté creándolas!</p>
            </div>

            {
                projectsDev.map(({ name, id, img, description, github, deploy }) => (
                    <div className="mb-11 flex justify-center text-white flex-col desktop:flex-row items-center" key={id} >

                        <div className="flex items-center w-4/5 h-48 rounded-xl bg-customProject desktop:w-4/12 desktop:h-72 large-desktop:w-1/4">
                            <img className="imageProject large-desktop:w-[400px] w-[300px] mx-auto" src={img} alt={name} />
                        </div>

                        <div className="flex flex-col items-center w-4/5 justify-center bg-dark rounded-xl desktop:h-72 desktop:w-4/12 large-desktop:w-1/4">

                            <h3 className="m-3 text-lg desktop:mb-3 font-title tablet:text-2xl">{name}</h3>
                            <p className="text-sm text-customHover font-text text-center w-4/5 large-desktop:text-base">{description}</p>

                            <div className="m-0 flex justify-center gap-3 p-3 tablet:mt-3">

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
