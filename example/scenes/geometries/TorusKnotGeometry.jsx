import React from "react";
import { TorusKnot } from "@orbits/engine";

export default () => <TorusKnot
	radius={40}
	tube={7}
	tubularSegments={32}
	radialSegments={32}
	p={4}
	q={3}
	color={"#999999"}
/>