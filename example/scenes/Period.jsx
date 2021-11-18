import React, { useState } from "react";
import { Box } from "@orbits/engine";


export default () => {


	return <>
		
		<Box
			material={{
				type: "MeshBasicMaterial",
				values: { transparent: true }
			}}
			period={({
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

		<div className="links-block">
			<a href="https://github.com/shstefanov/orbits-engine-examples/blob/master/example/scenes/Period.jsx"> Source </a>
		</div>

	</>



}


