import React, { useState } from "react";
import { Box } from "@orbits/engine";

export default () => {

	const [ materialProps, setMaterialProps ] = useState({
				
		type: "RawShaderMaterial",

		values: {
			uniforms: {
				time: { value: 0.0 }
			},

			vertexShader: `
				precision mediump float;
				precision mediump int;

				uniform mat4 modelViewMatrix; // optional
				uniform mat4 projectionMatrix; // optional

				attribute vec3 position;
				attribute vec4 color;

				varying vec3 vPosition;
				varying vec4 vColor;

				void main()	{

					vPosition = position;
					vColor = color;

					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}
			`,
			fragmentShader: `
				precision mediump float;
				precision mediump int;

				uniform float time;

				varying vec3 vPosition;
				varying vec4 vColor;

				void main()	{

					vec4 color = vec4( vColor );
					color.r += sin( vPosition.x * 10.0 + time ) * 0.5;

					gl_FragColor = color;

				}
			`,

		}
	});
	
	return <>


		<Box
			size={[50, 25, 25]}
			material={materialProps}
		/>


		<div className="info">

			uniforms.time: 
				<input 
					value={materialProps.values.uniforms.time.value}
					type="range"
					min="0"
					max={ Math.PI * 2 }
					step="0.01"
					onChange={ e => {	
						materialProps.values.uniforms.time.value = parseFloat(e.target.value);
						setMaterialProps({...materialProps});
					 } }
				/> <span className="show-value">[{materialProps.values.uniforms.time.value}]</span><br />

		
		</div>

		<div className="links-block">
			<a href="https://github.com/shstefanov/orbits-engine-examples/blob/master/example/scenes/materials/RawShaderMaterial.jsx"> Code </a>
		</div>

	</>

}











