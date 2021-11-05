import React from "react";
import { Extrude } from "@orbits/engine";

export default () => <Extrude

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


	// TODO:
	// extrudePath={[
	// 	[10, 20, 0],
	// 	[20, 10, 0],

	// 	[10, 20, 10],
	// 	[20, 10, 10],

	// 	[10, 20, 20],
	// 	[20, 10, 20],

	// 	[10, 20, 30],
	// 	[20, 10, 30],

	// 	[10, 20, 40],
	// 	[20, 10, 40],

	// 	[10, 20, 50],
	// 	[20, 10, 50],

	// 	[10, 20, 60],
	// 	[20, 10, 60],

	// 	[10, 20, 70],
	// 	[20, 10, 70],


	// ]}


	color={"#999999"}
/>