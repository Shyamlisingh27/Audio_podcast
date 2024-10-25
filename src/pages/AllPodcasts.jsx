
import React, { useEffect, useState } from 'react'
import axios from 'axios'           //to bring data of all podcasts added from backend.
import PodcastCard from '../components/PodcastCard/PodcastCard';

const AllPodcasts = () => {
    const [Podcasts, setPodcasts]=useState();           //to store podcast data

    useEffect(()=>{                 //use of useeffect: to perform side effects in function components, such as updating the DOM, fetching data, or setting up event listeners and useto get data from backend axios fetch api is used
        const fetch=async()=>{
            const res=await axios.get("http://localhost:8000/api/v1/get-podcast")     //add-podcast m post use kiye the xios k saath kyuki wha data frontend m daal k backend m bhej rhe the yha uss data ko backend se lana h.
            setPodcasts(res.data.data);
            
        
        }
        fetch();
    },[])


  return (
    <div>
      <div className="w-full px-4 lg:px-12 py-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
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

export default AllPodcasts
