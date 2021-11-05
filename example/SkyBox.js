import React from "react"

import { Object3Component } from "@orbits/engine"

import {
  TextureLoader,
  MeshBasicMaterial,
  BackSide, DoubleSide,
  Mesh,
  BoxGeometry
} from "three"

class SkyBox extends Object3Component {

    createElement(){
      let materialArray = [
        (new TextureLoader()).load( '/images/skybox/right.png'),
        (new TextureLoader()).load( '/images/skybox/left.png'),
        (new TextureLoader()).load( '/images/skybox/top.png'),
        (new TextureLoader()).load( '/images/skybox/bottom.png'),
        (new TextureLoader()).load( '/images/skybox/front.png'),
        (new TextureLoader()).load( '/images/skybox/back.png'),
      ].map( map => new MeshBasicMaterial({ map, side: DoubleSide}) )

      return new Mesh(
        new BoxGeometry( 1500000, 1500000, 1500000 ),
        materialArray
      );



    }

    createInteraction(){
      const collider = this.element.clone();
      collider.material = new MeshBasicMaterial();
      this.element.attach(collider);
      collider.material.wireframe = this.props.debug;
      collider.material.visible = this.props.debug;
      return collider;
    }

    render(){
      return null
    }
}

export default SkyBox
