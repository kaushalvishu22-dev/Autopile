import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar'
import Home from './Pages/Home/Home';
import Shop from "./Pages/Shop/Shop";
import Premium from "./Pages/Premium/Premium";
import Footer from './Components/Footer';
import Product from'./Pages/Shop/Product';
import { CartProvider } from "./Context/Context";
import { Router } from 'react-router-dom';


function App() {
  return(
    <>
<CartProvider>
   <Navbar/>
    <Routes>
 <Route path="/" element={<Home/>} />
 <Route path="/shop" element={<Shop/>} /> 
 <Route path="/premium" element={<Premium/>} /> 
 <Route path="/Product/:id" element={<Product />} />
  
  
    
    </Routes>
   
   <Footer/>
   </CartProvider>
  </>
  );
}
export default App;