import React from 'react';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';

import ProductListContainer from './components/ProductListContainer/ProductListContainer';
import ProductDetailContainer from './components/ProductDetailContainer/ProductDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Home/>
        <Routes>
      
          <Route path="/contact" element={<Contact />} />
          <Route path="/categoria/:idCategoria" element={<ProductListContainer />} />
          <Route path="/itemcard/:idItemcard" element={<ProductDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
