import React, { useState } from "react";
import { ObjLoader } from "@orbits/engine";

export default () => {

	const [ modelColor, setModelColor ] = useState("#888888");
	const [ modelScale, setModelScale ] = useState(10);

	return <>

		<ObjLoader
			
			color={modelColor} applyColor="Group5732"

			textures={{
				"Group5732": "/models/skull/textures/difuso_flip_oscuro_5.jpg"
			}}

			normalMaps={{
				"Group5732": "/models/skull/textures/normal_flip_3.jpg"
			}}

			scale={modelScale}
			src="/models/skull/craneo.OBJ"
		/>

		<div className="info">
			Color: <input type="color" value={modelColor}
				onChange={ ({target: {value}}) => {
					setModelColor(value);
				} }
			/>

			Scale: <input min="10" max="100" step="1" type="range" value={modelScale}
				onChange={ ({target: {value}}) => setModelScale(parseInt(value)) }
			/>
		</div>

		<div className="links-block">
			<a href="https://github.com/shstefanov/orbits-engine-examples/blob/master/example/scenes/ObjLoader.jsx"> Source </a>
		</div>

	</>
}





