import './App.css'
import * as VR from './VR.js';



const App = () => {
  return (
    <div className="absolute w-full h-full text-grey">
      <h1 className="text-center font-bold text-2xl">
        OKAYILOVEYOUOKAYILOVEYOUOKAYILOVEYOU
      </h1>
      <h2>music</h2>
      <button onClick={e => VR.startScene(e.target.innerText)}>VR</button>
    </div>
  )
}

export default App
