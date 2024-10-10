import React from 'react'
import { useEffect } from 'react'

const banner = ({gameBanner,firstGame}) => {
  useEffect(()=>{
    console.log(gameBanner)
  })
  return (
    <div className='relative p-2' >
      <div className='absolute bottom-0 p-4 bg-gradient-to-t from-slate-900 to-transparent w-[90%]' >
        <h2 className='text-[#fff] font-bold text-[25px] '>{firstGame.name}</h2>
        <button className='text-white bg-blue-600 px-2 py-1 hover:scale-110 transition-all ease-in-out duration-200'>Get Now</button>
        </div>
      <img src={firstGame.background_image} className='md:h-[320px] w-[98%] object-cover rounded-2xl '></img>
    </div>
  )
}

export default banner
