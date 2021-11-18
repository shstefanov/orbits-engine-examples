import React from "react";
import { Text } from "@orbits/engine";

export default () => <>
	
	<Text
		// Geometry properties:
		text="This is awesome!!!"
		font="/fonts/helvetiker_regular.typeface.json"
		size={30}
		height={5}
		curveSegments={12}
		bevelEnabled={true}
		bevelThickness={1}
		bevelSize={2}
		bevelOffset={2}
		bevelSegments={2}

		// Material:
		material={{type: "MeshPhongMaterial", colors: {color: "#999999"}}}

		// Mesh properties:
		rotation={{ x: -Math.PI / 2, y: 0, z: 0 }}
		position={{ x: -70, y: -0, z: 0 }}
	/>

	<div className="links-block">
		<a href="https://github.com/shstefanov/orbits-engine-examples/blob/master/example/scenes/geometries/TextGeometry.jsx"> Source </a>
	</div>

</>

