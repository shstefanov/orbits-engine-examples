import React, { useState } from "react";
import { Points } from "@orbits/engine";

export default () => {

	const [ posX, setposX ] = useState(0);
	const [ posY, setposY ] = useState(0);
	const [ posZ, setposZ ] = useState(0);

	return <>
		
		<Points
			// Geometry properties:
			points={[
				[100, 0, 0],
				[posX, posY, posZ],
				[0, 100, 0],
			]}
			// Material:
			material={{
				type: "PointsMaterial",
				colors: { color: "#ff0000" },
				values: { size: 10 },
			}}
			// Mesh properties:
			position={ { x: 0, y: 0, z: 0} }
		/>



		<div className="info">
			X: <input min="0" max="50" step="1" type="range" value={posX}
				onChange={ ({target: {value}}) => { setposX(parseInt(value)) } }
			/>

			Y: <input min="0" max="50" step="1" type="range" value={posY}
				onChange={ ({target: {value}}) => { setposY(parseInt(value)) } }
			/>
			
			Z: <input min="0" max="50" step="1" type="range" value={posZ}
				onChange={ ({target: {value}}) => { setposZ(parseInt(value)) } }
			/>

		</div>

		<div className="links-block">
			<a href="https://github.com/shstefanov/orbits-engine-examples/blob/master/example/scenes/geometries/PointsGeometry.jsx"> Source </a>
		</div>

	</>

}





