import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return <div>HI React</div>;
};

const doc = document.querySelector("#root");
ReactDOM.render(<App />, doc);
