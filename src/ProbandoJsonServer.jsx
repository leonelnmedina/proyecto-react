import { useEffect, useState } from "react";
import axios from "axios";

const ProbandoJsonServer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let data = axios.get("http://localhost:5000/products");
    data
      .then((res) => setProducts(res.data))
      .catch((error) => console.log(error));
  }, []);

  console.log(products);

  let nuevoProducto = {
    title: "Samsung s23 nuevo",
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_788988-MLA50448202074_062022-F.webp",
    price: 599,
    category: "Celulares nuevo alta gama",
    stock: 4,
    description: "Diseño resistente al agua, larga duración de batería.",
  };

  const createProduct = () => {
    let data = axios.post("http://localhost:5000/products", nuevoProducto);
  };

  return (
    <div>
      <h1>Probando Json je</h1>
      <button onClick={createProduct}>Crear nuevo producto</button>
    </div>
  );
};

export default ProbandoJsonServer;
