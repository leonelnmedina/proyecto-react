const ItemList = ({ edad, setEdad, products, setProducts }) => {
  return (
    <div>
      <h2>{edad}</h2>
      <button onClick={() => setEdad(edad + 1)}>Incrementar edad</button>
      <button onClick={() => setProducts([...products, {}])}>
        Agregar producto
      </button>
    </div>
  );
};

export default ItemList;
