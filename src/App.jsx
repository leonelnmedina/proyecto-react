import Navbar from "./components/layaut/navbar/Navbar";
import HomeContainer from "./components/pages/home/HomeContainer";
import ItemListContainer from "./components/pages/itemList/ItemListContainer";
function App() {
  let nombre = "Suly";

  const saludo = "Hola que tal??";
  return (
    <div>
      <Navbar />
      <HomeContainer nombre={nombre} />
      <ItemListContainer saludo={saludo} />
    </div>
  );
}

export default App;
