import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
import PodcastCard from '../components/PodcastCard/PodcastCard';

const CategoriesPage = () => {
    const {cat}=useParams()

    const [Podcasts, setPodcasts]=useState();           //to store podcast data

    useEffect(()=>{                 //use of useeffect: to perform side effects in function components, such as updating the DOM, fetching data, or setting up event listeners and useto get data from backend axios fetch api is used
        const fetch=async()=>{
            const res=await axios.get(`https://audio-podcaster-backend.onrender.com/api/v1/category/${cat}`,{
              withCredentials:true
            })     //add-podcast m post use kiye the xios k saath kyuki wha data frontend m daal k backend m bhej rhe the yha uss data ko backend se lana h.
            setPodcasts(res.data.data);    
        }
        fetch();
    },[])


  return (
    <div className='px-4 py-2 lg:px-12'>
      <h1 className='text-xl font-semibold'>{cat}</h1>
      <div className="w-full my-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/**if podcast array is not empty then map each item(podcast) of the array to a podcastCard component*/}
        {Podcasts && 
            Podcasts.length>=0 &&
            Podcasts.map((items,i)=>(  
                <div key={i}>               {/**here key is used to uniquely identify each podcastcard*/}
                    <PodcastCard items={items}/>{" "}
                </div>
            ))}
            {Podcasts && 
            Podcasts.length===0 && (
                <div className="text-3xl font-bold h-screen flex items-center justify-center">
                    {" "}
                    No Podcasts Right now{" "}
                </div>
            )}
      </div>
    </div>
  )
}

export default CategoriesPage
