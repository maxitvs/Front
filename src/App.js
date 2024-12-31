
import './css/App.css';
import Footer from './componentes/Footer';
import Navegacion from './componentes/Navegacion';
import Home from './componentes/Home';
import Productos from './componentes/Productos';
import Formulario from './componentes/Formulario';
import EditarForm from './componentes/EditarForm';
import Contactos from './componentes/Contacto';
import Nosotros from './componentes/Nosotros';
import Usuarios from './componentes/Usuarios';
import Error from './componentes/Error';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (

    <>

      <Navegacion />

      <Routes>
        <Route path='/' element={ <Home /> }></Route>
        <Route path='/productos' element={ <Productos /> }></Route>
        <Route path='/formulario' element={ <Formulario /> }></Route>
        <Route path="/editar/:id" element={<EditarForm />} />
        <Route path='/nosotros' element={ <Nosotros /> }></Route>
        <Route path='/usuarios' element={ <Usuarios /> }></Route>
        <Route path='*' element={ <Error /> }></Route>
      </Routes>
      <Footer />
    </>


  );
}

export default App;
