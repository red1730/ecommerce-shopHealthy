import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from '../assets/logo.png'
import './style.css';


export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
      <Link className="navbar-brand" to="/">
        {<img src={Logo} alt="logo" className="logos" />}
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">

        <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "active" : ""}`
            }
            to="/contact"
          >
           Inicio
          </NavLink>

        <select onChange={()=>true}>
          <option value="All">All</option>
          <option value="Only_Pokedex">Only Pokedex</option>
          <option value="MyPokemons">My Pokemons</option>
        </select>


          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "active" : ""}`
            }
            to="/contact"
          >
            Contacto
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "active" : ""}`
            }
            to="/login"
          >
            Identificate
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
          <span className="nav-item nav-link text-success">Christian</span>
          <button className="nav-link nav-item btn" onClick={() => onLoguot()}>
            logout
          </button>
        </ul>
      </div>
    </nav>
  );
};
