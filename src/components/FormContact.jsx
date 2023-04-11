
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
            <div className="textForm d-flex justify-content-center animate__animated animate__backInLeft">
                <h4 className="text-pages mt-5 text-white">Contactarme</h4>
            </div>
            <div className="form-contact animate__animated animate__backInLeft">
                <div className="content">
                    <div className="contact-wrapper">
                        <div className="contact-form">
                            <form onSubmit={sendForm} action="https://formsubmit.co/maikolreyes209@gmail.com" method="POST">
                                <p>
                                    <label for="name">Nombre</label>
                                    <input required type="text" name="Nombre" id="name" />
                                </p>
                                <p>
                                    <label for="email">Correo Electrónico</label>
                                    <input required type="email" name="Gmail" id="email" />
                                </p>
                                <p>
                                    <label for="telefono">Teléfono</label>
                                    <input required type="tel" name="Telefono" id="telefono" />
                                </p>
                                <p>
                                    <label for="asunto">Asunto</label>
                                    <input required type="text" name="Asunto" id="asunto" />
                                </p>
                                <p className="block">
                                    <label for="mensajes">Mensaje</label>
                                    <textarea required name="Mensaje" id="Mensaje" cols="50" rows="3"></textarea>
                                </p>
                                <p className="block">
                                    <button type="submit">Enviar</button>
                                    <input type="hidden" name="_next" value="http://127.0.0.1:5173/formContact" />
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