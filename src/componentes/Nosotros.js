import imgUbic from './Imagenes/nosotros.jpeg';
import imgHor from './Imagenes/nosotros2.jpeg';


const Nosotros = () => {
    return(
        <>
        <div className="main-container">
            <div className="main-section">
                <p>Nuestro lubricentro es un taller especializado que ofrece una amplia gama de servicios de mantenimiento y reparación para vehículos. Nos dedicamos con profesionalismo y compromiso al cambio de aceite y filtros, asegurando que tu motor funcione de manera óptima y eficiente. Además, contamos con expertos en tren delantero y amortiguación, quienes garantizan la estabilidad y seguridad de tu vehículo en todo tipo de terrenos.<br></br>
                También ofrecemos servicios de cambio de correas, esenciales para el correcto funcionamiento de componentes críticos del motor, y cambio de baterías, asegurando que tu vehículo esté siempre listo para arrancar en cualquier condición climática. En nuestro lubricentro, utilizamos productos de alta calidad y técnicas avanzadas para asegurar que cada servicio sea realizado con precisión y eficacia, brindándote la confianza de que tu vehículo está en manos de profesionales experimentados.
                <br></br>
                Nuestro objetivo es ofrecer un servicio rápido, confiable y accesible, para que puedas mantener tu vehículo en las mejores condiciones y disfrutar de una conducción segura y sin preocupaciones.</p>
                <h2>Ubicación</h2>
                <img src={imgUbic} alt="imagen-ubicacion"/>
                <h2>Horario</h2>
                <img src={imgHor} alt="imagen-horario"/>
            </div>
        </div>
        </>
    )
}

export default Nosotros;