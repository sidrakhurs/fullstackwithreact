import React from 'react';
import './App.css';
import Home from './Pages/Home';
import { BrowserRouter,Route,Router,Routes } from 'react-router-dom';
import About from './Pages/About';
import Signein from './Pages/Signein';
import Signeup from './Pages/Signeup';
import Profile from './Pages/Profile';
const App = () => {
  
  return (
 <BrowserRouter>
 <Routes>
  <Route path='/' element={<Home />}/>
  <Route path='/about' element={<About />}/>
  <Route path=' /signein' element={<Signein />}/>
  <Route path=' /signeup' element={<Signeup />}/>
  <Route path=' /profile' element={<Profile />}/>
 </Routes>
 </BrowserRouter>
  );
};

export default App;
