import "./App.css";
import ConnectPage from "./pages/Connect";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Offering from "./pages/Offering";
import Discover from "./pages/Discover";
import "./index.css"
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products-details/:id" element={<Offering />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/contact" element={<ConnectPage />} />
        <Route path="/products" element={<ProductDetails />} />
        {/* <Route path="/offering" element={<offering/>} /> */}
      </Routes>
    </Router>
  );
}

export default App;
