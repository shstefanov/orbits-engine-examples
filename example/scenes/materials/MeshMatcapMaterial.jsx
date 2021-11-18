import React, { useState } from "react";
import { Box, TorusKnot } from "@orbits/engine";
import CommonMaterialPropertiesForm from "./_CommonMaterialPropertiesForm.jsx";

export default () => {

	const [ materialProps, setMaterialProps ] = useState({
				
		type: "MeshMatcapMaterial",

		textures: {
			map: "/textures/brick/ruin_wall_01.png",
			alphaMap:  "/textures/test.png",
			bumpMap:  "/textures/test.png",
			displacementMap: "/textures/test.png",
			matcap: "/textures/test.png",
			normalMap:  "/textures/brick/ruin_wall_03_norm.png",
		},

		colors: {
			color: "#ff8888",
		},

		constants: {
			normalMapType: "TangentSpaceNormalMap", // TangentSpaceNormalMap,	ObjectSpaceNormalMap
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
			bumpScale: 0.5, // 0 - 1
			displacementScale: 2,
			displacementBias: 2,
			flatShading: false,
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

		vectors2: {
			normalScale: [1, 1],  // x, y
		},






	});
	
	return <>

		<TorusKnot
			scale={10}
			material={materialProps}
		/>


		<div className="info">
			bumpScale: 
				<input value={materialProps.values.bumpScale} type="range" min="0" max="1" step="0.01"
					onChange={ ({target: {value}}) => {	setMaterialProps({...materialProps, values: {
						...materialProps.values,
						bumpScale: parseFloat(value)
					}}); } }
				/> <span className="show-value">[{materialProps.values.bumpScale}]</span><br />

			Color: 
				<input type="color" value={materialProps.colors.color}
					onChange={ ({target: {value}}) => {	setMaterialProps({...materialProps, colors: {
						...materialProps.colors,
						color: value
					}}); } }
				/> <span className="show-value">[{materialProps.colors.color}]</span><br />

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

			flatShading: 
				<input checked={materialProps.values.flatShading} type="checkbox"
					onChange={ e => setMaterialProps({...materialProps, values: {
						...materialProps.values,
						flatShading: e.target.checked
					} }) }
				/> <span className="show-value">[{materialProps.values.flatShading + ''}]</span><br />

			normalMapType: 
				<select value={materialProps.constants.normalMapType} onChange={ e => setMaterialProps({ ...materialProps, constants: {
					...materialProps.constants,
					normalMapType: e.target.value
				} }) }>
					<option value="TangentSpaceNormalMap">TangentSpaceNormalMap</option>
					<option value="ObjectSpaceNormalMap">ObjectSpaceNormalMap</option>
				</select> <span className="show-value">[{materialProps.constants.normalMapType}]</span><br />

			normalScale X:
				<input value={materialProps.vectors2.normalScale[0]} type="range" min="0" max="20" step="0.02"
					onChange={ ({target: {value}}) => {	setMaterialProps({...materialProps, vectors2: {
						...materialProps.vectors2,
						normalScale: [parseFloat(value), materialProps.vectors2.normalScale[1]]
					}}); } }
				/> <span className="show-value">[{materialProps.vectors2.normalScale[0]}]</span><br />

			normalScale Y:
				<input value={materialProps.vectors2.normalScale[1]} type="range" min="0" max="20" step="0.02"
					onChange={ ({target: {value}}) => {	setMaterialProps({...materialProps, vectors2: {
						...materialProps.vectors2,
						normalScale: [materialProps.vectors2.normalScale[0], parseFloat(value)]
					}}); } }
				/> <span className="show-value">[{materialProps.vectors2.normalScale[1]}]</span><br />

			<CommonMaterialPropertiesForm state={materialProps} setState={setMaterialProps} />

		</div>


		<div className="links-block">
			<a href="https://github.com/shstefanov/orbits-engine-examples/blob/master/example/scenes/materials/MeshMatcapMaterial.jsx"> Code </a>
		</div>

	</>

}









