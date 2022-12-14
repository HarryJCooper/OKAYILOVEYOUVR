import * as THREE from 'three';
import { VRButton } from 'three/addons/webxr/VRButton.js';
import { useState, useEffect } from 'react';

const Scene = (props) => {
	const root = document.getElementById("root");
	const scene = new THREE.Scene()
	const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 2000 );
	const [renderer] = useState(new THREE.WebGLRenderer());
	const button = VRButton.createButton(renderer)
	let childrenArray = []

	// create an AudioListener and add it to the camera
	const listener = new THREE.AudioListener();
	camera.add(listener);

	// create the PositionalAudio object (passing in the listener)
	const soundOne = new THREE.PositionalAudio(listener);

	// load a sound and set it as the PositionalAudio object's buffer
	const audioLoaderOne = new THREE.AudioLoader();
	audioLoaderOne.load('assets/sounds/space_guitar_left.ogg', function( buffer ) {
		soundOne.setBuffer(buffer);
		soundOne.setRefDistance(40);
		soundOne.play();
	});

	// create an object for the sound to play from
	const sphere = new THREE.SphereGeometry(20, 32, 16);
	const material = new THREE.MeshPhongMaterial( { color: 0xff2200 } );
	const soundMesh = new THREE.Mesh(sphere, material);
	soundMesh.position.y = 1;
	soundMesh.position.z = 4;
	scene.add(soundMesh);

	// finally add the sound to the mesh
	soundMesh.add(soundOne);

	function animate(sceneType) {
		renderer.setAnimationLoop(function(){
			if (sceneType === "vr"){
				childrenArray.forEach((mesh) => {
					mesh.material.color.b -= 0.01;
					mesh.material.color.r += 0.01;
					mesh.material.color.g -= 0.01;
				})
			} else {
				childrenArray.forEach((mesh) => {
					mesh.material.color.b += 0.01;
					mesh.material.color.r -= 0.01;
					mesh.material.color.g -= 0.01;
				})
			}
			
			scene.rotation.y += 0.001;
			scene.scale.y += 0.0001
			scene.scale.z += 0.0001
			scene.scale.x += 0.0001
			renderer.render(scene, camera);
		} );
	};

	useEffect(() => {
		renderer.xr.enabled = true;
		renderer.setSize( window.innerWidth, window.innerHeight );
	
		root.appendChild(renderer.domElement);
		root.appendChild(button);

		let textObj = new THREE.Object3D();

		const jsonLoader = new THREE.ObjectLoader();
		jsonLoader.load(
			"assets/THISONE.json",
			function (obj){
				textObj = obj
				childrenArray = textObj.children[0].children;
				scene.add(textObj);
			},
			function (xhr){ console.log((xhr.loaded / xhr.total * 100) + '% loaded'); },
			function (err){ console.error('An error happened'); }
		);

		camera.position.z = 0;
		camera.position.y = 1.2;

		animate(props.sceneType);
	});
}

export default Scene
