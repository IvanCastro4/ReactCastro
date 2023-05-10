import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'



function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path='/' element={<ItemListContainer greeting='Listado todos los productos'/>}/>
            <Route exact path='/category/:categoryId' element={<ItemListContainer greeting='Listado filtrado'/>} />
            <Route exact path='/detail/:itemId' element={<ItemDetailContainer />} />
            <Route exact path='*' element={<h1>404 NOT FOUND</h1>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
