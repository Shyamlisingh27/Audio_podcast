import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { playerActions } from '../../store/player'

const PodcastCard = ({items}) => {
    const dispatch=useDispatch()
    const isLoggedIn=useSelector((state)=>state.auth.isLoggedIn)
    const handlePlay=(e)=>{
        if(isLoggedIn){
            e.preventDefault()
            dispatch(playerActions.setDiv())
            dispatch(
                playerActions.changeImage(`http://localhost:8000/${items.frontImage}`)
            )
            dispatch(
                playerActions.changeSong(`http://localhost:8000/${items.audioFile}`)
            )
        }
    }
  return (
    
    <div>
        {/**har podcast ek card k andar hoga jo ki ek link k form m hoga uss card p click krte uss podcast ka info(description page) open hoga */}
        <Link 
            to={`/description/${items._id}`}
            className='border p-4 rounded flex flex-col shadow-xl hover:shadow-2xl transition-all duration-300'
        >
            <div>
                <img 
                    src={`http://localhost:8000/${items.frontImage}`}
                    className='rounded size-[42vh] object-cover'
                />
            </div>
            <div className="mt-2 text-xl font-bold">
                {items.title.slice(0,20)}   {/**item title is a string use slice to show from 0 to 20th character...The slice() method returns selected elements in an array, as a new array. The slice() method selects from a given start, up to a (not inclusive) given end*/}
            </div>
            <div className="mt-2 leading-5 text-slate-500">
                {items.description.slice(0,50)}
            </div>
            <div className="mt-2 bg-orange-100 text-orange-700 border border-orange-700 rounded-full px-4 py-2 text-center">
                {items.category.categoryName}
            </div>
            <div className='mt-2'>
{/**if user is logged in then play the audio elese send to login page*/}
    
                <Link 
                    to={isLoggedIn ?"#": "/signup"}      
                    className='bg-green-900 text-white px-4 py-2 rounded mt-2 flex items-center justify-center hover:bg-greem-800 transition-all duration-300'
                    onClick={handlePlay}    //agr loggedin h to usko player.js redux store m jo dispatch actions hain changeImage aur changeSong ye dono mil jana chaiye
                >Play Now</Link>
            </div>
        </Link>
    </div>
  )
}

export default PodcastCard
