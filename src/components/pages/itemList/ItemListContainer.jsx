import ItemList from "./ItemList";

const ItemListContainer = ({ saludo }) => {
  let apellido = "Medina";

  return <ItemList apellido={apellido} saludo={saludo} />;
};

export default ItemListContainer;
