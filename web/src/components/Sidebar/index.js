import {Link, useLocation} from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiCalendarCheck, mdiAccountBadge } from '@mdi/js';



const Sidebar = () => {
  let location = useLocation();

  return (
    <sidebar className="col-2 h-100">
      <span className="img-fluid px-3 py-4 text-white">Logo Empresa</span>
      <ul className="p-0 m-0">
        <li>
          <Link to="/" className={location.pathname === '/agendamentos' ? 'active' : ''}>
            <Icon path={mdiCalendarCheck} size={1}/>
            <text>Agendamentos</text>
          </Link>
        </li>
        <li>
          <Link to="/clientes" className={location.pathname === '/clientes' ? 'active' : ''}>
            <Icon path={mdiAccountBadge} size={1}/>
            <text>Clientes</text>
          </Link>         
        </li>
      </ul> 
    </sidebar>
  )
}
export default Sidebar;