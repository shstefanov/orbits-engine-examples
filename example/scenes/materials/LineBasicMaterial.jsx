import React, { useState } from "react";
import { Line } from "@orbits/engine";

export default () => {

	const [ color, setColor ] = useState("#ffffff");
	const [ linewidth, setLinewidth ] = useState(1);

	return <>

		<Line
			
			points={[
				[ 50, 25, 25 ],
				[  0,  0,  0 ],
				[-50, 25, 25 ],
			]}

			material={{
				type:      "LineBasicMaterial",
				color:     color,
				linewidth: linewidth,
			}}

		/>




		<div className="info">
			Color: [{color}]
			<input type="color" value={color}
				onChange={ ({target: {value}}) => {
					setColor(value);
				} }
			/>

			Line width: [{linewidth}]
			<input min="0.1" max="10" step="0.001" type="range" value={linewidth}
				onChange={ ({target: {value}}) => setLinewidth(parseFloat(value)) }
			/>

		</div>




		<div className="links-block">
			<a href="https://github.com/shstefanov/orbits-engine-examples/blob/master/example/scenes/materials/LineBasicMaterial.jsx"> Code </a>
		</div>

	</>


}








