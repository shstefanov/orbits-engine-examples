import React, { useState } from "react";
import { Box, PointLight } from "@orbits/engine";

export default () => {

	const [lightColor,     setLightColor    ] = useState("#888888");
	const [lightIntensity, setLightIntensity] = useState(1);
	const [lightDistance,  setLightDistance]  = useState(50);

	const [posX, setPosX] = useState(0);
	const [posY, setPosY] = useState(0);
	const [posZ, setPosZ] = useState(0);

	return <>


		<PointLight
			position={{x: posX, y: posY, z: posZ}}
			color={lightColor}
			intensity={lightIntensity}
			distance={lightDistance}
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

			Distance: <input 
				min="20"
				max="200"
				step="1"
				type="range" 
				value={lightDistance}
				onChange={ ({target: {value}}) => {
					setLightDistance(parseInt(value));
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


		</div>

		<div className="links-block">
			<a href="https://github.com/shstefanov/orbits-engine-examples/blob/master/example/scenes/PointLight.jsx"> Source </a>
		</div>

	</>
}





