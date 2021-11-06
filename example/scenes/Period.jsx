import React, { useState } from "react";
import { Box } from "@orbits/engine";


export default () => {


	return <>
		
		<Box
			period={({
				period: 1500,
				timing_function: "EASE_IN_SINE",
				from: {
					color:    "#0000aa",
					position: { x: 0, y: 0, z: 0 },
					rotation: { x: 0, y: 0, z: 0 },
					scale:    { x: 1, y: 1, z: 1 },
				},
				to: {
					color:    "#aaaa00",
					position: { x: 300, y: 300, z: 0 },
					rotation: { x: 10, y: 0, z: 0 },
					scale:    { x: 2, y: 2, z: 16 },
				}
			})}
			size={[50, 25, 25]}
			color={"#999999"}
		/>

		<div className="links-block">
			<a href="https://github.com/shstefanov/orbits-engine-examples/blob/master/example/scenes/Period.jsx"> Source </a>
		</div>

	</>



}


