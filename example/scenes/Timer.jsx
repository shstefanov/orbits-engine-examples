import React, { useState } from "react";
import { Box, Timer } from "@orbits/engine";


export default () => {

	const [ speed, setSpeed ] = useState(1);
	const [ explicitTime, setExplicitTime ] = useState(0);

	return <>


		<Timer
			{...(speed > 0) 
				? { speed, rel_now: explicitTime, rel_start: 0, anchor: Date.now() }
				: { speed, rel_now: explicitTime, rel_anchor: explicitTime, rel_start: 0, anchor: Date.now() }
			}
			// speed={speed}
			// rel_now={ explicitTime }
			// rel_anchor={ speed ? undefined : explicitTime }
			// rel_start={0}
			// anchor={Date.now()}
		>
			
			<Box
				material={{
					type: "MeshBasicMaterial",
					values: { transparent: true }
				}}
				relPeriod={({
					period: 4500,
					timing_function: "EASE_IN_SINE",
					from: {
						material: { values: {opacity: 0.9}, colors: { color: "#0000aa" } },
						position: { x: 0, y: 0, z: 0 },
						rotation: { x: 0, y: 0, z: 0 },
						scale:    { x: 1, y: 1, z: 1 },
					},
					to: {
						material: { values: {opacity: 0.1}, colors: { color: "#aaaa00" } },
						position: { x: 300, y: 300, z: 0 },
						rotation: { x: 30, y: 0, z: 0 },
						scale:    { x: 2, y: 2, z: 16 },
					}
				})}
				size={[50, 25, 25]}
			/>


		</Timer>

		<div className="info">
			Time Speed: <input type="range" min={0} max={10} step={0.01} value={speed}
				onChange={ ({target: {value}}) => {
					setSpeed(parseFloat(value));
				} }
			/> [{speed}] <br />
			Explicit: <input type="range" min={0} max={10000} step={40} value={explicitTime} disabled={speed > 0}
				onChange={ ({target: {value}}) => {
					setExplicitTime(parseFloat(value));
				} }
			/>	[{explicitTime}]
		</div>
		

		<div className="links-block">
			<a href="https://github.com/shstefanov/orbits-engine-examples/blob/master/example/scenes/Timer.jsx"> Source </a>
		</div>

	</>



}


