import React from "react";
import { Dodecahedron } from "@orbits/engine";

export default () => <>
	
	<Dodecahedron
		// Geometry properties:
		radius={30}
		detail={0}

		// Material:
		material={{type: "MeshPhongMaterial", colors: {color: "#999999"}}}
	/>	

	<div className="links-block">
		<a href="https://github.com/shstefanov/orbits-engine-examples/blob/master/example/scenes/geometries/DodecahedronGeometry.jsx"> Source </a>
	</div>

</>
