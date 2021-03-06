import React, { useState } from "react";
import { Line } from "@orbits/engine";

export default () => {

	const [ posX, setposX ] = useState(0);
	const [ posY, setposY ] = useState(0);
	const [ posZ, setposZ ] = useState(0);
	const [ color, setColor ] = useState("#ffffff");
	const [linewidth, setLineWidth] = useState(1);

	return <>
		
		<Line
			// Geometry properties:
			points={[
				[ 50, 25, 25 ],
				[ posX,  posY,  posZ ],
				[-50, 25, 25 ],
			]}


			// Material:
			material={{
				type: "LineBasicMaterial",
				colors: { color: color },
				values: { linewidth: linewidth }
			}}

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

			<br />

			Color: <input type="color" value={color}
				onChange={ ({target: {value}}) => { setColor(value)} }
			/>

			Line width: <input min="0.5" max="5" step="0.001" type="range" value={linewidth}
				onChange={ ({target: {value}}) => { setLineWidth(parseInt(value)); } }
			/>


		</div>

		<div className="links-block">
			<a href="https://github.com/shstefanov/orbits-engine-examples/blob/master/example/scenes/geometries/LineGeometry.jsx"> Source </a>
		</div>

	</>

}





