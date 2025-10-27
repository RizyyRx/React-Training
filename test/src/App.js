import ButtonComponent from './ButtonComponent';
import './App.css';
import SearchBar from './SearchBar';
import LabelComponent from './LabelComponent';
import Login from './Login';
import MoveOn from './MoveOn';
import FPhotos from './Fphotos';
import Flowers from './Flowers';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './Nav';
import UserCompleteRecord from './UserCompleteRecord';
import PageNotFound from './PageNotFound';
import SignIn from './SignIn';
import PrivateRoute from './PrivateRoute';
import { lazy, Suspense } from 'react';
import UnCClass from './UnCClass';
import UnCFunctional from './UnCFunctional';
import Feedback from './Feedback';
import CoursePage from './CoursePage';

const Home=lazy(()=>import("./Home"));
const Product=lazy(()=>import("./Product"));
const Photos=lazy(()=>import("./Photos"));
const UserProfile=lazy(()=>import("./UserProfile"));

// 
function App() {
  return (
    <div>
      {/* <BrowserRouter>
      <Nav/>
      <Suspense fallback={<div style={{textAlign:"center"}}>Loading....</div>}/>
      <Routes>
        <Route path='/' element={<SignIn/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/photo' element={<Photos/>}/>
        <Route path='/user' element={<PrivateRoute><UserProfile/></PrivateRoute>}>
          <Route path=':id' element={<UserCompleteRecord/>}/>
        </Route>
        <Route path='*' element={<PageNotFound/>}/>
        
      </Routes>
      </BrowserRouter> */}
      {/* <UnCClass/> */}
      {/* <UnCFunctional/>
      <Feedback/> */}
      <CoursePage/>
    </div>
  );
}

export default App;
