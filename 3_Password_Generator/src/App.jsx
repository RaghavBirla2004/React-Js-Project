import { useState,useEffect,useRef ,useCallback} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
let [password,setpassword] = useState("")
let [length,setlength] = useState("6")
let [numberallowed,setnumberallowed] = useState(false)
let [charallowed,setcharallowed] = useState(false)
let passwordRef = useRef(null)

// ! Copy Function
const copyPasswordToClipboard = useCallback(() => {
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0, 999);
  window.navigator.clipboard.writeText(password)
}, [password])


//! Password Generator
let passwordgenerator= useCallback(()=>{
let pass = ""
let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
if(numberallowed){
  str += "0123456789"
}
 if(charallowed){
  str += "!@#$%^&*-_+=[]{}~`:';'"
}

for (let i = 1; i <= length; i++) {
  let char = Math.floor(Math.random() * str.length + 1)

  pass += str.charAt(char)
  
}
setpassword(pass)
},[length, numberallowed, charallowed, setpassword])

//! Calling Password Generator
useEffect(() => {
  passwordgenerator()
}, [length, numberallowed, charallowed, passwordgenerator])




  return (
       
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 mb-5 bg-white text--500">
        
        <h3 className='text-xl'>Password Generator</h3>
        <div className='flex'>
        <input
        className="border-2 border-black-600 outline-none w-full py-1 px-3"
         type="text"
         value = {password}
         ref={passwordRef}
         readOnly 
         
         />

<button
       
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        onClick={copyPasswordToClipboard}
        >copy</button>
    </div>


 {/* //! length of password */}
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type='range'
         min={6}
         max={12}
         onChange={(e)=>{
           setlength(e.target.value)
         }}
         className='cursor-pointer'
         value={length} 
         id='length'

        >
        </input>
        <label htmlFor='length' >{length}</label>
        </div>
        
        {/* //! Number allowed or not */}
        

        <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type='checkbox'
        defaultChecked= {numberallowed}
        
        onChange={() => {
          setnumberallowed((prev) => !prev);
         id="numberInput"
      }}
        >
        </input>
        <label htmlFor="numberInput">Numbers</label>
       
        </div>
</div>


{/* //! Character Allowed  */}
<div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type='checkbox'
        defaultChecked= {charallowed}
        id="numberInput"
        onChange={() => {
          setcharallowed((prev) => !prev);
       
      }}
        >
        </input>
        <label htmlFor="charInput">Character</label>
       
        </div>
</div>



</div>






    </div>
  )
}

export default App
