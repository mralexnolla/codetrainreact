import React from 'react'
import {Routes, Route} from "react-router-dom"
import Individuals from './Individuals'
import Teams from './Teams'
import Enterprises from './Enterprises'
import Error from './Error'
import Home from './Home'

const Routings = () => {
  return (
    <Routes>
      <Route path="/" element={<Individuals />}/>
      <Route path="/home" element={<Home />}/>
      <Route path="/teams" element={<Teams />}/>
      <Route path="/enterprises" element={<Enterprises />}/>
      <Route path="*" element={<Error />}/>
    </Routes>
  )
}

export default Routings
