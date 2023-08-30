import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navContainer">
        <div>
          <Link className="logo" to="/">
            SulyApp
          </Link>
        </div>

        <ul className="conteinerCategories">
          <Link to="/">Todos</Link>
          <Link to="/category/apple">Apple</Link>
          <Link to="/category/samsung">Samsung</Link>
        </ul>

        <Link to="/dashboard">Administrador</Link>

        <CartWidget />
      </div>
    </div>
  );
};

export default Navbar;
