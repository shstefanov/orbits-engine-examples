import React from "react";
import { Box } from "@orbits/engine";

export default () => {

	const blue_dots_material = {
		type:   "MeshBasicMaterial",
		colors: { color: "#0000ff" },
	};

	const red_dots_material = {
		type:   "MeshBasicMaterial",
		colors: { color: "#ff0000" },
	}

	return <>
		
		<Box
			size={50}
			material={{
				type: "MeshBasicMaterial",
				colors: { color: "#777777" }
			}}
			hover={<>
				<p>Object 1 HTML Hover add</p>
				<Box size={5} material={red_dots_material} position={{ x: 55,  y: 0,   z: 0   }} />
				<Box size={5} material={red_dots_material} position={{ x: 0,   y: 55,  z: 0   }} />
				<Box size={5} material={red_dots_material} position={{ x: 0,   y: 0,   z: 55  }} />
				<Box size={5} material={red_dots_material} position={{ x: -55, y: 0,   z: 0   }} />
				<Box size={5} material={red_dots_material} position={{ x: 0,   y: -55, z: 0   }} />
				<Box size={5} material={red_dots_material} position={{ x: 0,   y: 0,   z: -55 }} />

				<Box
					size={10}
					material={{
						type: "MeshBasicMaterial",
						colors: { color: "#ff00ff" }
					}}
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
			size={50}
			material={{
				type: "MeshBasicMaterial",
				colors: { color: "#777777" }
			}}
			position={{x:100, y: 100, z: 0}}
			hover={<>
				<p>Object 2 HTML Hover add</p>
				<Box size={5} material={blue_dots_material} position={{ x: 55,  y: 0,   z: 0   }} />
				<Box size={5} material={blue_dots_material} position={{ x: 0,   y: 55,  z: 0   }} />
				<Box size={5} material={blue_dots_material} position={{ x: 0,   y: 0,   z: 55  }} />
				<Box size={5} material={blue_dots_material} position={{ x: -55, y: 0,   z: 0   }} />
				<Box size={5} material={blue_dots_material} position={{ x: 0,   y: -55, z: 0   }} />
				<Box size={5} material={blue_dots_material} position={{ x: 0,   y: 0,   z: -55 }} />
			</>}
		/>

		<Box
			interactive
			size={50}
			material={{
				type: "MeshBasicMaterial",
				colors: { color: "#aaaaaa" }
			}}
			position={{x:-100, y: 100, z: 0}}
		/>

		<Box
			debug={false}
			size={50}
			material={{
				type: "MeshBasicMaterial",
				colors: { color: "#cccccc" }
			}}
			position={{x:-100, y: -100, z: 0}}
		/>


		<div className="links-block">
			<a href="https://github.com/shstefanov/orbits-engine-examples/blob/master/example/scenes/Hover.jsx"> Source </a>
		</div>

	</>
}





