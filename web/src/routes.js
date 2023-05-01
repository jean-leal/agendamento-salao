import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './styles.css';

import Header from './components/Header';
import Sidebar from './components/Sidebar';

import Agendamentos from './pages/Agendamentos';
import Clientes from './pages/Clientes';
import Colaboradores from './pages/Colaboradores'

const Rotas = () => {
  return(
    <>
      <Header/>
      <div className="container-fluid Rotas h-100">
        <div className="row h-100">
          <Router>
            <Sidebar/>                         
            <Routes>                
              <Route path='/' element={<Agendamentos/>}/>
              <Route path='/clientes' element={<Clientes/>}/>
              <Route path='/colaboradores' element={<Colaboradores/>}/>
            </Routes>          
          </Router>
        </div>         
      </div>      
    </>
  )
}

export default Rotas;