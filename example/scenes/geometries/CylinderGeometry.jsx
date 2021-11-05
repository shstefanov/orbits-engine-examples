import React from "react";
import { Cylinder } from "@orbits/engine";

export default () => <Cylinder
	radiusTop={20}
	radiusBottom={30}
	height={50}
	radialSegments={20}
	heightSegments={1}
	openEnded={false}
	thetaStart={0}
	thetaLength={Math.PI * 2 * 0.95}
    
    color={"#999999"}
/>