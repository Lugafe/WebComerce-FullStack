import './App.css';
import  Navbar  from './Components/Nav/Navbar.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import  Category  from './Pages/Category.jsx';
import  Shop  from './Pages/Shop.jsx';
import  Product  from './Pages/Product.jsx';
import  Cart  from './Pages/Cart.jsx';
import  LogSin  from './Pages/LogSin.jsx';
import Footer from './Components/Footer/Footer.jsx';
import men_banner from './Components/Assets/banner_mens.png'
import kid_banner from './Components/Assets/banner_kids.png'
import women_banner from './Components/Assets/banner_women.png'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element = {<Shop/>}></Route>
        <Route path='/mens' element = {<Category banner={men_banner} category="men"/>}></Route>
        <Route path='/womens' element = {<Category banner={women_banner} category="women"/>}></Route>
        <Route path='/kids' element = {<Category banner={kid_banner}category="kids"/>}></Route>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>    
        </Route>
        <Route path='/cart' element = {<Cart/>}/>
        <Route path='/LogSin' element = {<LogSin/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
