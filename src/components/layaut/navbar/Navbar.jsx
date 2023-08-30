import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  let userRol = "admin";

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

        {userRol === "admin" && <Link to="/dashboard">Administrador</Link>}

        <CartWidget />
      </div>
    </div>
  );
};

export default Navbar;
