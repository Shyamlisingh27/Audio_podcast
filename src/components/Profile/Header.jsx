import React,{useEffect, useState} from 'react'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/auth';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  //use of useState hook
  //get user data from api user authmiddleware and add the data in header
  const [UserData, setUserData] = useState();   //userdata initialized by empty so that when no one is loged in then header does not show any name and email


  //use of useDispatch hook
  //ye logout hone k baad application ka state poora change krne kliye.
  const dispatch=useDispatch();


  //use of useNavigate hook
  //to redirect to home page.
  const navigate=useNavigate();


  //use of useEffect hook
  useEffect(()=>{
    const fetchUserDetails=async()=>{
      const res=await axios.get("http://localhost:8000/api/v1/user-details",
        {withCredentials:true}
      )
      //console.log(res);
      setUserData(res.data.user)    //it will update UserDate with console m jo res k andar data k andaer user details aya h api /user-details se
    }
    fetchUserDetails();
  },[]);

  const LogoutHandler=async()=>{
      const res=await axios.post("http://localhost:8000/api/v1/logout",{
        withCredentials:true
      })
      console.log(res);
      dispatch(authActions.logout())      //logout functionality created in auth.js redux.
      navigate("/")
  }
  
  return (
    //check kro ki agr userdata h tbb hi header dikhega wrna blank
    <>{UserData && (
      <div className='bg-green-900 rounded py-8 flex flex-col md:flex-row items-center justify-center gap-4 md:justify-between px-12'>
      <div className='flex flex-col items-center md:items-start'>
        <p className='text-zinc-300'>Profile</p>
        <h1 className='text-3xl md:text-4xl lg:text-5xl text-zinc-100 font-bold text-center'>{UserData.username}</h1>
        <p className='text-zinc-300 mt-1'>{UserData.email}</p>
      </div>
      <div>
        <button className='bg-white px-4 py-2 rounded text-zinc-800 font-semibold hover:shadow-xl transition-all duration-300'
        onClick={LogoutHandler}>Log Out</button>
      </div>
    </div>
    )}
    </>

  )
}

export default Header
