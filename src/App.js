import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Shop from "./pages/shop/Shop";
import Products from "./pages/products/Products";
import Wishlist from "./pages/wishlist/Wishlist";
import Cart from "./pages/cart/Cart";
import NavSidebar from "./components/navbar/NavSidebar";
import SingleProduct from "./pages/singleProduct/SingleProduct";
import SearchBar from "./components/searchBar/SearchBar";

function App() {
  return (
    <div>
      <Navbar />
      <NavSidebar/>
      <SearchBar/>
      <div className="page">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/shop" element={<Shop />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/wishlist" element={<Wishlist />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/products/:id" element={<SingleProduct/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
