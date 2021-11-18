import React, { useState } from "react";
import { Box, PointLight } from "@orbits/engine";
import CommonMaterialPropertiesForm from "./_CommonMaterialPropertiesForm.jsx";

export default () => {

	const [ materialProps, setMaterialProps ] = useState({
				
		type: "MeshDistanceMaterial",

		textures: {
			map:             "/textures/brick/ruin_wall_01.png",
			alphaMap:  "/textures/test.png",
			displacementMap: "/textures/test.png",
		},

		constants: {
			blending: "NoBlending", // NoBlending, NormalBlending, AdditiveBlending, SubtractiveBlending, MultiplyBlending, CustomBlending
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
			displacementScale: 2,
			displacementBias: 2,
			farDistance: 20,
			nearDistance: 20,
			fog: true,
			transparent: false,
			opacity: 0.95,
			alphaTest: 0.5, //   0 - 1
			alphaToCoverage: 0.2, // Float
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

		<Box
			size={[50, 50, 50]}
			material={materialProps}
		/>

	    {/* Used as white background */}
		<Box size={1000} color="#ffffff" material={{constants: {side: "BackSide"}}} />

		<div className="info">

			displacementScale: 
				<input value={materialProps.values.displacementScale} type="range" min="0" max="20" step="0.01"
					onChange={ ({target: {value}}) => {	setMaterialProps({...materialProps, values: {
						...materialProps.values,
						displacementScale: parseFloat(value)
					}}); } }
				/> <span className="show-value">[{materialProps.values.displacementScale}]</span><br />

			displacementBias: 
				<input value={materialProps.values.displacementBias} type="range" min="0" max="20" step="0.01"
					onChange={ ({target: {value}}) => {	setMaterialProps({...materialProps, values: {
						...materialProps.values,
						displacementBias: parseFloat(value)
					}}); } }
				/> <span className="show-value">[{materialProps.values.displacementBias}]</span><br />

			farDistance: 
				<input value={materialProps.values.farDistance} type="range" min="0" max="100" step="0.01"
					onChange={ ({target: {value}}) => {	setMaterialProps({...materialProps, values: {
						...materialProps.values,
						farDistance: parseFloat(value)
					}}); } }
				/> <span className="show-value">[{materialProps.values.farDistance}]</span><br />

			nearDistance: 
				<input value={materialProps.values.nearDistance} type="range" min="0" max="100" step="0.01"
					onChange={ ({target: {value}}) => {	setMaterialProps({...materialProps, values: {
						...materialProps.values,
						nearDistance: parseFloat(value)
					}}); } }
				/> <span className="show-value">[{materialProps.values.nearDistance}]</span><br />


			fog: 
				<input checked={materialProps.values.fog} type="checkbox"
					onChange={ e => setMaterialProps({...materialProps, values: {
						...materialProps.values,
						fog: e.target.checked
					} }) }
				/> <span className="show-value">[{materialProps.values.fog + ''}]</span><br />

			<CommonMaterialPropertiesForm state={materialProps} setState={setMaterialProps} />


		</div>


		<div className="links-block">
			<a href="https://github.com/shstefanov/orbits-engine-examples/blob/master/example/scenes/materials/MeshDistanceMaterial.jsx"> Code </a>
		</div>

	</>

}







