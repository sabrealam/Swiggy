import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Search from '../pages/Search'
import Cart from '../pages/Cart'
import Offers from '../pages/Offers'
import Help from '../pages/Help'
export default function AllRoute() {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<Search />} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/help' element={<Help/>} />
        <Route path='/offers' element={<Offers/>} />
    </Routes>
  )
}
