import React, { useState } from "react";
import { ObjLoader } from "@orbits/engine";



// /models/skull/craneo.OBJ


export default () => {

	const [ modelColor, setModelColor ] = useState("#888888");
	const [ modelScale, setModelScale ] = useState(10);
	// const [fogFar,  setFogFar]     = useState(300);

	return <>


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
	</>
}





