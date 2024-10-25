//jbb profile page p user aa jaye after login then login aur signup buttons hta dena h profile page k navbar se
import React from 'react'
import {useSelector} from "react-redux"
import Header from '../components/Profile/Header'
import YourPodcasts from '../components/Profile/YourPodcasts'
import ErrorPage from './ErrorPage'

const profile = () => {
  const isLoggedIn=useSelector((state)=>state.auth.isLoggedIn)
  return (
    <div>
      {isLoggedIn?
      <>(
        <Header/>
        <YourPodcasts/>
      )
      </>:<ErrorPage/>}
    </div>
  )
}

export default profile
