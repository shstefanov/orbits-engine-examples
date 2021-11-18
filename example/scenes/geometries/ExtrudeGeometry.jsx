import React from "react";
import { Extrude } from "@orbits/engine";

export default () => <>
	
	<Extrude
		// Geometry properties:
		shape={[
			["move",        10, 10 ],
			["line",        10, 0  ],
			["line",        0,  0  ],
			["line",        0, 20  ],
			["bezierCurve",
				10, 40,
				20, 30,
				10, 10
			],
		]}
		path={[
			[1,1, 1],
			[100,100, 0],
			[-100, 100, -200],
			[100, -100, 100],
		]}
		steps={22}
		depth={60}
		bevelEnabled={true}
		bevelThickness={1}
		bevelSize={2}
		bevelOffset={2}
		bevelSegments={22}

		// Material:
		material={{type: "MeshPhongMaterial", colors: {color: "#999999"}}}
	/>

	<div className="links-block">
		<a href="https://github.com/shstefanov/orbits-engine-examples/blob/master/example/scenes/geometries/ExtrudeGeometry.jsx"> Source </a>
	</div>

</>

