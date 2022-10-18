import { Route, Routes } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import {
  Admin,
  Contact,
  Home,
  LandingPage,
  Login,
  ProductDetails,
  Register,
  Shopping,
  User,
} from "../pages/index";

export const RouterApp = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/catalogo" element={<Home />} />
        <Route path="/catalogo/:id" element={<ProductDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/comprar" element={<Shopping />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
};

//home || detalles de producto|| carrito de compras || login || registro||contacto|| panel de usuario || panel de administrador ||