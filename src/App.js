import './App.css'
import React, { useState } from 'react';
import Scene from './Scene';

const App = () => {
	const [sceneType, setSceneType] = useState("")

	return (
		<>
			<div className="absolute w-full h-full text-pink-200">
				<div className="relative w-full h-full flex flex-col justify-end">
					<h2 className="hidden text-center font-bold text-5xl shadow-2xl md:block">
						OKAYILOVEYOUOKAYILOVEYOUOKAYILOVEYOU
					</h2>
					<h2 className="text-center font-bold text-5xl md:hidden">
						OKAYILOVEYOU
					</h2>
					<div className="w-full font-bold text-5xl text-pink-300 absolute">
						<h2 className="text-center pl-1 mb-custom-title hidden md:block">
							OKAYILOVEYOUOKAYILOVEYOUOKAYILOVEYOU
						</h2>
						<h2 className="text-center pl-1 mb-custom-title md:hidden">
							OKAYILOVEYOU
						</h2>
					</div>
					<div className="flex gap-8 mx-auto mb-24 text-3xl z-10 pt-4">
						<button alt="music" onClick={e => setSceneType(e.target.innerText)}>
							music
						</button>
						<div className="text-pink-400">|</div>
						<button alt="VR" onClick={e => setSceneType(e.target.innerText)}>
							vr
						</button>
						<div className="text-pink-400">|</div>
						<button alt="live" onClick={e => setSceneType(e.target.innerText)}>
							live
						</button>
					</div>
				</div>
			</div>

			<Scene sceneType={sceneType} />
		</>
	)
}

export default App
