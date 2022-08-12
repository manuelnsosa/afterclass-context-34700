import { React } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Profile from './components/Profile';
import PlantDetailContainer from './components/PlantDetailContainer';
import CartDetail from './components/CartDetail';
import CartContextProvider from './context/CartContext';
import './App.css';

function App() {
  return (
    <CartContextProvider>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/plant/:id' element={<PlantDetailContainer />} />
        <Route path='/cart' element={<CartDetail />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </CartContextProvider>
  );
}

export default App;
