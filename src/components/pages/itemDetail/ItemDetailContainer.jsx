import { useState } from "react";
import ItemDetail from "./ItemDetail";
import { useEffect } from "react";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});

  let id = 2;

  useEffect(() => {
    let promesa = new Promise((resolve, reject) => {
      let productSelected = product.find((product) => product.id === id);
      resolve(productSelected);
    });

    promesa.then((res) => setProduct(res)).catch((err) => console.log(err));
  }, [id]);

  const agregarAlCarrito = (catidad) => {
    let data = {
      ...product,
      quantity: catidad,
    };
    console.log(data);
  };
  return <ItemDetail product={product} agregarAlCarrito={agregarAlCarrito} />;
};

export default ItemDetailContainer;
