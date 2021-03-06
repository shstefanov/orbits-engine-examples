import React, { useState } from "react";
import { Box } from "@orbits/engine";


export default () => {

	const [posX, setPosX] = useState(0);
	const [posY, setPosY] = useState(0);
	const [posZ, setPosZ] = useState(0);

	return <>
		
		<Box
			position={{x: posX, y: posY, z: posZ}}
			size={[50, 25, 25]}
			material={{
				type: "MeshBasicMaterial",
				colors: { color: "#999999" }
			}}
		/>


		<div className="info">
			X: <input min="0" max="50" step="1" type="range" value={posX}
				onChange={ ({target: {value}}) => setPosX(parseInt(value)) }
			/>

			Y: <input min="0" max="50" step="1" type="range" value={posY}
				onChange={ ({target: {value}}) => setPosY(parseInt(value)) }
			/>
			
			Z: <input min="0" max="50" step="1" type="range" value={posZ}
				onChange={ ({target: {value}}) => setPosZ(parseInt(value)) }
			/>
		</div>

		<div className="links-block">
			<a href="https://github.com/shstefanov/orbits-engine-examples/blob/master/example/scenes/Position.jsx"> Source </a>
		</div>
	</>



}


