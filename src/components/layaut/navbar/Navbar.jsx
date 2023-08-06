import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navContainer">
        <div>
          {/* <img
            className="Logo1"
            src="https://www.pngwing.com/es/free-png-bybbk"
            alt=""
          /> */}
          <Link className="logo" to="/">
            SulyApp
          </Link>
        </div>

        <ul className="conteinerCategories">
          <Link to="/">Todos</Link>
          <Link to="/category/apple">Gama alta</Link>
          <Link to="/category/samsung">Gama baja</Link>
          <li>Marcas sponsor</li>
        </ul>
        <CartWidget />
      </div>
    </div>
  );
};

export default Navbar;
