
import { Route, Routes } from 'react-router-dom'
import { NavBar } from '../components/NavBar'
import { Admin, Contact, Home, Login, ProductDetails, Register, Shopping, User } from '../pages/index'


export const RouterApp = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={< Home />} />
        <Route path='/product/:id' element={< ProductDetails />} />
        <Route path='/login' element={< Login />} />
        <Route path='/register' element={< Register />} />
        <Route path='/shopping' element={< Shopping />} />
        <Route path='/contact' element={< Contact />} />
        
        <Route path='/user/:id' element={< User />} />

        <Route path='/admin' element={<Admin />} />

      </Routes>
    </>
  )
}

//home || detalles de producto|| carrito de compras || login || registro||contacto|| panel de usuario || panel de administrador ||  