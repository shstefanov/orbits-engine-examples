import React, { useState } from "react";
import { Box } from "@orbits/engine";


export default () => {


	return <>
		
		<Box
			material={{transparent: true}}
			transition={({
				duration: 12000,
				timing_function: "EASE_IN_SINE",
				from: {
					opacity: 0.2,
					color:    "#00aaaa",
					position: { x: 0, y: 0, z: 0 },
					rotation: { x: 0, y: 0, z: 0 },
					scale:    { x: 1, y: 1, z: 1 },
				},
				to: {
					opacity:  0.7,
					color:    "#aa0000",
					position: { x: 500, y: 500, z: 0 },
					rotation: { x: 3, y: 3, z: 0 },
					scale:    { x: 2, y: 2, z: 16 },
				}
			})}
			size={[50, 25, 25]}
			color={"#999999"}
		/>

		<div className="links-block">
			<a href="https://github.com/shstefanov/orbits-engine-examples/blob/master/example/scenes/Transition.jsx"> Source </a>
		</div>

	</>



}


