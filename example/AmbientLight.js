import React from "react"
import { Object3Component } from "@orbits/engine"

import { AmbientLight } from "three";

class SceneAmbientLight extends Object3Component {

	createElement(){
		return new AmbientLight( this.props.color || 0xffffff, this.props.intensity || 1 );
	}

	render(){
		return null
	}
}

export default SceneAmbientLight