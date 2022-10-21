import React from "react";
import { AuthContext } from "./auth";
import { RouterApp } from "./routes/RouterApp";

export const App = () => {
  return (
    <AuthContext.Provider value= {{
      user,
      dispatch
    }}>

      <RouterApp />

    </AuthContext.Provider>
  );
};
