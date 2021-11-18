import React from "react";
import { Circle } from "@orbits/engine";

export default () => <>
	
	<Circle
		// Geometry Properties:
		radius={30}
		segments={50}

		// Material:
		material={{type: "MeshPhongMaterial", colors: {color: "#999999"}}}
	/>
	
	<div className="links-block">
		<a href="https://github.com/shstefanov/orbits-engine-examples/blob/master/example/scenes/geometries/CircleGeometry.jsx"> Source </a>
	</div>

</>
