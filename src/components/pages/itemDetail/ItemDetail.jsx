import CounterContainer from "../../common/Counter/CounterContainer";

const ItemDetail = ({ product, agregarAlCarrito, cantidadEnCarrito }) => {
  return (
    <div>
      <h1>{product.title}</h1>
      <h3>{product.price}</h3>

      <CounterContainer
        stock={product.stock}
        agregarAlCarrito={agregarAlCarrito}
        cantidadEnCarrito={cantidadEnCarrito}
      />
    </div>
  );
};

export default ItemDetail;
