import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from "./Componant/Navbar"
import AddProduct from './Componant/AddProduct';
import EditProduct from './Componant/EditProduct';
import Home from './Componant/Home';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/addProduct' element={<AddProduct />}></Route>
        <Route path='/editProduct/:id' element={<EditProduct />}></Route>
      </Routes>

    </>

  );
}

export default App;
