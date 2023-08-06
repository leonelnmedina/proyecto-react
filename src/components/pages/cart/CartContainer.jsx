import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";

const CartContainer = () => {
  const { cart, clearCart, deleteById } = useContext(CartContext);

  return (
    <div>
      <h1>Estoy en el carrito</h1>

      {cart.map((elemento) => {
        return (
          <div
            key={elemento.id}
            style={{ width: "100px", border: "1px solid black" }}
          >
            <h3>{elemento.title}</h3>
            <h3>{elemento.price}</h3>
            <h4>Cantidad: {elemento.quantity}</h4>
            <button onClick={() => deleteById(elemento.id)}>Eliminar</button>
          </div>
        );
      })}

      <button onClick={clearCart}>Limpiar carrito</button>
    </div>
  );
};

export default CartContainer;
