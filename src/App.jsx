import Navbar from "./components/layaut/navbar/Navbar";
import FetchData from "./components/pages/fetchData/FetchData";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer";
import ItemListContainer from "./components/pages/itemList/ItemListContainer";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer />
      {/* <FetchData /> */}
      <ItemDetailContainer />
    </div>
  );
}

export default App;
