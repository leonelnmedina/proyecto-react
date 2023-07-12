import ItemList from "./ItemList";

const tarea = new Promise((resolve, reject) => {
  resolve();
  reject();
});

const ItemListContainer = () => {
  return <ItemList />;
};

export default ItemListContainer;
