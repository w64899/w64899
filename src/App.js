import {Routes, Route} from "react-router-dom";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Accessories from "./pages/Accessories";
import Electronics from "./pages/Electronics";
import Homepage from "./pages/Homepage";
import Navigation from "./components/Navigation/Navigation";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductPage from "./pages/ProductPage";
import Cart from "./pages/Cart";

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product/:productID" element={<ProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
