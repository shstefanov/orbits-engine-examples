import React from "react";
import { Torus } from "@orbits/engine";

export default () => <Torus
	radius={40}
	tube={12}
	radialSegments={32}
	tubularSegments={32}
	arc={Math.PI * 2 * 0.9}
	color={"#999999"}
/>