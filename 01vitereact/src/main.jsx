import React from "react";
import ReactDOM from "react-dom/client";
// import {jsx as _jsx} from "react/jsx-runtime.js"
// import App from "./App.jsx";

function MyApp() {
  return (
    <div>
      <h1>Custom App !</h1>
    </div>
  );
}

// const ReactElement = {
//   type: "a",
//   // type mean what type of element we have?
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "Click me to visit google",
// };

// const anotherElement = (
//   <a href="https://google.com" target="_blank">
//     Visit Google
//   </a>
// );


const anotherUSER = "chai aur react"
// when our whole tree got injected then we got variable injection 

// this is a way where we can use the the react element to create the tree element structure.
// react will not allow you to use something like what u want always ,it has certain rules
// so here we just use the tree structure in the other structure than using a html here in a function

const reactElement = React.createElement(
  "a", 
{
  href: "https://google.com",
  target: "_blank",
},
'Click me to visit google',
anotherUSER
);

ReactDOM.createRoot(document.getElementById("root")).render(
  
    
    reactElement

    // <App/>
  
)
