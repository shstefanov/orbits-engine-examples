import React from "react";
import { Cylinder } from "@orbits/engine";

export default () => <>
	
	<Cylinder
		// Geometry properties:
		radiusTop={20}
		radiusBottom={30}
		height={50}
		radialSegments={20}
		heightSegments={1}
		openEnded={false}
		thetaStart={0}
		thetaLength={Math.PI * 2 * 0.95}
	    
	    material={{type: "MeshPhongMaterial", colors: {color: "#999999"}}}
	/>

	<div className="links-block">
		<a href="https://github.com/shstefanov/orbits-engine-examples/blob/master/example/scenes/geometries/CylinderGeometry.jsx"> Source </a>
	</div>

</>