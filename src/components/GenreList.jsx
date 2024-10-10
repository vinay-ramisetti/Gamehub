import React from 'react'
import GlobalApi from '../Services/GlobalApi'
import { useEffect,useState } from 'react'

const GenreList = ({genereId,name}) => {
  const [genreList, setGenreList] = useState([])
  // activeIndex is for selecting purpose ..
  const [activeIndex, setActiveIndex] = useState(-1)
useEffect(() => {
  getGenreList();
}, [])

  const getGenreList=()=>{
    GlobalApi.getGenreList.then((resp)=>{
      console.log(resp.data.results);
      setGenreList(resp.data.results);
    })
  }
  return (
    <div>
      <h2 className='text-[30px] font-bold dark:text-white px-2'>Genre</h2>
      <div className=''>
     {genreList.map((item,index)=>(

      <div  onClick={()=>{setActiveIndex(index);genereId(item.id);name(item.name)}} 

      className={`flex gap-3 items-center py-2 px-2 cursor-pointer hover:dark:bg-gray-500 rounded-lg hover:bg-gray-300 group ${activeIndex==index?'bg-gray-400':null}`}>
         <img src={item.image_background} 
         className={`w-[50px] h-[50px] object-cover rounded-lg group-hover:scale-110 transition-all ease-in-out ${activeIndex==index?'scale-110':null}`}>
         </img>
        <h2 className={`dark:text-white  group-hover:font-bold scale-110 transition-all ease-in-out  ${activeIndex==index?'font-bold':null}`}>
          {item.name}</h2>
      </div>
     ))}
      </div>
      </div>
  )
}

export default GenreList
