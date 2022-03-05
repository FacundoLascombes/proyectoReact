import "./NavBar.css";
import logo from "../logo.svg";

function NavBar() {
  return (
    <div className="Nav">
      <div className="logo-marca">
        <div>
          <img src={logo} />
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
    </div>
  );
}

export default NavBar;