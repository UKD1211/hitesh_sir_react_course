import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";


// by this here we get the whole reference where to create the root 
const root = ReactDOM.createRoot(document.getElementById("root"));

// now it is saynig to render the app
// here we need jsx by using that we run html in the js
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// what will happen if we remove strictmode?
// -- its only for the safe mode
