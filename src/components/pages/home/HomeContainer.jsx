import { useState } from "react";
import Home from "./home";
const HomeContainer = ({ nombre }) => {
  const [contador, setContador] = useState(0);
  const sumar = () => {
    setContador(contador + 1);
  };
  return <Home nombre={nombre} sumar={sumar} contador={contador} />;
};

export default HomeContainer;
