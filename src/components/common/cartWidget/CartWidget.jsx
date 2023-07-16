import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
const CartWidget = () => {
  return (
    <div>
      <>
        <Link to="/cart">
          {/* Incono del carrito */}
          <BsCart4 size="30px" color="white" />
        </Link>
      </>
    </div>
  );
};

export default CartWidget;
