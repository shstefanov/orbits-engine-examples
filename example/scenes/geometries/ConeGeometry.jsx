import React from "react";
import { Cone } from "@orbits/engine";

export default () => <>

	<Cone
		// Geometry properties:
		radius={20}
		height={50}
		radialSegments={100}
		heightSegments={1}
		openEnded={false}
		thetaStart={0}
		thetaLength={Math.PI * 2 * 0.95}
		
		// Material:
		material={{type: "MeshPhongMaterial", colors: {color: "#999999"}}}
	/>

	<div className="links-block">
		<a href="https://github.com/shstefanov/orbits-engine-examples/blob/master/example/scenes/geometries/ConeGeometry.jsx"> Source </a>
	</div>
	
</>
