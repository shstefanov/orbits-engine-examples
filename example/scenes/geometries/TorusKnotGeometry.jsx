import React from "react";
import { TorusKnot } from "@orbits/engine";

export default () => <>
	
	<TorusKnot
		// Geometry properties:
		radius={40}
		tube={7}
		tubularSegments={32}
		radialSegments={32}
		p={3}
		q={2}

		// Material:
		material={{type: "MeshPhongMaterial", colors: {color: "#999999"}}}
	/>

	<div className="links-block">
		<a href="https://github.com/shstefanov/orbits-engine-examples/blob/master/example/scenes/geometries/TorusKnotGeometry.jsx"> Source </a>
	</div>

</>

