import carrito from "../images/carrito.jpg";
import { NavLink } from "react-router-dom";

function CartWidget() {
  return (
    <NavLink to='/cart'>
      <img src={carrito} />
    </NavLink>
  )
}

export default CartWidget;
