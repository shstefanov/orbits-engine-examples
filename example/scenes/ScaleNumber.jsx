import React, { useState } from "react";
import { Box } from "@orbits/engine";


export default () => {

	const [scale, setScale] = useState(1);

	return <>
		
		<Box
			scale={scale}
			size={[50, 25, 25]}
			color={"#999999"}
		/>

		<div className="info">
			Scale: <input min="0" max="200" step="1" type="range" value={scale * 100}
				onChange={ ({target: {value}}) => setScale(parseInt(value) / 100) }
			/>
		</div>

		<div className="links-block">
			<a href="https://github.com/shstefanov/orbits-engine-examples/blob/master/example/scenes/ScaleNumber.jsx"> Source </a>
		</div>

	</>



}


