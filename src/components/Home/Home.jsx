import React from 'react'
import Navbar from '../Navbar/Navbar';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import ProductList from '../ProductList/ProductList';



const Home = () => {
  return (
    <div>
     <Navbar/>
     <Main/>
     <ProductList/>
     <Footer/> 
    </div>
  )
}

export default Home