import { Badge } from "@mui/material";
import { useContext } from "react";
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);

  let total = getTotalQuantity();
  return (
    <div>
      <>
        <Link to="/cart">
          <Badge badgeContent={total} color="primary" showZero>
            <BsCart4 size="30px" color="white" />
          </Badge>
        </Link>
      </>
    </div>
  );
};

export default CartWidget;
