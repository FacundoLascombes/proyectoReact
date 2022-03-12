import "../styles/NavBar.css";
import extrusor from "../images/extrusor.png";
import "./CartWidget.jsx";
import CartWidget from "./CartWidget.jsx";

function NavBar() {
  return (
    <div className="Nav">
      <div className="logo-marca">
        <div>
          <img src={extrusor} />
        </div>

        <div>
          <h3>Impresiones 3D</h3>
        </div>
      </div>

      <div className="menu">
        <a href=""> Modelos </a>
        <a href=""> Tienda </a>
        <a href=""> Impresoras </a>
        <a href=""> Contacto </a>
      </div>

      <div className="CartWidget">
        <CartWidget />
      </div>
    </div>
  );
}

export default NavBar;
