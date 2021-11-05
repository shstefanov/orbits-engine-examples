import React from "react";
import { Ring } from "@orbits/engine";

export default () => <Ring
	innerRadius={20}
	outerRadius={35}
	thetaSegments={32}
	phiSegments={5}
	thetaStart={0}
	thetaLength={Math.PI * 2 * 0.9}

	color={"#999999"}
/>