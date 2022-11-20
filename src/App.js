import './App.css'
import React, { useState } from 'react';
import Scene from './Scene';

const App = () => {
	const [sceneType, setSceneType] = useState("")

	return (
		<>
			<div className="absolute w-full h-full text-green-500">
				<h1 className="text-center font-bold text-2xl">
					OKAYILOVEYOUOKAYILOVEYOUOKAYILOVEYOU
				</h1>
				<div>
					<button onClick={e => 
						setSceneType(e.target.innerText)
					}>
						Music
					</button>
				</div>
				<div>
					<button onClick={e => 
						setSceneType(e.target.innerText)
					}>
						VR
					</button>
				</div>
			</div>
			
			<Scene sceneType={sceneType} />
		</>
	)
}

export default App
