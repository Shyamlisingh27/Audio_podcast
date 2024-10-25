import React, {useState} from 'react'
import { Link, useNavigate} from 'react-router-dom'
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';   //used to show error in response in server as alert
import 'react-toastify/dist/ReactToastify.css';   //css of toastify
import { useDispatch } from 'react-redux';    //to change state of redux
import { authActions } from '../store/auth';
import { useSelector } from 'react-redux';
import ErrorPage from './ErrorPage';

const login = () => {
  const isLoggedIn=useSelector((state)=>state.auth.isLoggedIn)
  const dipatch=useDispatch()
  const navigate=useNavigate();

  const [Values,setValues]=useState({
    email:"",
    password:"",
  });

  const change=(e)=>{
    const {name,value}=e.target;
    setValues({...Values,[name]:value})
  }

  const handleSubmit=async()=>{
    try{
      const res=await axios.post(
        "https://audio-podcaster-backend.onrender.com/api/v1/login",
        Values,
        {withCredentials:true}
      )
      dipatch(authActions.login())
      //console.log(res.data);
      
      navigate("/profile")
    }
    catch(error){
      toast.error(error.response.data.message)
    }
  }
  return (

    /**agr logged in h to login page ni dikhna chaiye /login route p jaane p...agr ni h loggedin tbb login page and functionalities dikhega */
    //ternary operator being used
    <>{isLoggedIn ? <ErrorPage/> :  
        <div className='h-screen bg-green-100 flex items-center justify-center'>
      <ToastContainer position="top-center" draggable/>

      <div className="w-4/6 md:w-3/6 lg:w-2/6 flex flex-col items-center justify-center">
        <Link to="/"
        className="text-2xl font-bold">PODCASTER       {/**iss link p click krne p home page p chale jana chaiye */}
        </Link>
        {/**login form */}
        <div className="mt-6 w-full">
          
          <div className="mt-2 w-full flex flex-col">
            <label htmlFor="">Email</label>
            <input 
              type="email" 
              className="mt-2 px-2 py-2 rounded outline-none border border-black" 
              required
              placeholder='Email'
              name='email'
              value={Values.email}
              onChange={change}
            />
          </div>
          <div className="mt-2 w-full flex flex-col">
            <label htmlFor="">Password</label>
            <input 
              type="password" 
              className="mt-2 px-2 py-2 rounded outline-none border border-black" 
              required
              placeholder='Password'
              name='password'
              value={Values.password}
              onChange={change}
            />
          </div>
          <div className="mt-4 w-full flex flex-col">
            <button 
              className="bg-green-800 font-semibold text-xl text-white rounded py-2"
              onClick={handleSubmit}
            >Login</button>
          </div>
          <div className="mt-4 w-full flex flex-col">
            <p className="text-center">
              Don't have an account?{" "}
              <Link 
                to="/signup"
                className="font-semibold hover:text-blue-700">
                Signup</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
    }</>
    
  )
}

export default login
