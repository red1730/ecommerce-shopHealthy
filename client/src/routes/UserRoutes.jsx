import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { NavBar } from '../components/NavBar'
import { Contact, Home, Preferencias, ProductDetail, Review, Shopping, User } from '../pages'

export const UserRoutes = () => {
  return (
    <div>
        <NavBar />
        <Routes>
          <Route index element={<Shopping />} />
          <Route path="/:nombre/comprar" element={<Shopping />} />
          <Route path="/:nombre/usuario" element={<User />} />
          <Route path="/:nombre/preferencias" element={<Preferencias />} />
          <Route path="/:nombre/review" element={<Review />} />
        </Routes>
    </div>
  )
}
