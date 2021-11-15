import React, { useState } from "react";
import { Line } from "@orbits/engine";



function objectState ( obj ) {
	let result = useState({});
	for(let name in obj){
		const [value, set] = useState(obj[name]);
		result.__defineGetter__(name, () => value );
		result.__defineSetter__(name, set);
	}
	return result;
}



export default () => {

	const state = objectState({
		posX: 0, posY:0, posZ: 0,
		color: "#888888", linewidth: 1
	});

	return <>
		
		<Line
			points={[
				[ 50, 25, 25 ],
				[ state.posX,  state.posY,  state.posZ ],
				[-50, 25, 25 ],
			]}

			material={{
				type: "LineDashedMaterial",
				color: state.color,
				linewidth: state.linewidth
			}}

		/>



		<div className="info">
			X: <input min="0" max="50" step="1" type="range" value={state.posX}
				onChange={ ({target: {value}}) => { state.posX = parseInt(value) } }
			/>

			Y: <input min="0" max="50" step="1" type="range" value={state.posY}
				onChange={ ({target: {value}}) => { state.posY = parseInt(value) } }
			/>
			
			Z: <input min="0" max="50" step="1" type="range" value={state.posZ}
				onChange={ ({target: {value}}) => { state.posZ = parseInt(value) } }
			/>

			<br />

			Color: <input type="color" value={state.color}
				onChange={ ({target: {value}}) => { state.color = value} }
			/>

			Line width: <input min="0.5" max="5" step="0.001" type="range" value={state.linewidth}
				onChange={ ({target: {value}}) => { state.linewidth = parseInt(value); } }
			/>


		</div>

		<div className="links-block">
			<a href="https://github.com/shstefanov/orbits-engine-examples/blob/master/example/scenes/geometries/LineGeometry.jsx"> Source </a>
		</div>

	</>

}





