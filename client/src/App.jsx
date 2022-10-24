import React, { useEffect, useState, createContext } from "react";
import { useReducer } from "react";
// import { AuthContext } from "./auth/AuthContext";
import { RouterApp } from "./routes/RouterApp";
import { authReducer } from "./auth/authReducer";

// const init = () => {
//       return JSON.parse ( localStorage.getItem('user') )  || {logged: false}
// }

const ContextoGlobal = createContext(null)
const estadoInicial = {
  usuario: 'invitado',
  token: null
}

export const App = () => {
  const [estadoGlobal, setEstadoGlobal ] = useState(estadoInicial)
  const manejarUsuario = (cual) => {
    setEstadoGlobal({...estadoGlobal, usuario: cual})
  } 
/*  
  const [user, dispatch] = useReducer( authReducer, {}, init)
  useEffect(() =>{
    if (!user) return;
    localStorage.setItem('user',JSON.stringify(user))
  },[ user ])
*/
  return (
    <ContextoGlobal.Provider value={{ estadoGlobal, manejarUsuario }}>
      <RouterApp />
    </ContextoGlobal.Provider>
  );
};
