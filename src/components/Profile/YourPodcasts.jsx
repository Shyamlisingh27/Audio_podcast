
import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import PodcastCard from '../PodcastCard/PodcastCard';

const YourPodcasts = () => {
  const [Podcasts, setPodcasts]=useState();           //to store podcast data

    useEffect(()=>{                 //use of useeffect: to perform side effects in function components, such as updating the DOM, fetching data, or setting up event listeners and useto get data from backend axios fetch api is used
        const fetch=async()=>{
            const res=await axios.get("https://audio-podcaster-backend.onrender.com/api/v1/get-user-podcast",{
              withCredentials:true
            })     //add-podcast m post use kiye the xios k saath kyuki wha data frontend m daal k backend m bhej rhe the yha uss data ko backend se lana h.
            setPodcasts(res.data.data);    
        }
        fetch();
    },[])

  return (
    <div className='px-4 lg:px-12 my-4'>
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-xl font-semibold md:font-bold">Your Podcasts</h1>
        <Link           //add podcast button
            to="/add-podcast"
            className="px-4 py-2 bg-zinc-800 text-white rounded font-semibold"
        >
        Add Podcast
        </Link>
      </div>
      <div className="w-full my-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/**if podcast array is not empty then map each item(podcast) of the array to a podcastCard component*/}
        {Podcasts && 
            Podcasts.map((items,i)=>(  
                <div key={i}>               {/**here key is used to uniquely identify each podcastcard*/}
                    <PodcastCard items={items}/>{" "}
                </div>
            ))}
      </div>
    </div>
  )
}

export default YourPodcasts
