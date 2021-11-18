import React from "react";
import { Ring } from "@orbits/engine";

export default () => <>
	
	<Ring
		// Geometry properties:
		innerRadius={20}
		outerRadius={35}
		thetaSegments={32}
		phiSegments={5}
		thetaStart={0}
		thetaLength={Math.PI * 2 * 0.9}

		// Material
		material={{type: "MeshPhongMaterial", colors: {color: "#999999"}}}
	/>

	<div className="links-block">
		<a href="https://github.com/shstefanov/orbits-engine-examples/blob/master/example/scenes/geometries/RingGeometry.jsx"> Source </a>
	</div>

</>

