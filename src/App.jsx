
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Navbar from './components/Navbar/Navbar';
import ProductListContainer from './components/ProductListContainer/ProductListContainer';
import ProductDetailContainer from './components/ProductDetailContainer/ProductDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import ProductsSection from './components/ProductsSection/ProductsSection';
 import {CarritoProvider} from './context/CarritoContex'
 
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';



const App = () => {
  
  return (
    <>
    <CarritoProvider>
      <BrowserRouter>
    
     <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/contact" element={<Contact />} />
          <Route path="/categoria/:idCategoria" element={<ProductListContainer />} />
          <Route path="/productos" element={<ProductsSection />} />
          <Route path='/cart' element = {<Cart/>} />
          <Route path='/checkout' element = {<Checkout/>}/>
          <Route path="/item/:idItem" element={<ProductDetailContainer />} />
          
        </Routes>
        <Footer/>
       
      </BrowserRouter>
      </CarritoProvider>
    </>
  );

      
   }


export default App;
