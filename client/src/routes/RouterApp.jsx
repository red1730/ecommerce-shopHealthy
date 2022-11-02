import Search from "@mui/icons-material/Search";
import { Route, Routes } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import  {DashBoardApp}  from '../dashboard/DashBoardApp';
import RouterDashBoard from "../dashboard/routes";
import {
  Admin,
  Contact,
  Home,
  LandingPage,
  Login,
  ProductDetail,
  Register,
  Shopping,
  User,
  CrearProducto,
  Preferencias,
} from "../pages/index";
import { CatalogoRouter } from "./CatalogoRouter";

export const RouterApp = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/catalogo/*" element={<CatalogoRouter />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/comprar" element={<Shopping />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/user" element={<User />} />
        <Route path="/admin/*" element={<RouterDashBoard />} />
        <Route path="/producto" element={<CrearProducto />} />
        <Route path="/usuario/:nombre" element={<Preferencias/>} />
      </Routes>
    </>
  );
};

//home || detalles de producto|| carrito de compras || login || registro||contacto|| panel de usuario || panel de administrador ||
