import React, { useState } from "react";
import { Box, PointLight } from "@orbits/engine";
import CommonMaterialPropertiesForm from "./_CommonMaterialPropertiesForm.jsx";

export default () => {

	const [ materialProps, setMaterialProps ] = useState({
				
		// type: "MeshStandardMaterial",
		type: "ShadowMaterial",

		colors: {
			color: "#0d0c0c",
		},

		constants: {
			blending: "NormalBlending", // NoBlending, NormalBlending, AdditiveBlending, SubtractiveBlending, MultiplyBlending, CustomBlending
			blendDst: "OneMinusSrcAlphaFactor",   // ZeroFactor,	OneFactor,	SrcColorFactor,	OneMinusSrcColorFactor,	SrcAlphaFactor,	OneMinusSrcAlphaFactor,	DstAlphaFactor,	OneMinusDstAlphaFactor,	DstColorFactor,	OneMinusDstColorFactor
			blendSrc: "SrcAlphaFactor", // ZeroFactor,	OneFactor,	SrcColorFactor,	OneMinusSrcColorFactor,	SrcAlphaFactor,	OneMinusSrcAlphaFactor,	DstAlphaFactor,	OneMinusDstAlphaFactor,	DstColorFactor,	OneMinusDstColorFactor,	SrcAlphaSaturateFactor
			blendSrcAlpha: "SrcAlphaFactor", // ZeroFactor,	OneFactor,	SrcColorFactor,	OneMinusSrcColorFactor,	SrcAlphaFactor,	OneMinusSrcAlphaFactor,	DstAlphaFactor,	OneMinusDstAlphaFactor,	DstColorFactor,	OneMinusDstColorFactor,	SrcAlphaSaturateFactor
			depthFunc: "LessEqualDepth", // NeverDepth, AlwaysDepth, EqualDepth, LessDepth, LessEqualDepth, GreaterEqualDepth, GreaterDepth, NotEqualDepth,
			stencilFunc: "AlwaysStencilFunc", // NeverStencilFunc, LessStencilFunc, EqualStencilFunc, LessEqualStencilFunc, GreaterStencilFunc, NotEqualStencilFunc, GreaterEqualStencilFunc, AlwaysStencilFunc, LineBasicMaterial
			stencilFail: "ZeroStencilOp",  // ZeroStencilOp,	KeepStencilOp,	ReplaceStencilOp,	IncrementStencilOp,	DecrementStencilOp,	IncrementWrapStencilOp,	DecrementWrapStencilOp,	InvertStencilOp
			stencilZFail: "ZeroStencilOp", // ZeroStencilOp,	KeepStencilOp,	ReplaceStencilOp,	IncrementStencilOp,	DecrementStencilOp,	IncrementWrapStencilOp,	DecrementWrapStencilOp,	InvertStencilOp
			stencilZPass: "KeepStencilOp", // ZeroStencilOp,	KeepStencilOp,	ReplaceStencilOp,	IncrementStencilOp,	DecrementStencilOp,	IncrementWrapStencilOp,	DecrementWrapStencilOp,	InvertStencilOp
			shadowSide: "FrontSide", // BackSide, DoubleSide
			side: "FrontSide", // BackSide, DoubleSide
		},

		values: {

			// Common for all materials
			// https://threejs.org/docs/?q=MeshBasic#api/en/materials/Material

			transparent: true,
			opacity: 1,
			alphaTest: 0, //   0 - 1
			// alphaToCoverage: 0.2, // Float
			

			blendDstAlpha: 2,
			blendEquation: 2,
			blendEquationAlpha: 2,
			clipIntersection: false,
			clippingPlanes: [], // TODO - array of THREE.Plane objects
			clipShadows: true,
			colorWrite: true,
			depthTest: true,
			depthWrite: true,
			stencilWrite: true,
			stencilWriteMask: 0xff, // bitmask
			stencilRef: 0, // Integer
			stencilFuncMask: 0xff, // bitmask


			fog: true,
			// needsUpdate: true, // Handled internbally

			polygonOffset: true,
			polygonOffsetFactor: 2, // Integer
			polygonOffsetUnits: 2,  // Integer
			precision: "lowp",      // "highp", "mediump" or "lowp"
			premultipliedAlpha: true,
			dithering : true,
			

			toneMapped: true,
			vertexColors: false,
			visible: true,

		},
	});

	return <>

		<PointLight
			// debug={true}
			castShadow={true}
			position={ { x: 0, y: 0, z: -30} }
			color="#ff0000"
			intensity={2}

		/>

		<Box
			castShadow={true}
			size={[10, 10, 3]}
			position={ { x: 0, y: 0, z: -15} }
			material={{type: "MeshBasicMaterial"}}
		/>

		
		<Box
			receiveShadow={true}
			size={[100, 100, 10]}
			// position={ { x: -50, y: -50, z: 0} }
			material={materialProps}
		/>



		<div className="info">
			color: 
				<input type="color" value={materialProps.colors.color}
					onChange={ ({target: {value}}) => {	setMaterialProps({...materialProps, colors: {
						...materialProps.colors,
						color: value
					}}); } }
				/> <span className="show-value">[{materialProps.colors.color}]</span><br />

			size: 
				<input value={materialProps.values.size} type="range" min="0" max="100" step="1"
					onChange={ ({target: {value}}) => {	setMaterialProps({...materialProps, values: {
						...materialProps.values,
						size: parseFloat(value)
					}}); } }
				/> <span className="show-value">[{materialProps.values.size}]</span><br />
			
			sizeAttenuation: 
				<input checked={materialProps.values.sizeAttenuation} type="checkbox"
					onChange={ e => setMaterialProps({...materialProps, values: {
						...materialProps.values,
						sizeAttenuation: e.target.checked
					} }) }
				/> <span className="show-value">[{materialProps.values.sizeAttenuation + ''}]</span><br />


			<CommonMaterialPropertiesForm state={materialProps} setState={setMaterialProps} />
		
		</div>

		<div className="links-block">
			<a href="https://github.com/shstefanov/orbits-engine-examples/blob/master/example/scenes/materials/ShadowMaterial.jsx"> Source </a>
		</div>

	</>

}







