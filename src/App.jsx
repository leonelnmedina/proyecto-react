import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/pages/itemList/ItemListContainer";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer";
import CartContainer from "./components/pages/cart/CartContainer";
import Navbar from "./components/layaut/navbar/Navbar";
import Footer from "./components/layaut/footer/Footer";
import CheckoutContainer from "./components/pages/checkout/CheckoutContainer";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
