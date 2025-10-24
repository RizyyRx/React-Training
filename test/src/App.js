import ButtonComponent from './ButtonComponent';
import './App.css';
import SearchBar from './SearchBar';
import LabelComponent from './LabelComponent';
import Login from './Login';
import Product from './Product';
import MoveOn from './MoveOn';
import UserProfile from './UserProfile';
import Photos from './Photos';
import FPhotos from './Fphotos';
import Flowers from './Flowers';
import Home from './Home';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './Nav';
import UserCompleteRecord from './UserCompleteRecord';
// 
function App() {
  return (
    <div>
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/photo' element={<Photos/>}/>
        <Route path='/user' element={<UserProfile/>}>
          <Route path=':id' element={<UserCompleteRecord/>}/>
        </Route>
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
