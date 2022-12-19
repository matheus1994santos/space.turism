import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from '../home'
import { Destinations } from '../destination'
import { Crew } from '../crew'
import { Technology } from '../technology'

const PagesRoutes = () => {
  return (
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/destination' element={<Destinations/>}/>
          <Route path='/crew' element={<Crew/>}/>
          <Route path='/technology' element={<Technology/>}/>
        </Routes>
  )
}

export default PagesRoutes
