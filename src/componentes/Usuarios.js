
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

function Usuarios() {

    const [usuarios, setUsuarios] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {

        try {
            const obtenerUsuarios = async () => {
                const respuesta = await axios.get('http://localhost:9000/user/');
                setUsuarios(respuesta.data);

                console.log(respuesta);
                console.log(respuesta.status);

            }

            obtenerUsuarios();

            console.log(usuarios);

        } catch (error) {
            console.error('Error al obtener los usuarios:', error);
        }

    }, []);

    const eliminarUsuario = async (id) => {

        console.log(id);

        try {
            const respuesta = await axios.delete(`http://localhost:9000/user/${id}`);
            setUsuarios(usuarios.filter(usuario => usuario._id !== id));
            console.log(respuesta);

        } catch (error) {
            console.error('Error al eliminar el usuario:', error);
        }
    }

    const confirmarEliminación = (id) => {

        console.log(id);

        Swal.fire({
            title: "Estás seguro?",
            text: "Esto no se puede revertir!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, estoy seguro"
        }).then((result) => {
            if (result.isConfirmed) {
                eliminarUsuario(id);
                Swal.fire({
                    title: "Usuario Eliminado!",
                    text: "El usuario se ha eliminado correctamente.",
                    icon: "success"
                });
            }
        });


    }

    const handleEditar = (id) => {
        navigate(`/editar/${id}`);
    };

    return (
        <div className="form-container">
            <>
                <div className='usuarios'>
                    <h1 className='container mt-5 text-center'>
                        Lista de Clientes
                    </h1>
                    <div className='container mt-5 text-center'>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nombre</th>
                                    <th>Email</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {usuarios.map((usuario) => (
                                    <tr key={usuario._id}>
                                        <td>{usuario._id}</td>
                                        <td>{usuario.nombre}</td>
                                        <td>{usuario.email}</td>
                                        <td>
                                            <button
                                                className='buttonForm2'
                                                onClick={() => { confirmarEliminación(usuario._id) }}
                                            >
                                                Eliminar
                                            </button>
                                            <button className='buttonForm1' 
                                            onClick={() => handleEditar(usuario._id)}>Editar</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </>
        </div>
    );
}

export default Usuarios;