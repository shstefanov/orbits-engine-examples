import React from "react";
import { Lathe } from "@orbits/engine";

const waves = [];

for(let i = 0; i < 100; i+=0.01){
	waves.push([i, Math.sin(i) * 2]);
}

export default () => <>
	
	<Lathe
		// Geometry properties:
		shape={waves}
		segments={32}
		phiStart={0}
		phiLength={Math.PI * 2 * 0.9}

		// Material:
		material={{type: "MeshPhongMaterial", colors: {color: "#999999"}}}
	/>

	<div className="links-block">
		<a href="https://github.com/shstefanov/orbits-engine-examples/blob/master/example/scenes/geometries/LatheGeometry.jsx"> Source </a>
	</div>

</>
