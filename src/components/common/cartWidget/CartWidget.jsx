import { Badge } from "@mui/material";
import { useContext } from "react";
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
const CartWidget = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <>
        <Link to="/cart">
          <Badge badgeContent={cart.length} color="primary">
            <BsCart4 size="30px" color="white" />
          </Badge>
        </Link>
      </>
    </div>
  );
};

export default CartWidget;
