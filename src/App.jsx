import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Main from "./pages/main";
import Cart from "./pages/cart";
import Contacts from "./pages/contacts";
import CartProvider from "./context/cartContext";
import Footer from "./components/footer";

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="*" element={<h1>404 Page Not Found</h1>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
