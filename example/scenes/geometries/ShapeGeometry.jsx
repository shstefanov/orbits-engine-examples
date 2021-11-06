import React from "react";
import { Shape } from "@orbits/engine";

export default () => <>
	
	<Shape
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
		curveSegments={20}
		color={"#999999"}
	/>
	
	<div className="links-block">
		<a href="https://github.com/shstefanov/orbits-engine-examples/blob/master/example/scenes/geometries/ShapeGeometry.jsx"> Source </a>
	</div>

	
</>

