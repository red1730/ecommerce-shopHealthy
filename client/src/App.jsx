import React from "react";
import { AuthProvider } from "./auth";
import { RouterApp } from "./routes/RouterApp";

export const App = () => {
  return (
    <AuthProvider>

      <RouterApp />

    </AuthProvider>
  );
};
