import * as THREE from 'three';
import { VRButton } from 'three/addons/webxr/VRButton.js';

function animate(renderer, childrenArray, scene, camera) {
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

function startScene(sceneType){
	console.log(sceneType)
	
	const scene = new THREE.Scene();
	const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 2000 );

	const renderer = new THREE.WebGLRenderer();
	renderer.xr.enabled = true;

	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );

	let textObj = new THREE.Object3D();
	

	document.body.appendChild( VRButton.createButton( renderer ) );

	let childrenArray = []

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

	camera.position.z = 0;
	camera.position.y = 1;

	animate(renderer, childrenArray, scene, camera);
}

export {startScene, animate}
