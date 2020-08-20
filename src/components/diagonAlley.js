import React from "react";
import { Provider } from "react-redux";
import store from "./daStore";

import "../styles/diagonAlley.scss";
import { Header, Categories, Products } from "./diagonAlley/ComponentIndex.js";

// import "./styles/styles.scss";

function DiagonAlley() {
  return (
    <Provider store={store}>
      <div className="dAlley">
      <div className="dWrapper"> 
        <Header />
        <Categories />
        <Products />
      </div>
      </div>
    </Provider>
  );
}

export default DiagonAlley;