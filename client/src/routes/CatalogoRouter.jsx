import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { NavBar } from '../components/NavBar'
import { Home, ProductDetail } from '../pages'

export const CatalogoRouter = () => {
  return (
    <div>
        <NavBar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path=":id" element={<ProductDetail />} />
        </Routes>
    </div>
  )
}
