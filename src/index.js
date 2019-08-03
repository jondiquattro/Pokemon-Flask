import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Header from "./header.js";
import Pokemons from "./pokemons"

function App() {
  return (
    <div className="App">
      <Header />
      <Pokemons />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
