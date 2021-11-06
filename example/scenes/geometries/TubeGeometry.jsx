import React from "react";
import { Tube } from "@orbits/engine";

export default () => <>
	
	<Tube
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
		// scale={20}
		color={"#999999"}
	/>

	<div className="links-block">
		<a href="https://github.com/shstefanov/orbits-engine-examples/blob/master/example/scenes/geometries/TubeGeometry.jsx"> Source </a>
	</div>
	
</>

