import React from "react";
import { Tube } from "@orbits/engine";

export default () => <>
	
	<Tube
		// Geometry properties:
		path={[
			[1,1, 1],
			[100,100, 0],
			[-100, 100, -200],
			[100, -100, 100],
		]}
		tubularSegments={120}
		radialSegments={12}
		radius={10}
		closed={true}

		// Material:
		material={{type: "MeshPhongMaterial", colors: {color: "#999999"}}}
	/>

	<div className="links-block">
		<a href="https://github.com/shstefanov/orbits-engine-examples/blob/master/example/scenes/geometries/TubeGeometry.jsx"> Source </a>
	</div>

</>

