import Icon from '@mdi/react';
import { mdiChevronDown } from '@mdi/js';

const Header = () => {
  return (
    <header className="container-fluid d-flex justify-content-end">
      <div className="d-flex align-items-center">
        <div>
          <span className="d-block m-0 p-0 text-white">Salão Novo</span>
          <small className="m-0 p-0">Plano master</small>
          
        </div>  
        <img src="https://imgs.search.brave.com/gH035Vt6VwHfEDKAI0mK9EnubcyJZ9FXkySz5JsbAAk/rs:fit:512:512:1/g:ce/aHR0cHM6Ly9sb2dv/ZGl4LmNvbS9sb2dv/LzE3MTM5MjQucG5n"></img>
        <Icon path={mdiChevronDown} size={1} color={"white"}/>  
      </div>
    </header>
  );
}

export default Header;