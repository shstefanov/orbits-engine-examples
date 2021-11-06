import React from "react"

import { OrbitsScene, AmbientLight, PointLight } from "@orbits/engine";

import SkyBox from "./SkyBox";


export default ({children}) => <OrbitsScene
	renderInterval={10} // optional, default: 40 (ms)
	// onUpdateControls={ e => console.log("onUpdateControls", e.target.distance) }
	controlsOptions={{
		distance: 150
	}}
	>

		<SkyBox />
		<AmbientLight color={"ffffff"} intensity={0.5} />
		<PointLight 
			position={{x: 100, y: 100, z: 100}}
			color={"#ffffff"} intensity={1}
		/>

		{children}

</OrbitsScene>