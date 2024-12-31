import React from 'react';
import { Link } from 'react-router-dom';
import '../css/App.css';

const Footer = () => {
    return (
        <footer>
            <footer>
            <div className="footer-container">
                <div className="footer-section">
                    <h4>Conocenos</h4>
                    <p>En nuestro lubricentro, nos especializamos en el cambio de aceite, filtros, correas y baterías, así como en el mantenimiento del tren delantero y la amortiguación. Ofrecemos servicios rápidos y profesionales, utilizando productos de alta calidad para asegurar que tu vehículo funcione de manera óptima y segura en todo momento.</p>
                </div>
                <div className="footer-section">
                    <h4>Enlaces</h4>
                    <ul>
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Alta</a></li>
                        <li><a href="#">Contacto</a></li>
                        <li><a href="#">Nosotros</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Seguinos en nuestras redes</h4>
                    <ul class="social-links">
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Instagram</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p className="reservados">&copy; 2024 TuEmpresa. Todos los derechos reservados.</p>
            </div>
            </footer>
        </footer>
    )
}

export default Footer;