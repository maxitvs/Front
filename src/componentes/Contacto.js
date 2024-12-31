import React, { useRef } from 'react';

const Contacto = () => {
    const Formulario = () => {
        const formRef = useRef(null);

        const handleSubmit = (event) => {
            event.preventDefault();

            if (formRef.current.checkValidity()) {
                console.log('Formulario válido y listo para enviar');
            } else {
                formRef.current.reportValidity();
            }
        };

        return (
            <div className="form-container">
                <form ref={formRef} className='formulario' onSubmit={handleSubmit} noValidate>
                    <h1>Registrarse</h1>

                    <label className='label' htmlFor='nombre'>Nombre</label>
                    <input className='input' type="text" minLength="3" name="nombre" required />
                    <small id="nameError" className="error"></small>

                    <label className='label' htmlFor='email'>E-mail</label>
                    <input className='input' type="email" name="email" required />
                    <small id="emailError" className="error"></small>

                    <label className='label' htmlFor="comentarios">Comentarios</label>
                    <input className='input' type="text" minLength="10" name="comentarios" required />
                    
                    <button className='buttonForm1' type="submit">Enviar</button>
                </form>
            </div>
        );
    };

    return <Formulario />;
};

export default Contacto;
