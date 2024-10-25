import React, {useState} from 'react'
import { Link, useNavigate} from 'react-router-dom'
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';   //used to show error in response in server as alert
import 'react-toastify/dist/ReactToastify.css';   //css of toastify
import { useSelector } from 'react-redux';
import ErrorPage from './ErrorPage';

const Signup = () => {
  const isLoggedIn=useSelector((state)=>state.auth.isLoggedIn)
  const navigate=useNavigate();

  {/**usestate is hook function ...values is state variable...and setvalues is function to update values */}
  const [Values,setValues]=useState({   
      username:"",            //these are name entered in input tags of form
      email:"",
      password:"",
  });
  const change=(e)=>{   /**e is event...like when signup button is clicked then name and value of each input tags of form is taken */
    const {name,value}=e.target;
    /**when event happens then values array is updated by whatever values 
     * like username email were entered b4r and then new value that is being enetered in signup form...
     * the name key ka value of input tags of form is updated by value key ka value of the input tags of form.  */
    setValues({...Values,[name]:value})   
  }
  const handleSubmit=async()=>{
    try{
      const res=await axios.post(
        "https://audio-podcaster-backend.onrender.com/api/v1/signup",    //Api endpoint (url) to which request is sent and data is sent
         Values     //object containing form data entered by user while submitting signup form, this data is then sent to server through this API request.
      );
      //toast.success(res.data.message);      //shows alert with success msg that account created
      navigate("/login")    //account create ho jane k baad login page p direct krr dena chaiye.
    }catch (error) {
      // Check if error response exists before accessing `error.response.data.message`
      if (error.response && error.response.data) {
        toast.error(error.response.data.message); // Display the error message from the server
      } else {
        // Handle errors that don't have a response (e.g., network errors)
        toast.error("Something went wrong. Please try again.");
        console.error(error); // Log the error for debugging
      }
    }
  }
  return (
    
    /**agr logged in h to login page ni dikhna chaiye /login route p jaane p...agr ni h loggedin tbb login page and functionalities dikhega */
    //ternary operator being used
    <>{isLoggedIn ? <ErrorPage/> : <div className='h-screen bg-green-100 flex items-center justify-center'>
      <ToastContainer position="top-center" draggable/>

      <div className="w-4/6 md:w-3/6 lg:w-2/6 flex flex-col items-center justify-center">
        <Link to="/"
        className="text-2xl font-bold">PODCASTER       {/**iss link p click krne p home page p chale jana chaiye */}
        </Link>
        {/**signup form */}
        <div className="mt-6 w-full">
          <div className="w-full flex flex-col">
            <label htmlFor="">Username</label>
            <input 
              type="text" 
              className="mt-2 px-2 py-2 rounded outline-none border border-black" 
              required
              placeholder='Username'
              name='username'
              value={Values.username}
              onChange={change}
            />
          </div>
          <div className="mt-2 w-full flex flex-col">
            <label htmlFor="">Email</label>
            <input 
              type="email" 
              className="mt-2 px-2 py-2 rounded outline-none border border-black" 
              required
              placeholder='Email'
              name='email'
              value={Values.email}
              onChange={change}     //event onChange...means we are calling function change when something is changing
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
              onClick={handleSubmit}  //event handler
            >Signup</button>
          </div>
          <div className="mt-4 w-full flex flex-col">
            <p className="text-center">
              Already have an account?{" "}
              <Link 
                to="/login"
                className="font-semibold hover:text-blue-700">
                Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
    }</>
    
  )
}

export default Signup
