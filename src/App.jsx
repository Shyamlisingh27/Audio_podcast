import React from 'react'
import { BrowserRouter as Router,Routes,Route} from "react-router-dom"
import MainLayout from "./layout/MainLayout"
import Home from "./pages/Home"
import AuthLayout from './layout/AuthLayout'
import Signup from './pages/signup'
import Login from './pages/login'
import Categories from "./pages/category"
import Profile from "./pages/profile"
import AddPodcast from './pages/AddPodcast'
import {useEffect} from "react";  //
import axios from 'axios'
import { useDispatch } from 'react-redux'   //to change state of redux
import { authActions } from './store/auth'  //
import AllPodcasts from './pages/AllPodcasts'
import CategoriesPage from './pages/CategoriesPage'
import DescriptionPage from './pages/DescriptionPage'


const App = () => {
  const dispatch=useDispatch();

  useEffect(()=>{           //user aayega to check krega ki data available h ki ni
    const fetch=async()=>{
      try{
        const res=await axios.get(
          "http://localhost:8000/api/v1/check-cookie",
          {withCredentials:true}
        )
        if(res.data.message){
          dispatch(authActions.login());
          //helloooo
        }
      }
      catch(error){
        //console.log(error);
        
      }
    }
    fetch();
  }, []);
  return (
    <div className="">
      <Router>
        <Routes>  
           {/**main path will be / and element will target mainlayout.*/}
        {/**here all the routes are defined*/}
          <Route path="/" element={<MainLayout/>}>
            {" "}
            <Route index element={<Home/>}/>  {/*nested element is being used so thats why index element.*/ }
            <Route path='/categories' element={<Categories/>}/>         {/**can access categories.jsx in pages folder */}
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/add-podcast' element={<AddPodcast/>}/>
            <Route path='/all-podcasts' element={<AllPodcasts/>}/>
            <Route path='/categories/:cat' element={<CategoriesPage/>}/>
            <Route path='/description/:id' element={<DescriptionPage/>}/>
          </Route>
          <Route path="/" element={<AuthLayout/>}>
            <Route path="/signup" element={<Signup/>}/>     {/**forward route */}
            <Route path="/login" element={<Login/>}/>     {/**forward route */}
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
