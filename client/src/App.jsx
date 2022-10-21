import React, { useEffect } from "react";
import { useReducer } from "react";
import { AuthContext } from "./auth/AuthContext";
import { RouterApp } from "./routes/RouterApp";
import { authReducer } from "./auth/authReducer";

const init = () => {
      return JSON.parse ( localStorage.getItem('user') )  || {logged: false}
}

export const App = () => {

  const [user, dispatch] = useReducer( authReducer, {}, init)

  useEffect(() =>{
    if (!user) return;

    localStorage.setItem('user',JSON.stringify(user))
    

  },[ user ])

  return (
    <AuthContext.Provider value= {{
      user,
      dispatch
    }}>

      <RouterApp />

    </AuthContext.Provider>
  );
};
