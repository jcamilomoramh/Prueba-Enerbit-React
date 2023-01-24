import React from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import logo from './assets/imgs/logo-enerbit.png';
import './assets/css/App.css';
import Auth from './aut';
import Crud from './components/Crud'
function App() {
  
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={
    <div class="login">
        <img src={logo} className="App-logo" alt="logo" />
        <input type="text" id="username" placeholder="USERNAME" required/> 
        <input type="password" id="password" placeholder="PASSWORD" required/>
        <button onClick={Auth}>login</button>
    </div>}/>
    <Route path='/crud' element={<Crud/>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
