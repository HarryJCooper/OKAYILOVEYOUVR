import './App.css'
import React, { useState } from 'react';
import Scene from './Scene';

const App = () => {
	const [sceneType, setSceneType] = useState("")

	return (
		<>
			<div className="absolute w-full h-full text-pink-200">
				<div className="relative w-full h-full flex flex-col justify-end">
					<h1 className="text-center font-bold text-3xl">
						OKAYILOVEYOUOKAYILOVEYOUOKAYILOVEYOU
					</h1>
					<ul className="flex mx-auto mb-24">
						<li>
							<button onClick={e => setSceneType(e.target.innerText)}>
								Music
							</button>
						</li>
						|
						<li>
							<button onClick={e => setSceneType(e.target.innerText)}>
								VR
							</button>
						</li>
					</ul>
				</div>
			</div>

			<Scene sceneType={sceneType} />
		</>
	)
}

export default App
