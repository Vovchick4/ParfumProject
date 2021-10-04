import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { App } from "./components";
import DarkModeProvaider from "./context/DarkModeContext";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "normalize.css";
import "./styles/variebles.css";
import "./styles/index.css";

import { store, persistor } from "./redux/store";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <DarkModeProvaider>
          <App />
        </DarkModeProvaider>
      </PersistGate>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
