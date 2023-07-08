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
import AdminPage from "./pages/AdminPage";
import React from "react";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "./db/firebase";
import Footer from "./components/Footer/Footer";
import FavouriteProducts from "./pages/FavouriteProducts";

function App() {
  const [firebaseLoggedUser, setFirebaseLoggedUser] = React.useState({});

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if(user) {
        const {email} = user
        setFirebaseLoggedUser(email);
      }
    });
  }, []);

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
        {firebaseLoggedUser === 'admin@si.pl' && <Route path="/admin" element={<AdminPage />} />}
        {firebaseLoggedUser && <Route path="/favourite" element={<FavouriteProducts />} />}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product/:productID" element={<ProductPage />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
