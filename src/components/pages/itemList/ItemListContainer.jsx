import ItemList from "./ItemList";

const tarea = new Promise((resolve, reject) => {
  resolve("Salio todo bien");
  // reject("Salio todo mal");
});

tarea
  .then((respuesta) => console.log(respuesta))
  .catch((error) => console.log(error));

const ItemListContainer = () => {
  return <ItemList />;
};

export default ItemListContainer;
