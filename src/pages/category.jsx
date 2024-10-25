import React from 'react'
import { Link } from 'react-router-dom';

const category = () => {
  const cat=[
    {
        name: "Comedy",
        color:"bg-purple-200",
        to:"/categories/Comedy",
        img:"https://dynamic.brandcrowd.com/template/preview/design/b8c5e34f-9326-4bb3-91cd-3d51eb761768/1dabe2fa-fc54-4737-9cd1-a8bf1ff05a40?v=4&designTemplateVersion=1&logoTemplateVersion=3&size=design-preview-standalone-1x",
    },
    {
        name: "Sports",
        color:"bg-green-200",
        to:"/categories/Sports",
        img:"https://static01.nyt.com/images/2019/10/20/arts/20SportsPodcasts/20SportsPodcasts-superJumbo.jpg",
    },
    {
        name: "Thrill",
        color:"bg-red-200",
        to:"/categories/Thrill",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNnap5sOYpQALGo7QZaR5V0Zi17ZQdaSrZMQ&s",
    },
    {
        name: "Health",
        color:"bg-zinc-200",
        to:"/categories/Health",
        img:"https://media.istockphoto.com/id/1338285757/vector/medical-podcast-icon-design-stethoscope-and-microphone-illustration-symbol.jpg?s=612x612&w=0&k=20&c=jgBdTkN3zszv1ZJ7zjrxVs5Q7ePAUXBI5Q6wCiU3KGU=",
    },
    {
        name: "Government",
        color:"bg-indigo-200",
        to:"/categories/Government",
        img:"https://cdn.prod.website-files.com/600b1614640e1d81c9c0130a/66f584f7936265ab52e846db_GVP%20Ep%2012%20Open%20Graph-p-1080.png",
    },
  ];
  return (
    <div className="h-screen lg:h-[78vh]">
        <div className="px-4 lg:px-12 py-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/**designing each category div box */}
            {cat.map((items,i)=>(       
                <Link 
                    to={items.to} 
                    key={i}
                    className={` rounded px-8 py-4 text-xl font-semibold ${items.color} hover:scale-105 shadow-xl transition-all duration-300 relative h-[25vh] overflow-hidden z-10`}
                >
                    <div>{items.name}</div>
                    <div className='w-[100%] flex items-center justify-end absolute -bottom-2 -right-2'>
                        <img 
                            src={items.img} 
                            alt='category'
                            className='rounded rotate-12 h-[16vh] md:h-[17vh] lg:h-[16vh]'
                        />
                    </div>
                </Link>
            ))}
        </div>
    </div>

  );
}

export default category
