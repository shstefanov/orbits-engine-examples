import React, { useState } from "react";
import { Box } from "@orbits/engine";


export default () => {

	const [rotX, setrotX] = useState(0);
	const [rotY, setrotY] = useState(0);
	const [rotZ, setrotZ] = useState(0);

	return <>
		
		<Box
			rotation={{x: rotX, y: rotY, z: rotZ}}
			size={[50, 25, 25]}
			color={"#999999"}
		/>
		<div className="info">
			X: <input min="0" max={200 * Math.PI} step="1" type="range" value={rotX * 100}
				onChange={ ({target: {value}}) => setrotX(parseInt(value) / 100) }
			/>

			Y: <input min="0" max={200 * Math.PI} step="1" type="range" value={rotY * 100}
				onChange={ ({target: {value}}) => setrotY(parseInt(value) / 100) }
			/>
			
			Z: <input min="0" max={200 * Math.PI} step="1" type="range" value={rotZ * 100}
				onChange={ ({target: {value}}) => setrotZ(parseInt(value) / 100) }
			/>
		</div>

		<div className="links-block">
			<a href="https://github.com/shstefanov/orbits-engine-examples/blob/master/example/scenes/Rotation.jsx"> Source </a>
		</div>

	</>



}


