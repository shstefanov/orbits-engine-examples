import React, { useState } from "react";
import { Box, Fog } from "@orbits/engine";

export default () => {

	const [fogColor, setFogColor ] = useState("#888888");
	const [fogNear, setFogNear]    = useState(1);
	const [fogFar,  setFogFar]     = useState(300);

	return <>

		<div className="info">
			Color: <input type="color" value={fogColor}
				onChange={ ({target: {value}}) => {
					setFogColor(value);
				} }
			/>


			Near: <input 
				min="1"
				max="110"
				step="0.5"
				type="range" 
				value={fogNear}
				onChange={ ({target: {value}}) => {
					setFogNear(parseFloat(value));
				} }
			/>

			Far: <input 
				min="100"
				max="300"
				step="1"
				type="range" 
				value={fogFar}
				onChange={ ({target: {value}}) => {
					setFogFar(parseFloat(value));
				} }
			/>

		</div>
		
		<Fog 
			color={fogColor}
			near={fogNear}
			far={fogFar}
		/>

		<Box
			size={[50, 25, 25]}
			color={"#999999"}
		/>
	</>
}





