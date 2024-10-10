import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import logo1 from './../assets/Images/logo1.jpeg'
import { HiMagnifyingGlass } from "react-icons/hi2";
import { HiMiniSun } from "react-icons/hi2";
import { HiMoon } from "react-icons/hi2";
import { TfiMenu } from "react-icons/tfi";
import { ThemeContext } from '../context/ThemeContext';
const Header = () => {
  // toggle is not used..
  const [toggle, setToggle] = useState(false)
  const {theme,setTheme}=useContext(ThemeContext)

// useEffect(()=>{
//    console.log(theme)
// },[])
  return (
    <div class="flex  justify-evenly p-2">
      <TfiMenu className=' mx-1 my-2 md:hidden lg:hidden dark:text-white'  />
     <img src={logo1} width={45} height={20} class=" hidden md:block lg:block rounded-2xl " />
     <div class="flex bg-slate-200 p-3 w-[90%] items-center rounded-3xl ">
     <HiMagnifyingGlass />
      <input type="text" placeholder="Search Games" class="bg-transparent outline-none px-2 rounded-md w-[100%]" />
     </div>
     {theme=='dark'?
     (<HiMiniSun class="h-10 w-10 mt-1 mr-1 bg-black rounded-full p-1 text-white cursor-pointer" onClick={()=>{setTheme('light');localStorage.setItem('theme','light')}}/>):(<HiMoon class="h-10 w-10 mt-1 mr-1 bg-slate-200 rounded-full p-1 tect-black cursor-pointer" onClick={()=>{setTheme('dark') ;localStorage.setItem('theme','dark')}}/>)}
    </div>
  )
}

export default Header
