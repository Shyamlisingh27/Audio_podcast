import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { IoReorderThreeOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";      //khi se bhi kch utha k laa skte hain(select krr k)

const Navbar = () => {
  const isLoggedIn = useSelector((state)=>state.auth.isLoggedIn)
  
  
  const [MobileNav, setMobileNav]=useState(false);

  const navLinks=[    //array of objects containing link itemps with properties like name and path
    {
      name: "Home",
      path:"/",
    },
    {
      name:"Categories",
      path:"/categories",
    },
    {
      name:"All Podcasts",
      path:"/all-podcasts",
    },
    
  ];
  return (
    <nav className="px-4 md:px-8 lg:px-12 py-2 relative z-50">  {/* Added z-50 to make sure it's on top */}{/**md means medium size screen, lg means large size screen*/}
      {/** desktop view*/}
      <div className="flex items-center justify-between">
        <div className="logo brand-name w-2/6 flex items-center gap-4">
        <img src="https://cdn-icons-png.flaticon.com/128/9043/9043096.png" alt="podcast" className="h-12"/>
       
          <Link to="/" className="text-2xl font-bold">Podcaster</Link>
        </div>
        <div className="hidden w-2/6 lg:flex items-center justify-center">
          {navLinks.map((items,i)=>(
            <Link key={i}
            to={items.path}
            className="ms-4 hover:font-semibold transition-all duration-300"
            >                 {/**ms means margin start*/}
            {items.name}</Link>
          ))}
          
        </div>
        <div className="hidden w-2/6 lg:flex items-center justify-end">       {/**for login and signup buttons */}
          
          {/**agr logged in ni h to login aur signup dono button dikhayega*/}
          {!isLoggedIn && (<>
            <Link className="px-6 py-3 border border-black rounded-full" to="/login">Login</Link>
            <Link className="ms-4 px-6 py-3 bg-black text-white rounded-full" to="/signup">Signup</Link>
          </>)}

            {/**agr logged in h to profile button dikhayega login aur signup ka ni*/}
          {isLoggedIn && <Link
           className="ms-4 px-6 py-3 bg-black text-white rounded-full" 
           to="/profile">
            Profile</Link>
          }
        </div>

        <div className='w-4/6 flex items-center justify-end lg:hidden z-50'>
          <button className='text-4xl' onClick={()=>setMobileNav(!MobileNav)}>
            <IoReorderThreeOutline />
          </button>
        </div>
      </div>

      {/** for responsiveness..for mobile view*/}
<div className={`fixed top-0 left-0 w-full h-screen bg-blue-100 
  ${MobileNav ? "translate-y-[0%]" : "translate-y-[-100%] invisible"} transition-transform duration-300`}>    {/**invisible ho jana chaiye desktop view m....so invisible word daalna jaroori tha...aur desktop view m relative daalna jaroori h */}
      
  <div className='p-8 flex items-center justify-end'>
    <button 
      onClick={() => setMobileNav(!MobileNav)}
      className="bg-black text-white rounded-full p-2"
    >
      <RxCross2 />
    </button>
  </div>
  
  <div className='h-full flex flex-col items-center justify-center'>
    {navLinks.map((items, i) => (
      <Link key={i}
        to={items.path}
        className="mb-6 text-2xl hover:font-semibold transition-all duration-300"
      >
        {items.name}
      </Link>
    ))}

    <Link 
      to="/login"
      className="mb-6 text-2xl hover:font-semibold transition-all duration-300"
    >                 
      Login
    </Link>
    <Link 
      to="/signup"
      className="mb-6 text-2xl hover:font-semibold transition-all duration-300"
    >                 
      Signup
    </Link>

  </div>
</div>

    </nav>
  )
}

export default Navbar
