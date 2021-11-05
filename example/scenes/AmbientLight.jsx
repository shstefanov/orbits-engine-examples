import React, { useState } from "react";
import { Box, AmbientLight } from "@orbits/engine";

export default () => {

	const [lightColor,     setLightColor    ] = useState("#888888");
	const [lightIntensity, setLightIntensity] = useState(1);

	return <>

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
		</div>
		
		<AmbientLight 
			color={lightColor}
			intensity={lightIntensity}
		/>

		<Box
			size={[50, 25, 25]}
			color={"#999999"}
		/>
	</>
}





