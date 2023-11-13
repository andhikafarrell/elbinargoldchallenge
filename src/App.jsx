import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './Pages/Landing Page'
import SearchCar from './Pages/Searching Page'
import Result from './Pages/Result Page'
import Blank from './Pages/Blank Page'

import "./App.css"
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<SearchCar />} /> 
        <Route path='/result' element={<Result />} />
        <Route path='/404' element={<Blank />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
