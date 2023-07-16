import { colors } from "@mui/material";
import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navContainer">
        <Link to="/">SulyApp</Link>
        <ul className="conteinerCategories">
          <Link to="/">Todos</Link>
          <Link to="/category/apple">Gama alta</Link>
          <Link to="/category/samsung">Gama baja</Link>
          <li>Marcas sponsor</li>
        </ul>
        <CartWidget />
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
