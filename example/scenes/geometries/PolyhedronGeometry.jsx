import React from "react";
import { Polyhedron } from "@orbits/engine";

export default () => <Polyhedron
	
	vertices={[
	    -20,-10,-10,    10,-10,-10,    10, 10,-10,    -10, 10,-10,
		-10,-10, 20,    10,-10, 10,    10, 10, 10,    -10, 10, 10,
	]}

	indices={[
	    2,1,0,    0,3,2,
	    0,4,7,    7,3,0,
	    0,1,5,    5,4,0,
	    1,2,6,    6,5,1,
	    2,3,7,    7,6,2,
	    4,5,6,    6,7,4,
	]}

	radius={30}

	detail={1}




	color={"#999999"}
/>