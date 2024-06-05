import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [color, setcolor] = useState("#42f5f5")
  return (
    <>
      <div className="w-screen h-screen" style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              onClick={(e) => setcolor("red")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "red" }}
            >Red</button>

            <button
              onClick={(e) => setcolor("orange")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "orange" }}
            >Orange</button>

            <button
              onClick={(e) => setcolor("magenta")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "magenta" }}
            >Magenta</button>

            <button
              onClick={(e) => setcolor("black")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "black" }}
            >Black</button>

            <button
              onClick={(e) => setcolor("lightgreen")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "lightgreen" }}
            >Green</button>

            <button
              onClick={(e) => setcolor("blue")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "blue" }}
            >Blue</button>



          </div>
        </div>
      </div>


    </>
  )
}

export default App
