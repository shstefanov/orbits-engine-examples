import React        from "react"
import ReactDOM     from "react-dom"

import { OrbitsScene, AmbientLight, PointLight } from "@orbits/engine";

import Scene from "./Scene";
import Routes from "./Routes";
import Navigation from "./Navigation";

import SkyBox from "./SkyBox";

document.addEventListener("DOMContentLoaded", () => {

	ReactDOM.render(<>

		<Scene>
			<div style={{
				position: "fixed",
				width: "100%",
				height: "0%",
				overflow: "visible",
				zIndex: "1"
			}}>
				<Routes>
					<Navigation />
				</Routes>
			</div>
		</Scene>
		
	</>, document.getElementById("app") );

});