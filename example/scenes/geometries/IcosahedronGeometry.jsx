import React from "react";
import { Icosahedron } from "@orbits/engine";

export default () => <>
	
	<Icosahedron
		// Geometry properties:
		radius={30}
		detail={0}

		// Material:
		material={{type: "MeshPhongMaterial", colors: {color: "#999999"}}}
	/>

	<div className="links-block">
		<a href="https://github.com/shstefanov/orbits-engine-examples/blob/master/example/scenes/geometries/IcosahedronGeometry.jsx"> Source </a>
	</div>

</>
