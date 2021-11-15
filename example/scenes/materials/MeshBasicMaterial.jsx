import React, { useState } from "react";
import { Box } from "@orbits/engine";
import CommonMaterialPropertiesForm from "./_CommonMaterialPropertiesForm.jsx";

export default () => {

	const [ materialProps, setMaterialProps ] = useState({
				
		type: "MeshBasicMaterial",
		

		color: "#ff8888",


		reflectivity: 0.4,     // Float (0 - 1)
		refractionRatio: 0.4,  // < 1


		// // // Textures:
		map:       "/textures/brick/ruin_wall_01.png",
		// normalMap: "/textures/brick/ruin_wall_03_norm.png",
		alphaMap:  "/textures/brick/ruin_wall_03_norm.png",
		aoMap:     "/textures/brick/ruin_wall_03.png",
		envMap:    "/textures/brick/ruin_wall_03.png",
		lightMap:  "/textures/brick/ruin_wall_03.png",
		specularMap: "/textures/brick/ruin_wall_03.png",

		aoMapIntensity: 0.5,     // 0 - 1
		lightMapIntensity: 100,  // Float
		combine: "MultiplyOperation",  // MultiplyOperation, MixOperation, AddOperation

		wireframe: false,
		wireframeLinecap: "round", // "butt" and "square"
		wireframeLinejoin : "round", // "butt", "mitter"
		wireframeLinewidth: 2,


		// Common for all materials

		// https://threejs.org/docs/?q=MeshBasic#api/en/materials/Material


		transparent: false,
		opacity: 0.95,
		alphaTest: 0.5, //   0 - 1
		alphaToCoverage: 0.2, // Float
		

		blending: "NoBlending", // NoBlending, NormalBlending, AdditiveBlending, SubtractiveBlending, MultiplyBlending, CustomBlending
		blendDst: "OneMinusSrcAlphaFactor",   // ZeroFactor,	OneFactor,	SrcColorFactor,	OneMinusSrcColorFactor,	SrcAlphaFactor,	OneMinusSrcAlphaFactor,	DstAlphaFactor,	OneMinusDstAlphaFactor,	DstColorFactor,	OneMinusDstColorFactor
		blendDstAlpha: 2,
		blendEquation: 2,
		blendEquationAlpha: 2,
		blendSrc: "SrcAlphaFactor", // ZeroFactor,	OneFactor,	SrcColorFactor,	OneMinusSrcColorFactor,	SrcAlphaFactor,	OneMinusSrcAlphaFactor,	DstAlphaFactor,	OneMinusDstAlphaFactor,	DstColorFactor,	OneMinusDstColorFactor,	SrcAlphaSaturateFactor
		blendSrcAlpha: "SrcAlphaFactor", // ZeroFactor,	OneFactor,	SrcColorFactor,	OneMinusSrcColorFactor,	SrcAlphaFactor,	OneMinusSrcAlphaFactor,	DstAlphaFactor,	OneMinusDstAlphaFactor,	DstColorFactor,	OneMinusDstColorFactor,	SrcAlphaSaturateFactor
		clipIntersection: false,
		clippingPlanes: [], // TODO - array of THREE.Plane objects
		clipShadows: true,
		colorWrite: true,
		depthFunc: "LessEqualDepth", // NeverDepth, AlwaysDepth, EqualDepth, LessDepth, LessEqualDepth, GreaterEqualDepth, GreaterDepth, NotEqualDepth,
		depthTest: true,
		depthWrite: true,
		stencilWrite: true,
		stencilWriteMask: 0xff, // bitmask
		stencilFunc: "AlwaysStencilFunc", // NeverStencilFunc, LessStencilFunc, EqualStencilFunc, LessEqualStencilFunc, GreaterStencilFunc, NotEqualStencilFunc, GreaterEqualStencilFunc, AlwaysStencilFunc, LineBasicMaterial
		stencilRef: 0, // Integer
		stencilFuncMask: 0xff, // bitmask

		stencilFail: "ZeroStencilOp",  // ZeroStencilOp,	KeepStencilOp,	ReplaceStencilOp,	IncrementStencilOp,	DecrementStencilOp,	IncrementWrapStencilOp,	DecrementWrapStencilOp,	InvertStencilOp
		stencilZFail: "ZeroStencilOp", // ZeroStencilOp,	KeepStencilOp,	ReplaceStencilOp,	IncrementStencilOp,	DecrementStencilOp,	IncrementWrapStencilOp,	DecrementWrapStencilOp,	InvertStencilOp
		stencilZPass: "KeepStencilOp", // ZeroStencilOp,	KeepStencilOp,	ReplaceStencilOp,	IncrementStencilOp,	DecrementStencilOp,	IncrementWrapStencilOp,	DecrementWrapStencilOp,	InvertStencilOp

		fog: true,
		// needsUpdate: true, // Handled internbally

		polygonOffset: true,
		polygonOffsetFactor: 2, // Integer
		polygonOffsetUnits: 2,  // Integer
		precision: "lowp",      // "highp", "mediump" or "lowp"
		premultipliedAlpha: true,
		dithering : true,
		
		shadowSide: "FrontSide", // BackSide, DoubleSide
		side: "FrontSide", // BackSide, DoubleSide

		toneMapped: true,
		vertexColors: false,
		visible: true,

	});
	
	return <>


		<Box
			size={[50, 50, 50]}
			material={materialProps}
		/>

		<div className="info">
			
			Color: 
				<input type="color" value={materialProps.color}
					onChange={ ({target: {value}}) => {	setMaterialProps({...materialProps, color: value}); } }
				/> <span className="show-value">[{materialProps.color}]</span><br />

			reflectivity: 
				<input value={materialProps.reflectivity} type="range" min="0" max="1" step="0.01"
					onChange={ ({target: {value}}) => {	setMaterialProps({...materialProps, reflectivity: parseFloat(value)}); } }
				/> <span className="show-value">[{materialProps.reflectivity}]</span><br />

			refractionRatio: 
				<input value={materialProps.refractionRatio} type="range" min="0" max="0.99" step="0.01"
					onChange={ ({target: {value}}) => {	setMaterialProps({...materialProps, refractionRatio: parseFloat(value)}); } }
				/> <span className="show-value">[{materialProps.refractionRatio}]</span><br />

			aoMapIntensity: 
				<input value={materialProps.aoMapIntensity} type="range" min="0" max="0.99" step="0.01"
					onChange={ ({target: {value}}) => {	setMaterialProps({...materialProps, aoMapIntensity: parseFloat(value)}); } }
				/> <span className="show-value">[{materialProps.aoMapIntensity}]</span><br />

			lightMapIntensity: 
				<input value={materialProps.lightMapIntensity} type="range" min="0" max="100" step="1"
					onChange={ ({target: {value}}) => {	setMaterialProps({...materialProps, lightMapIntensity: parseFloat(value)}); } }
				/> <span className="show-value">[{materialProps.lightMapIntensity}]</span><br />

			combine: 
				<select value={materialProps.combine} onChange={ e => setMaterialProps({ ...materialProps, combine: e.target.value }) }>
					<option value="MultiplyOperation">MultiplyOperation</option>
					<option value="MixOperation">MixOperation</option>
					<option value="AddOperation">AddOperation</option>
				</select> <span className="show-value">[{materialProps.combine}]</span><br />

			wireframe: 
				<input checked={materialProps.wireframe} type="checkbox"
					onChange={ e => setMaterialProps({...materialProps, wireframe: e.target.checked }) }
				/> <span className="show-value">[{materialProps.wireframe + ''}]</span><br />

			wireframeLinecap: 
				<select value={materialProps.combine} onChange={ e => setMaterialProps({ ...materialProps, wireframeLinecap: e.target.value }) }>
					<option value="round">round</option>
					<option value="butt">butt</option>
					<option value="square">square</option>
				</select> <span className="show-value">[{materialProps.wireframeLinecap}]</span><br />

			wireframeLinejoin: 
				<select value={materialProps.combine} onChange={ e => setMaterialProps({ ...materialProps, wireframeLinejoin: e.target.value }) }>
					<option value="round">round</option>
					<option value="butt">butt</option>
					<option value="square">square</option>
				</select> <span className="show-value">[{materialProps.wireframeLinejoin}]</span><br />

			wireframeLinewidth: 
				<input value={materialProps.wireframeLinewidth} type="range" min="0" max="20" step="0.01"
					onChange={ ({target: {value}}) => {	setMaterialProps({...materialProps, wireframeLinewidth: parseFloat(value)}); } }
				/> <span className="show-value">[{materialProps.wireframeLinewidth}]</span><br />

			<CommonMaterialPropertiesForm state={materialProps} setState={setMaterialProps} />


		</div>


		<div className="links-block">
			<a href="https://github.com/shstefanov/orbits-engine-examples/blob/master/example/scenes/materials/MeshBasicMaterial.jsx"> Code </a>
		</div>

	</>

}





