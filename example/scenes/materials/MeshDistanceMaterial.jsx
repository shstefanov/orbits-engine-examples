import React, { useState } from "react";
import { Box, PointLight } from "@orbits/engine";
import CommonMaterialPropertiesForm from "./_CommonMaterialPropertiesForm.jsx";

export default () => {

	const [ materialProps, setMaterialProps ] = useState({
				
		type: "MeshDistanceMaterial",

		// Textures
		alphaMap:  "/textures/test.png",
		displacementMap: "/textures/test.png",
		map:             "/textures/brick/ruin_wall_01.png",

		displacementScale: 2,
		displacementBias: 2,

		farDistance: 20,
		nearDistance: 20,

		fog: true,

		// TODO
		// referencePosition: Vector3()
	


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

	    {/* Used as white background */}
		<Box size={1000} color="#ffffff" material={{side: "BackSide"}} />

		<div className="info">

			displacementScale: 
				<input value={materialProps.displacementScale} type="range" min="0" max="20" step="0.01"
					onChange={ ({target: {value}}) => {	setMaterialProps({...materialProps, displacementScale: parseFloat(value)}); } }
				/> <span className="show-value">[{materialProps.displacementScale}]</span><br />

			displacementBias: 
				<input value={materialProps.displacementBias} type="range" min="0" max="20" step="0.01"
					onChange={ ({target: {value}}) => {	setMaterialProps({...materialProps, displacementBias: parseFloat(value)}); } }
				/> <span className="show-value">[{materialProps.displacementBias}]</span><br />

			farDistance: 
				<input value={materialProps.farDistance} type="range" min="0" max="100" step="0.01"
					onChange={ ({target: {value}}) => {	setMaterialProps({...materialProps, farDistance: parseFloat(value)}); } }
				/> <span className="show-value">[{materialProps.farDistance}]</span><br />

			nearDistance: 
				<input value={materialProps.nearDistance} type="range" min="0" max="100" step="0.01"
					onChange={ ({target: {value}}) => {	setMaterialProps({...materialProps, nearDistance: parseFloat(value)}); } }
				/> <span className="show-value">[{materialProps.nearDistance}]</span><br />


			fog: 
				<input checked={materialProps.fog} type="checkbox"
					onChange={ e => setMaterialProps({...materialProps, fog: e.target.checked }) }
				/> <span className="show-value">[{materialProps.fog + ''}]</span><br />

			<CommonMaterialPropertiesForm state={materialProps} setState={setMaterialProps} />


		</div>


		<div className="links-block">
			<a href="https://github.com/shstefanov/orbits-engine-examples/blob/master/example/scenes/materials/MeshDistanceMaterial.jsx"> Code </a>
		</div>

	</>

}







