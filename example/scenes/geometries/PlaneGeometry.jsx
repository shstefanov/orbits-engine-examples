import React from "react";
import { Plane } from "@orbits/engine";

export default () => <>
	
	<Plane
		// Geometry properties:
		width={50}
		height={90}
		widthSegments={10}
		heightSegments={20}

		// Material:
		material={{type: "MeshPhongMaterial", colors: {color: "#999999"}}}
	/>
	
	<div className="links-block">
		<a href="https://github.com/shstefanov/orbits-engine-examples/blob/master/example/scenes/geometries/PlaneGeometry.jsx"> Source </a>
	</div>

</>

