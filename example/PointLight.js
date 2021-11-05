import React from "react";
import { Object3Component } from "@orbits/engine";

import { PointLight } from "three";

class OrbitsPointLight extends Object3Component {

	createElement(){
		const element = new PointLight( this.props.color || "white", 1, 100000000, 2 );
		element.castShadow = true

		return element;
	}

}

export default OrbitsPointLight