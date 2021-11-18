import React from "react";
import { Tetrahedron } from "@orbits/engine";

export default () => <>
	
	<Tetrahedron
		// Geometry properties:
		radius={30}
		detail={0}

		// Material:
		material={{type: "MeshPhongMaterial", colors: {color: "#999999"}}}
	/>

	<div className="links-block">
		<a href="https://github.com/shstefanov/orbits-engine-examples/blob/master/example/scenes/geometries/TetrahedronGeometry.jsx"> Source </a>
	</div>
	
</>
