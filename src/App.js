import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Products from "./pages/products/Products";
import Wishlist from "./pages/wishlist/Wishlist";
import Cart from "./pages/cart/Cart";
import NavSidebar from "./components/navbar/NavSidebar";
import SingleProduct from "./pages/singleProduct/SingleProduct";
import SearchBar from "./components/searchBar/SearchBar";
import { useProductContext } from "./context/product_context";
import Footer from "./components/footer/Footer";
import Thanks from "./pages/thanks/Thanks";
import NotFound from "./pages/notFound/NotFound";
import Newsletter from "./components/newsletter/Newsletter";

function App() {
  const { showSearchBar }= useProductContext();
  return (
    <div className="app" style={ showSearchBar ? { height: '100vh', overflow: 'hidden'} : undefined }>
      <Navbar />
      <NavSidebar/>
      <SearchBar/>
      <div className="page">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/wishlist" element={<Wishlist />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/products/:id" element={<SingleProduct/>}/>
          <Route exact path="/thanks" element={<Thanks/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </div>
      <Newsletter/>
      <Footer/>
    </div>
  );
}

export default App;
