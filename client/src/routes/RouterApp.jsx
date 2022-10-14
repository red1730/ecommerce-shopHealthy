import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'

export const RouterApp = () => {
  return (
    <Routes>
      <Route path='/' element={< Home />} />
    </Routes>
  )
}

//home || detalles de producto|| carrito de compras || login || registro||contacto|| panel de usuario || panel de administrador ||  