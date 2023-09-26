import Chai from "./chai"



function App() {
  const username = "chai aur code"

  return (
    <>
    <Chai/>
    <h1>hello bhai {username}</h1>
    </>
  )
}

export default App
// if i write here a html it will give me errors as it will tell me that  jsx should be wrapped in a jsx tag <>
// we can only export only one element here like we have to give here a div
// so we use fragments <></>


// we already see that how the html get rendered in the react 
// now its time to render the js part(how to inject the variables?)