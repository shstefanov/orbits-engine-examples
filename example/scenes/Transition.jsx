import React, { useState } from "react";
import { Box } from "@orbits/engine";


export default () => {


	return <>
		
		<Box
			transition={({
				duration: 1500,
				timing_function: "EASE_IN_SINE",
				from: {
					color:    "#00aaaa",
					position: { x: 0, y: 0, z: 0 },
					rotation: { x: 0, y: 0, z: 0 },
					scale:    { x: 1, y: 1, z: 1 },
				},
				to: {
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


