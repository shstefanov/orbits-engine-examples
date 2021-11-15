import React from "react";
import { Sphere } from "@orbits/engine";

export default () => <>
	
	<Sphere
		radius={40}
		widthSegments={30}
		heightSegments={30}
		phiStart={0}
		phiLength={Math.PI * 2 * 0.9}
		thetaStart={0}
		thetaLength={Math.PI * 0.9}
		color={"#999999"}
	/>

	<div className="links-block">
		<a href="https://github.com/shstefanov/orbits-engine-examples/blob/master/example/scenes/geometries/SphereGeometry.jsx"> Source </a>
	</div>
	
</>

