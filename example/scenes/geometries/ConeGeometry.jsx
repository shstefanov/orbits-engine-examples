import React from "react";
import { Cone } from "@orbits/engine";

export default () => <Cone
	radius={20}
	height={50}
	radialSegments={100}
	heightSegments={1}
	openEnded={false}
	thetaStart={0}
	thetaLength={Math.PI * 2 * 0.95}
	color={"#009999"}
/>