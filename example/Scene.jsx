import React from "react"

import { OrbitsScene, AmbientLight, PointLight } from "@orbits/engine";

import SkyBox from "./SkyBox";


export default ({children}) => <OrbitsScene
	defaultCursor="/images/cursor.png"
	renderInterval={10} // optional, default: 40 (ms)

	rotation={{x: Math.PI / 2}}
	
	// onUpdateControls={ e => console.log("onUpdateControls", e.target.distance) }
	cameraControls={{
		distance: 150,
		polarAngle: Math.PI / 2,
		azimuthAngle: 0,
		zoom: 0,
	}}

	// TODO - fix issue
	// rendererOptions={{
	// 	antialias: true,
	// }}
	>

		<SkyBox />
		<AmbientLight color={"ffffff"} intensity={0.5} />
		<PointLight 
			position={{x: 100, y: 100, z: 100}}
			color={"#ffffff"} intensity={1}
		/>

		{children}

</OrbitsScene>