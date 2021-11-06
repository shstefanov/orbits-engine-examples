import React, { useState } from "react";
import { Box } from "@orbits/engine";


export default () => {

	const [scaleX, setScaleX] = useState(1);
	const [scaleY, setScaleY] = useState(1);
	const [scaleZ, setScaleZ] = useState(1);

	return <>

		<Box
			scale={{x: scaleX, y: scaleY, z: scaleZ}}
			size={[50, 25, 25]}
			color={"#999999"}
		/>

		<div className="info">
			X: <input min="0" max="200" step="1" type="range" value={scaleX * 100}
				onChange={ ({target: {value}}) => setScaleX(parseInt(value) / 100) }
			/>

			Y: <input min="0" max="200" step="1" type="range" value={scaleY * 100}
				onChange={ ({target: {value}}) => setScaleY(parseInt(value) / 100) }
			/>
			
			Z: <input min="0" max="200" step="1" type="range" value={scaleZ * 100}
				onChange={ ({target: {value}}) => setScaleZ(parseInt(value) / 100) }
			/>
		</div>

		<div className="links-block">
			<a href="https://github.com/shstefanov/orbits-engine-examples/blob/master/example/scenes/Scale.jsx"> Source </a>
		</div>

	</>



}


