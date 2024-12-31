/*import Nav from 'react-bootstrap/Nav';

const Navegacion = () =>  {
    return (
        <Nav>
            <Nav.Item>
                <Nav.Link href="/">
                    Home
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/formulario">
                    Formulario
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/usuarios">
                    Usuarios
                </Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default Navegacion;*/

import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navegacion.css';
import imagenLogo from './Imagenes/imagenLogo.png';


const Navegacion = ({ onCarritoClick }) => {
    return (
        <>
            <header>
                <nav className="navbar">
                    <Link to={"/"}>
                        <img src={imagenLogo} alt="imágen logo" className="imagenLogo" />
                    </Link>
                    <ol><Link to={"/"}>INICIO</Link></ol>
                    <ol><Link to={"/Productos"}>PRODUCTOS</Link></ol>
                    <ol><Link to={"/Formulario"}>FORMULARIO</Link></ol>
                    <ol><Link to={"/Contacto"}>CONTACTO</Link></ol>
                    <ol><Link to={"/Nosotros"}>NOSOTROS</Link></ol>
                    <ol><Link to={"/Usuarios"}>USUARIOS</Link></ol>
                    <input className="buscar" type="search" id="search" name="search" />
                    <button className="boton">Buscar</button>
                    <button variant="outline-primary" onClick={onCarritoClick}>
                        <i className="bi bi-cart"></i>
                    </button>
                </nav>
            </header>
        </>
    );
}

export default Navegacion;