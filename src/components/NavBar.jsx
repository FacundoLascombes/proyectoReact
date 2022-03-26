import "../styles/NavBar.css";
import extrusor from "../images/extrusor.png";
import { NavLink } from "react-router-dom";
import "./CartWidget.jsx";
import CartWidget from "./CartWidget.jsx";

function NavBar() {
  return (
    <div className="Nav">
      <NavLink to='/'>
      <div className="logo-marca">
        <div>
          <img src={extrusor} />
        </div>

        <div>
          <h3>Impresiones 3D</h3>
        </div>
      </div>
      </NavLink>

      <div className="menu">
        <NavLink to='/category/:categoryId' > Modelos </NavLink>
        <NavLink to='/category/:categoryId' > Tienda </NavLink>
        <NavLink to='/category/:categoryId' > Impresoras </NavLink>
        <NavLink to='/category/:categoryId' > Contacto </NavLink>
      </div>

      <div className="CartWidget">
        <CartWidget />
      </div>
    </div>
  );
}

export default NavBar;
