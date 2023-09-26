import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {


 let [counter,setCounter] = useState(0)





  // let counter = 0

// we can actually use the function as a arrow function that can actually looks like ariable but atually a function 
  const addValue = () => {
    // counter = counter + 1;
    setCounter(counter + 1)
    // console.log("Clicked", counter);
  }

  const removeValue = () => {
    setCounter(counter - 1)
    // console.log("Value removed", Math.random);
    
  }
  

  return (
    <>
    <h1>Chai aur react</h1>
    <h2>Counter value: {counter}</h2>
    <button 
    onClick={addValue}
    >Add Value {counter}</button>
    <br/>
    <button
     onClick={removeValue}
    >Remove Value {counter}</button>
    <h2>Footer: {counter} </h2>
    </>
  )
}

export default App


// now in this case one variable 'counter' is looking up in all the places tbh now to change this in all the places is quite tough for that thats why we use the React
// this can be in classic js but maa chud jayegi bhai choro
// thats where react gives us the ability to use the HOOKS 
// HOOKS are useEffect,useState,etc etc...
// we have to use this hooks
