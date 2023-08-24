import {Routes,Route} from 'react-router-dom';
import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import {Navbar} from './components/Navbar';
import { Shop } from './pages/shop/Shop';
import { Cart } from './pages/cart/Cart';





function App() {
  return (
   <>
    <Navbar/>
   <Routes>
    <Route path='/' element={<Shop/>}/>
      <Route path='/cart' element={<Cart/>}/>
   </Routes>
   </>
  );
}


export default App;
