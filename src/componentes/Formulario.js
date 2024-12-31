
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Imagen from './Imagen';
import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import React, { useRef } from 'react';

function Formulario() {

    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:9000/user/register', {
                nombre,
                email,
                password
            });
            handleReset();
            Swal.fire({
                title: 'Registro enviado correctamente',
                icon: 'success',
                confirmButtonText: 'Continuar'
            })
            console.log('Datos enviados correctamente');
        } catch (error) {
            console.log('Error al enviar los datos ' + error);
            handleReset();
            Swal.fire({
                title: 'Error!',
                text: 'Hubo un error  al enviar los datos',
                icon: 'error',
                confirmButtonText: 'Cool'
            })
        }
    }

    const handleReset = () => {
        setNombre('');
        setEmail('');
        setPassword('');
    }

    return (
        <div className="form-container">
            <>
                <div className='formulario'>
                    <h1>
                        Registrate Aquí!
                    </h1>
                    <div>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className='label' controlId="nombre">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={nombre}
                                    onChange={(e) => setNombre(e.target.value)}
                                    placeholder="Tu nombre"
                                    required
                                />
                            </Form.Group>
                            <Form.Group className='label' controlId="email">
                                <Form.Label >Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="nombre@email.com"
                                    required
                                />
                            </Form.Group>
                            <Form.Group className='label' controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="* * * * * * * * *"
                                    required
                                />
                            </Form.Group>
                            <div >
                                <Button className='buttonForm1' type="submit">Enviar Registro</Button>
                                <Button className='buttonForm2' onClick={handleReset}>Borrar</Button>
                            </div>
                        </Form>

                    </div>
                </div>
            </>
        </div>
    );
}

export default Formulario;
