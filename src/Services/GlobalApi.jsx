import axios from "axios"

const key="3451cbf76be6444ba20cab7f58248ecd"
const axiosCreate=axios.create({
  baseURL:'https://api.rawg.io/api'
})

const getGenreList=axiosCreate.get('/genres?key='+key)
const getAllGames=axiosCreate.get('/games?key='+key)
const getGameListByGenreId=(id)=>axiosCreate.get('/games?key='+key+'&genres='+id)

export default{
  getGenreList,
  getAllGames,
  getGameListByGenreId
}