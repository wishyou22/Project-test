
import './App.css';
import { Routes, Route} from 'react-router-dom';
import ProductPage from './Pages/Product';
import ProductDetailsPage from './Pages/ProductDetails';
import { products } from './Data';





const App = () => {
  return (
   <div><Routes>
      <Route path="/" element={<ProductPage products={products} />} />
      <Route path="/product/:id" element={<ProductDetailsPage  products={products} />} />
    </Routes>
     </div>



  );
};

export default App;

