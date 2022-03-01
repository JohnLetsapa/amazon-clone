import React from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Checkout from './components/Checkout/Checkout'

function App() {
  return (
    
      <div className="app">
        <Header />
          <Routes>
            <Route path='login' element={<h1>Login Page</h1>} />
            <Route path='/' element={ <Home /> } />
            <Route path='checkout' element={ <Checkout /> } />
          </Routes>
      </div>
  
  );
}

export default App;
