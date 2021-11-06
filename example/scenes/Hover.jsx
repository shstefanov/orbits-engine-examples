import React from "react";
import { Box } from "@orbits/engine";

export default () => <>
	
	<Box
		debug={false}
		size={50}
		color={"#777777"}
		hover={<>
			<p>Object 1 HTML Hover add</p>
			<Box size={5} color={"#ff0000"} position={{ x: 55,  y: 0,   z: 0   }} />
			<Box size={5} color={"#ff0000"} position={{ x: 0,   y: 55,  z: 0   }} />
			<Box size={5} color={"#ff0000"} position={{ x: 0,   y: 0,   z: 55  }} />
			<Box size={5} color={"#ff0000"} position={{ x: -55, y: 0,   z: 0   }} />
			<Box size={5} color={"#ff0000"} position={{ x: 0,   y: -55, z: 0   }} />
			<Box size={5} color={"#ff0000"} position={{ x: 0,   y: 0,   z: -55 }} />

			<Box size={10} color={"#ff00ff"}
				transition={({
					duration: 200,
					timing_function: "EASE_OUT_SINE",
					from: {
						position: { x: 0, y: 0, z: 0 },
						scale:    { x: 1,  y: 1,  z: 1 },
					}, 
					to: {
						position: { x: 70, y: 70, z: 70 },
						scale:    { x: 3,  y: 3,  z: 3 },
					}
				})}
			/>

		</>}
	/>


	<Box
		debug={false}
		size={50}
		color={"#777777"}
		position={{x:100, y: 100, z: 0}}
		hover={<>
			<p>Object 2 HTML Hover add</p>
			<Box size={5} color={"#0000ff"} position={{ x: 55,  y: 0,   z: 0   }} debug={true} />
			<Box size={5} color={"#0000ff"} position={{ x: 0,   y: 55,  z: 0   }} />
			<Box size={5} color={"#0000ff"} position={{ x: 0,   y: 0,   z: 55  }} />
			<Box size={5} color={"#0000ff"} position={{ x: -55, y: 0,   z: 0   }} />
			<Box size={5} color={"#0000ff"} position={{ x: 0,   y: -55, z: 0   }} />
			<Box size={5} color={"#0000ff"} position={{ x: 0,   y: 0,   z: -55 }} />
		</>}
	/>

	<Box
		interactive
		debug={false}
		size={50}
		color={"aaaaaa"}
		position={{x:-100, y: 100, z: 0}}
	/>

	<Box
		debug={false}
		size={50}
		color={"cccccc"}
		position={{x:-100, y: -100, z: 0}}
	/>


	<div className="links-block">
		<a href="https://github.com/shstefanov/orbits-engine-examples/blob/master/example/scenes/Hover.jsx"> Source </a>
	</div>

</>

