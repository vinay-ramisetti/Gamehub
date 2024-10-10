import React from 'react'
import { useEffect } from 'react'

const GamesByGenresId = ({gameList,name}) => {
  useEffect(() => {
    console.log("Game List",gameList)
  }, [])
  
  return (
    <>
    <div>
      <h2 className='font-bold text-[30px] dark:text-white mt-5'>
        {name} Games
      </h2>
      </div>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5 px-2'>
      {gameList.map((item)=>(
        <div className='bg-gray-400 px-3 py-2 rounded-lg pb-8 hover:scale-110 transition-all ease-in-out duration-300 cursor-pointer'>
          <img src={item.background_image} className='w-full h-[78%] rounded-lg object-cover'></img>
          <h2 className='text-[16px] text-white font-bold'>{item.name} 
            <span className="bg-green-400 text-black rounded-sm font-medium text-[10px]  m-1 p-1">{item.metacritic}</span></h2>
          <h2>⭐{item.rating} 💬{item.reviews_count} 🔥{item.suggestions_count}</h2>
        </div>
      ))}
    </div>
    </>
  )
}

export default GamesByGenresId
