import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navContainer">
      <h4>SulyApp</h4>
      <ul className="conteinerCategories">
        <li>Inicio</li>
        <li>Productos</li>
        <li>Ofertas</li>
        <li>Ayuda</li>
        <li>Marcas sponsor</li>
      </ul>
      <CartWidget />
    </div>
  );
};

export default Navbar;
