import React, { useEffect, useState } from "react";
import { useReducer } from "react";
import { AuthContext } from "./auth/AuthContext";
import { RouterApp } from "./routes/RouterApp";
import { authReducer } from "./auth/authReducer";
import { useSelector } from "react-redux";


const init = () => {
    // return {
    //   name: 'JAVO probandoo',
    //   logged: true
    // }
  let user = JSON.parse ( localStorage.getItem('user','cart') )  || {logged: false} 
  // let carrito= JSON.parse(localStorage.getItem('cart') || '[]' )
  // let result= {...user,carrito}
  return user 
}

export const App = () => {

// const [logeado, setLogeado] = useState(false)
  const [user, dispatch] = useReducer( authReducer, {}, init)
  const {cart} = useSelector( s=> s.catalogReducer)
  useEffect(() =>{
    if (!user) return;
    localStorage.setItem('user',JSON.stringify(user))

  },[ user])

   useEffect(()=>{
        if(!cart.length) return;
    localStorage.setItem("cart", JSON.stringify(cart))
 },[cart])

// function updateState(value){
//  return  setLogeado(value)
// }


  return (
    <AuthContext.Provider value= {{
      user,
      dispatch
  
    }}>

      <RouterApp />
    </AuthContext.Provider>
  );
};
