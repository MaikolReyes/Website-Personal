
export const FormContact = () => {

    const sendForm = () => {
        swal({
            title: 'Tu consulta fue enviada',
            text: "Gracias por Contactarte",
            icon: "success"
        })
    }

    return (
        <>
            <div className="sectionForm flex items-center flex-col mt-14 large-desktop:mt-36 mb-4" id="contacto" >
                <h2 className="titleForm font-title text-3xl large-desktop:text-4xl font-semibold mb-3">Contacto</h2>
                <p className="font-title text-center w-4/5 desktop:w-2/5 large-desktop:w-1/3 text-sm large-desktop:text-base">Si queres contratar alguno de mis servicios o tienes alguna propuesta laboral,
                    no dudes en contactarme completando el formulario y a la brevedad me estare comunicando.</p>
            </div>


            <div className="form-contact text-white w-2/5 desktop:w-2/4 large-desktop:w-2/5 mx-auto">
                <div className="content flex justify-center">
                    <div className="contact-wrapper">
                        <div className="contact-form bg-dark font-subtitle rounded-3xl">
                            <form onSubmit={sendForm} action="https://formsubmit.co/maikolreyes209@gmail.com" method="POST">
                                <p>
                                    <label className="text-xs desktop:text-sm large-desktop:text-lg" htmlFor="name">Nombre</label>
                                    <input required type="text" name="Nombre" id="name" />
                                </p>
                                <p>
                                    <label className="text-xs desktop:text-sm large-desktop:text-lg" htmlFor="email">Correo Electrónico</label>
                                    <input required type="email" name="Gmail" id="email" />
                                </p>
                                <p>
                                    <label className="text-xs desktop:text-sm large-desktop:text-lg" htmlFor="telefono">Teléfono</label>
                                    <input required type="number" name="Telefono" id="telefono" />
                                </p>
                                <p>
                                    <label className="text-xs desktop:text-sm large-desktop:text-lg" htmlFor="asunto">Asunto</label>
                                    <input required type="text" name="Asunto" id="asunto" />
                                </p>
                                <p className="block">
                                    <label className="text-xs desktop:text-sm large-desktop:text-lg" htmlFor="mensajes">Mensaje</label>
                                    <textarea required name="Mensaje" id="Mensaje" cols="50" rows="1"></textarea>
                                </p>
                                <p className="block text-xs desktop:text-sm">
                                    <button className="p-2" type="submit">Enviar</button>
                                    <input type="hidden" name="_next" value="https://maikolreyes.com.ar/" />
                                    <input type="hidden" name="_captcha" value='false' />
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}