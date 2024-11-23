import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavbarComp from './components/Navbar'
import Home from './components/Home'
import WatchList from './components/WatchList'
import { Routes, Route } from 'react-router-dom'
import WatchListContextWrapper from './MovieContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavbarComp />
      <WatchListContextWrapper>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/watchlist' element={<WatchList />} />
        </Routes>
      </WatchListContextWrapper>
    </>
  )
}

export default App
