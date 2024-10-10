import React from 'react'
import { useEffect } from 'react'

const TrendingGames = ({gameList}) => {
  useEffect(() => {
    console.log(gameList)
  }, [])
  
  return (
    <>
    <div className='mt-6 py-2'>
      <h1 className=' hidden font-bold text-[30px] dark:text-white md:block'>
        Trending Games
      </h1>
    </div>
    <div className='hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-3 mb-3 '>
      {gameList.map((item,index)=> index<4 && (
        <div className='bg-[#76a8f756] rounded-xl group
     hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer mx-1 my-3'> 
           <img src={item.background_image} className='h-[250px] rounded-lg object-cover '></img>
           <h2 className='dark:text-white text-[20px] font-bold px-2'>{item.name}</h2>
        </div>
      ))}
    </div>
    </>
  )
}

export default TrendingGames
