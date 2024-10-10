import React, { useEffect,useState } from 'react'
import GenreList from '../components/GenreList'
import GlobalApi from '../Services/GlobalApi'
import Banner from '../components/Banner'
import TrendingGames from '../components/TrendingGames'
import GamesByGenresId from '../components/GamesByGenresId'

const Home = () => {
 const [allGameList, setAllGameList] = useState([])
 const [gameListByGenres, setGameListByGenres] = useState([])
 const [name, setName] = useState('Action')
  useEffect(()=>{
    getAllGamesList();
    getGameListByGenresId(4);
  },[])

  const getAllGamesList=()=>{
    GlobalApi.getAllGames.then((resp)=>{
      console.log(resp.data.results);
      setAllGameList(resp.data.results)
     
    })
  }

  const getGameListByGenresId=(id)=>{
  GlobalApi.getGameListByGenreId(id).then((resp)=>{
    console.log("Games::",resp.data.results)
    setGameListByGenres(resp.data.results)
  })
  }
   
  

  return (
    <div className='grid grid-cols-4 px-5'>
     <div className="  hidden md:h-[100vh] md:overflow-y-scroll md:block ">
      {/* first prop is passed from child to parent i.e., from GenreList.jsx to Home.jsx */}
      <GenreList genereId={(genereId)=>getGameListByGenresId(genereId)} 
      name={(name)=>setName(name)}/>
     </div> 
     <div className=" h-[100vh] overflow-y-scroll col-span-4 md:col-span-3 ml-2 ">
      {allGameList.length>0 && gameListByGenres.length>0 ?

      <div>
        {/* gameBanner is no more is used ( in updated version)  */}
      <Banner gameBanner={allGameList[0]} 
      firstGame={gameListByGenres[Math.floor(Math.random()*gameListByGenres.length)]}/>
      <TrendingGames gameList={allGameList}/>
      <GamesByGenresId gameList={gameListByGenres} name={name}/>
      </div>

      :null}
     </div>
    </div>
  )
}

export default Home
