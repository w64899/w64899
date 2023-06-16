import {Routes, Route} from "react-router-dom";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Accessories from "./pages/Accessories";
import Electronics from "./pages/Electronics";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/electronics" element={<Electronics />} />
      </Routes>
    </div>
  );
}

export default App;
