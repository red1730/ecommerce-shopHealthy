import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import  ThemeProvider  from "./dashboard/theme";

import { store } from "./store/store";
import { App } from "./App";
import "./index.css";
import { greenTheme } from "./theme";
import { HelmetProvider } from "react-helmet-async";
import { StyledChart } from "./dashboard/components/chart";
import ScrollToTop from "./dashboard/components/scroll-to-top";



ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <ThemeProvider >
      <BrowserRouter>
        <Provider store={store}>
          <ScrollToTop />
          <StyledChart />
          <App />
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  </HelmetProvider>
);

