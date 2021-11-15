import React from "react";
import { Box } from "@orbits/engine";

export default () => <>


	<Box
		size={[50, 25, 25]}
		color={"#999999"}
	/>

	<Box
		material="/materials/basic-green.json"
		size={[50, 25, 25]}
		position={{x: 0, y: - 150, z: 0}}
	/>

	<div className="links-block">
		<a href="https://github.com/shstefanov/orbits-engine-examples/blob/master/example/Scene.jsx"> Scene Source </a>
		<a href="https://github.com/shstefanov/orbits-engine-examples/blob/master/example/scenes/Basics.jsx"> Object Source </a>
	</div>

</>




