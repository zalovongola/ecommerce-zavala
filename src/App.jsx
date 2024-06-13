import Navbar from "./componentes/navbar/navbar";
import { ItemListContainer } from "./pages/itemListConteiner/ItemListContainer";

function App() {
  return (
    <div>
      <Navbar/>
      <ItemListContainer greeting="Bienvenido a mi ecommerce" />
    </div>
  );
}

export default App;
