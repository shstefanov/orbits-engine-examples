import React from "react";
import { Sprite } from "@orbits/engine";

export default () => <>
	
	<Sprite
		// Geometry properties:
		

		// Material:
		material={{
			type: "SpriteMaterial", 
			textures: {
				map: "/textures/sprite.png"
			},
			colors: {color: "#999999"},
			values: { sizeAttenuation: false }
		}}
		
		// Mesh properties:
		rotation={{ x: -Math.PI / 2, y: 0, z: 0 }}
		scale={0.1}
		position={{ x: 0, y: 0, z: 0 }}
	/>

	<div className="links-block">
		<a href="https://github.com/shstefanov/orbits-engine-examples/blob/master/example/scenes/geometries/SpriteGeometry.jsx"> Source </a>
	</div>

</>

