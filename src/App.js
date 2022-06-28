import { Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import ProductDetail from './components/ProductDetail';
import Products from './components/Products';
import "react-loading-skeleton/dist/skeleton.css";
import Cart from './components/Cart';
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/products/:id" element={<ProductDetail />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
