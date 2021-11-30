import React, { useState } from "react";
import { Box } from "@orbits/engine";

export default () => {

	const [color, setColor] = useState("#888888");

	return <>
		
		<Box
			size={[50, 25, 25]}
			material={{
				type: "MeshBasicMaterial",
				colors: { color }
			}}
		/>
		
		<div className="info">
			Color: <input type="color" value={color}
				onChange={ ({target: {value}}) => {
					setColor(value);
				} }
			/>			
		</div>

		<div className="links-block">
			<a href="https://github.com/shstefanov/orbits-engine-examples/blob/master/example/scenes/Color.jsx"> Source </a>
		</div>

	</>



}


