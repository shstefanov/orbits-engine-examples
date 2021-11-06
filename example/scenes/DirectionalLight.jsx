import React, { useState } from "react";
import { Box, DirectionalLight } from "@orbits/engine";

export default () => {

	const [lightColor,     setLightColor    ] = useState("#ffff00");
	const [lightIntensity, setLightIntensity] = useState(1);

	const [posX, setPosX] = useState(25);
	const [posY, setPosY] = useState(25);
	const [posZ, setPosZ] = useState(0);

	const [targetPosX, setTargetPosX] = useState(0);
	const [targetPosY, setTargetPosY] = useState(0);
	const [targetPosZ, setTargetPosZ] = useState(0);

	return <>


		
		<DirectionalLight
			position={{x: posX, y: posY, z: posZ}}
			target={{x: targetPosX, y: targetPosY, z: targetPosZ}}
			color={lightColor}
			intensity={lightIntensity}
		/>

		<Box
			size={[50, 25, 25]}
			color={"#999999"}
		/>

		<div className="info">
			Color: <input type="color" value={lightColor}
				onChange={ ({target: {value}}) => {
					setLightColor(value);
				} }
			/>


			Intensity: <input 
				min="0.2"
				max="2.5"
				step="0.01"
				type="range" 
				value={lightIntensity}
				onChange={ ({target: {value}}) => {
					setLightIntensity(parseFloat(value));
				} }
			/>

			<br/>

			Position: 

			X: <input min="0" max="50" step="1" type="range" value={posX}
				onChange={ ({target: {value}}) => setPosX(parseInt(value)) }
			/>

			Y: <input min="0" max="50" step="1" type="range" value={posY}
				onChange={ ({target: {value}}) => setPosY(parseInt(value)) }
			/>
			
			Z: <input min="0" max="50" step="1" type="range" value={posZ}
				onChange={ ({target: {value}}) => setPosZ(parseInt(value)) }
			/>


			<br/>

			Target: 

			X: <input min="0" max="50" step="1" type="range" value={targetPosX}
				onChange={ ({target: {value}}) => setTargetPosX(parseInt(value)) }
			/>

			Y: <input min="0" max="50" step="1" type="range" value={targetPosY}
				onChange={ ({target: {value}}) => setTargetPosY(parseInt(value)) }
			/>
			
			Z: <input min="0" max="50" step="1" type="range" value={targetPosZ}
				onChange={ ({target: {value}}) => setTargetPosZ(parseInt(value)) }
			/>

		</div>

		<div className="links-block">
			<a href="https://github.com/shstefanov/orbits-engine-examples/blob/master/example/scenes/DirectionalLight.jsx"> Source </a>
		</div>
		
	</>
}

