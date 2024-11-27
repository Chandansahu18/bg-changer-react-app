import { useState } from "react";

function App() {
const [color, setColor] = useState('olive');
 
function changeColor(selectedColor){
     
  if (selectedColor === 'black') {
    setColor('black')
  }else if (selectedColor === 'red') {
    setColor('red')
  }else if (selectedColor === 'green') {
    setColor('green')
  }else if (selectedColor === 'olive') {
    setColor('olive')
  }
  else if (selectedColor === 'orange') {
    setColor('orange')
  }else if (selectedColor === 'indigo') {
    setColor('indigo')
  }
}

  return (
    <> 
    <div className='h-screen w-screen flex items-center justify-center gap-5 duration-200' style={{backgroundColor:color}}>
      <button className="bg-[#232b2b] text-white px-12" onClick={() => changeColor('black')}>Black</button>
      <button className="bg-red-600 text-white px-12" onClick={() => changeColor('red')}>Red</button>
      <button className="bg-green-600 text-white px-12" onClick={() => changeColor('green')}>Green</button>
      <button className="bg-[#808000] text-white px-12" onClick={() => changeColor('olive')}>Olive</button>
      <button className="bg-orange-400 text-white px-12" onClick={() => changeColor('orange')}>Orange</button>
      <button className="bg-[#512372] text-white px-12" onClick={() => changeColor('indigo')}>Indigo</button>
    </div>     
    </>
  )
}

export default App
