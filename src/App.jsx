import { useState, useCallback,useEffect } from 'react';
import './App.css'
function App() {
  const [length, setLength] = useState(9)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(true);
  const [password, setPassword] = useState("")

  const passwordGene = useCallback(() => {
    let pass = " "
    let str = "ASDFGHJKLQWERTYUIOPZXCVBNMqwertyuioplkjhgfdsazxcvbnm"
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += ":;>,<!@#$%^&*()"

    for (let index = 1; index <=length; index++) {
      let char = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(char)
    }

    setPassword(pass)
  },[length, numberAllowed, charAllowed, setPassword])

  
  useEffect(()=>{
    passwordGene()
  },
    [length, numberAllowed, charAllowed,passwordGene])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-4xl text-center text-white'>
          Password Generator
        </h1>
        {/* 
      <div className='text-4xl text-center text-white'></div> */}
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>

          <input type='text' value={password} className='outline-none w-full py-1 px-3' placeholder='password' readOnly></input>

          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={6} max={100} value={length}
              className='cursor-pointer' onChange={(e) => { setLength(e.target.value) }} />
            <label> Length: {length}</label>
</div>
            <div className='flex items-center gap-x-1'>
              <input type="checkbox" defaultChecked={numberAllowed} id="numberInput" onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}></input>
  <label>Numbers</label></div>
  <div className='flex items-center gap-x-1'>
              <input type="checkbox" defaultChecked={charAllowed} id="charInput" onChange={() => {
              setCharAllowed((prev) => !prev);
              }}></input>
  <label>character</label>
 
          </div>
        </div>
      </div>
    </>
  )
}
export default App

























