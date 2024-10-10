import { useState ,useContext,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Header from './components/Header'
import { ThemeContext } from './context/ThemeContext'

function App() {
  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState('light')
  
  useEffect(() => {
    setTheme(localStorage.getItem('theme')?localStorage.getItem('theme'):'light')
  }, [])
  

  return (
    <>
    <ThemeContext.Provider value={{theme,setTheme}}>
    <div class={`${theme} ${theme=='dark'?'bg-[#141313]':null} min-h-[100vh] pb-4`}>
    <Header  />
     <Home  />

    </div>
    </ThemeContext.Provider>
    </>
  )
}

export default App
