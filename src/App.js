import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { ShopsPage, ShoppingCartPage } from "./pages";
import { Nav } from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/shop" element={<ShopsPage />} />
        <Route path="/shopping-cart" element={<ShoppingCartPage />} />
        <Route path="*" element={<Navigate to="/shop" replace />} />
      </Routes>
    </div>
  );
}

export default App;
