import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";

const CartContainer = () => {
  const { cart, clearCart, deleteById, getTotalPrice } =
    useContext(CartContext);

  let limpiar = () => {
    Swal.fire({
      title: "Seguro quieres eliminar todo el carrito?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Eliminar",
      denyButtonText: `Cancelar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Carrito eliminado con exito!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("El carrito no tuvo cambios", "", "info");
      }
    });
  };

  let total = getTotalPrice();

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

      {cart.length > 0 && (
        <>
          <button onClick={limpiar}>Limpiar carrito</button>
          <h2>El total del carrito es: {total}</h2>
          <button>Terminar compra</button>
        </>
      )}
    </div>
  );
};

export default CartContainer;
