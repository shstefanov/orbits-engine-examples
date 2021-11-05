import React from "react"
import { Object3Component } from "@orbits/engine"

import {
  MeshBasicMaterial,
  Mesh,
  BoxGeometry
} from "three"

class Cube extends Object3Component {

    createElement(){
      this.material = new MeshBasicMaterial({ color: this.props.color });
      this.geometry = new BoxGeometry( this.props.size, this.props.size, this.props.size );
      const mesh = new Mesh( this.geometry, this.material );
      return mesh;
    }

    render(){
      return super.render()
    }
}

export default Cube;
