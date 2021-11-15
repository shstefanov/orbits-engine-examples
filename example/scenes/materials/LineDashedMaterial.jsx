import React, { useState } from "react";
import { Line } from "@orbits/engine";

export default () => {

	const [ color, setColor ] = useState("#ffffff");
	const [ linewidth, setLinewidth ] = useState(1);
	const [ scale, setScale ] = useState(1);
	const [ dashSize, setDashSize ] = useState(20);
	const [ gapSize, setGapSize ]   = useState(33);

	return <>

		<Line
			
			points={[
				[ 50, 25, 25 ],
				[  0,  0,  0 ],
				[-50, 25, 25 ],
			]}

			material={{
				type:      "LineDashedMaterial",
				color:     color,
				linewidth: linewidth,
				scale:     scale,
				dashSize:  dashSize,
				gapSize:   gapSize,
			}}

		/>




		<div className="info">
			Color: [{color}]
			<input type="color" value={color}
				onChange={ ({target: {value}}) => setColor(value) }
			/>

			Line width: [{linewidth}]
			<input min="0.1" max="10" step="0.001" type="range" value={linewidth}
				onChange={ ({target: {value}}) => setLinewidth(parseFloat(value)) }
			/>

			Scale: [{scale}]
			<input min="0.1" max="100" step="0.001" type="range" value={scale}
				onChange={ ({target: {value}}) => setScale(parseFloat(value)) }
			/>

			<br />

			Dash Size: [{dashSize}]
			<input min="0.1" max="100" step="0.001" type="range" value={dashSize}
				onChange={ ({target: {value}}) => setDashSize(parseFloat(value)) }
			/>

			Gap Size: [{gapSize}]
			<input min="0.1" max="10" step="0.001" type="range" value={gapSize}
				onChange={ ({target: {value}}) => setGapSize(parseFloat(value)) }
			/>

		</div>




		<div className="links-block">
			<a href="https://github.com/shstefanov/orbits-engine-examples/blob/master/example/scenes/materials/LineDashedMaterial.jsx"> Code </a>
		</div>

	</>


}








