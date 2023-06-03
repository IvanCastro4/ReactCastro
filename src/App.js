import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/cart/Cart';
import  CartProvider from './context/cartContext';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <CartProvider>
          <NavBar />
          <Routes>
            <Route exact path='/' element={<ItemListContainer greeting='Listado todos los productos'/>}/>
            <Route exact path='/category/:categoryId' element={<ItemListContainer greeting='Listado filtrado'/>} />
            <Route exact path='/detail/:itemId' element={<ItemDetailContainer />} />
            <Route exact path='/cart' element={<Cart/>}/>
            <Route exact path='*' element={<h1>404 NOT FOUND</h1>} />
          </Routes>
          </CartProvider>
        </BrowserRouter>
    </div>
  );
}

export default App;
