import * as THREE from 'three';
import { VRButton } from 'three/addons/webxr/VRButton.js';
import React, { useState } from 'react';

const Scene = (props) => {
	const root = document.getElementById("root");
	const scene = new THREE.Scene()
	const [camera] = useState(new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 2000 ));
	const [renderer] = useState(new THREE.WebGLRenderer());
	const [button] = useState(VRButton.createButton(renderer))
	renderer.xr.enabled = true;
	renderer.setSize( window.innerWidth, window.innerHeight );
	root.appendChild( renderer.domElement );
	root.appendChild( button );
	renderer.render( scene, camera );

	let textObj = new THREE.Object3D();

	let childrenArray = []

	if (props.sceneType === "VR"){
		const jsonLoader = new THREE.ObjectLoader();
		jsonLoader.load(
		// resource URL
			"assets/THISONE.json",

			// onLoad callback
			// Here the loaded data is assumed to be an object
			function ( obj ) {
				// Add the loaded object to the scene
				textObj = obj
				childrenArray = textObj.children[0].children;
				console.log(childrenArray)
				scene.add( textObj );
			},

			// onProgress callback
			function ( xhr ) {
				console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
			},

			// onError callback
			function ( err ) {
				console.error( 'An error happened' );
			}
		);
	}

	camera.position.z = 0;
	camera.position.y = 1;

	function animate() {
		renderer.setAnimationLoop( function () {
			childrenArray.forEach((mesh) => {
				mesh.material.color.b -= 0.01;
				mesh.material.color.r += 0.01;
				mesh.material.color.g -= 0.01;
			})
			scene.rotation.y += 0.001;
			scene.scale.y += 0.0001
			scene.scale.z += 0.0001
			scene.scale.x += 0.0001
			renderer.render( scene, camera );
		} );
	};

	animate();

	return (
		<></>
	)
}

export default Scene
