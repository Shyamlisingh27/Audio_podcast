//isme saare navbar, podcast saare sevices ka design layout

import React from 'react'
import Navbar from "../components/Navbar/Navbar";
import {Outlet} from "react-router-dom";
import AudioPlayer from '../components/AudioPlayer/AudioPlayer';

function MainLayout() {
  return (
    <div className='realtive'>
      <Navbar/>
      <main>
        <Outlet/>     {/**outlet will handle navigations of navbar...it will not be handled by app.jsx*/}
      </main>
      <div className='w-full'>
        <AudioPlayer/>
      </div>
    </div>
  )
}

export default MainLayout
