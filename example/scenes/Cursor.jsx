import React from "react";
import { Box } from "@orbits/engine";

export default () => <>

	<Box
		cursor="/images/cursor-full.png"
		size={[50, 25, 25]}
		color={"#999999"}
	/>

	<Box
		position={{x:55, y: 0, z: 0}}
		cursor="/images/cursor-green.png"
		size={[50, 25, 25]}
		color={"#999999"}
	/>

	<div className="links-block">
		<a href="https://github.com/shstefanov/orbits-engine-examples/blob/master/example/scenes/Cursor.jsx"> Source </a>
	</div>

</>




