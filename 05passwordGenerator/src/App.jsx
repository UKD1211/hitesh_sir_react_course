import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  // for updating the password with the lengths ,numbers,or characters for that also i should use the useState hook
  const [password, setPassword] = useState("");



  // useRef hook
  const passwordRef  = useRef(null);




  // password generator method
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxy";
    if (numberAllowed) str += "0123456789";
    // eslint-disable-next-line no-unused-vars
    if (charAllowed) str += "!@#$%^&*(){}~+-[]'";

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);
  // here if te any dependencies changes its state then optimize the method and keep it in chache 
// VVVVVVI



// how to made a copy to clipboard function here
const copyPasswordToClipboard = useCallback(() => {
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0, 101)
  window.navigator.clipboard.writeText(password)
}, [password]);


// here we use the Ref to give a better experience to the user itself actually


// useCallback is not only responsible for to run the function it memoize and optimize and keep it in cache for any change 


// how i will call the generate password w/o using the button on click here? 
// ---Ans: useEffect hook
// here we need one callback and one dependency array

useEffect(() => {
  passwordGenerator()
}, [length, numberAllowed,charAllowed, passwordGenerator])
// here if any dependencies changes then again run the method
// VVVVVI 

// diff between useEffect and useCallback


// -------------------------------------
  

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />

          <button
          onClick={copyPasswordToClipboard}
          className="outline-none bg-blue-700 text-white shrink-0">
            copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>

      <button
        onClick={passwordGenerator}
        className="flex rounded-lg bg-orange-600 text-white text-center mx-auto py-2 px-2"
      >
        Generate Password
      </button>
    </>
  );
}

export default App;
