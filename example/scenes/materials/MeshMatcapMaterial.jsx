import React, { useState } from "react";
import { Box, TorusKnot } from "@orbits/engine";
import CommonMaterialPropertiesForm from "./_CommonMaterialPropertiesForm.jsx";

export default () => {

	const [ materialProps, setMaterialProps ] = useState({
				
		type: "MeshMatcapMaterial",

		// Textures

		map: "/textures/brick/ruin_wall_01.png",
		alphaMap:  "/textures/test.png",
		bumpMap:  "/textures/test.png",
		displacementMap: "/textures/test.png",
		matcap: "/textures/test.png",
		normalMap:  "/textures/brick/ruin_wall_03_norm.png",


		bumpScale: 0.5, // 0 - 1
		color: "#ff8888",
		displacementScale: 2,
		displacementBias: 2,
		flatShading: false,

		normalMapType: "TangentSpaceNormalMap", // 
		normalScale: [1, 1],  // x, y


		// aoMap:     "/textures/brick/ruin_wall_03.png",
		// emissiveMap: "/textures/brick/ruin_wall_03.png",
		// envMap:    "/textures/brick/ruin_wall_03.png",
		// lightMap:  "/textures/brick/ruin_wall_03.png",
		// specularMap: "/textures/brick/ruin_wall_03.png",

		// // alphaMap:        "/textures/brick/ruin_wall_03_norm.png",
		// // displacementMap: "/textures/test.png",
		// // map:             "/textures/brick/ruin_wall_01.png",


		// aoMapIntensity: 0.5,     // 0 - 1
		// color: "#ff8888",
		// combine: "MultiplyOperation",  // MultiplyOperation, MixOperation, AddOperation
		// emissive: "#ff8888",
		// emissiveIntensity: 2,
		// reflectivity: 0.4,     // Float (0 - 1)
		// refractionRatio: 0.4,  // < 1

		// wireframe: false,
		// wireframeLinecap: "round", // "butt" and "square"
		// wireframeLinejoin : "round", // "butt", "mitter"
		// wireframeLinewidth: 2,

		// displacementScale: 2,
		// displacementBias: 2,

		// farDistance: 20,
		// nearDistance: 20,

		// fog: true,



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

		<TorusKnot
			scale={10}
			material={materialProps}
		/>


		<div className="info">
			bumpScale: 
				<input value={materialProps.bumpScale} type="range" min="0" max="1" step="0.01"
					onChange={ ({target: {value}}) => {	setMaterialProps({...materialProps, bumpScale: parseFloat(value)}); } }
				/> <span className="show-value">[{materialProps.bumpScale}]</span><br />

			Color: 
				<input type="color" value={materialProps.color}
					onChange={ ({target: {value}}) => {	setMaterialProps({...materialProps, color: value}); } }
				/> <span className="show-value">[{materialProps.color}]</span><br />

			displacementScale: 
				<input value={materialProps.displacementScale} type="range" min="0" max="20" step="0.01"
					onChange={ ({target: {value}}) => {	setMaterialProps({...materialProps, displacementScale: parseFloat(value)}); } }
				/> <span className="show-value">[{materialProps.displacementScale}]</span><br />

			displacementBias: 
				<input value={materialProps.displacementBias} type="range" min="0" max="20" step="0.01"
					onChange={ ({target: {value}}) => {	setMaterialProps({...materialProps, displacementBias: parseFloat(value)}); } }
				/> <span className="show-value">[{materialProps.displacementBias}]</span><br />

			flatShading: 
				<input checked={materialProps.flatShading} type="checkbox"
					onChange={ e => setMaterialProps({...materialProps, flatShading: e.target.checked }) }
				/> <span className="show-value">[{materialProps.flatShading + ''}]</span><br />

			normalMapType: 
				<select value={materialProps.normalMapType} onChange={ e => setMaterialProps({ ...materialProps, normalMapType: e.target.value }) }>
					<option value="TangentSpaceNormalMap">TangentSpaceNormalMap</option>
					<option value="ObjectSpaceNormalMap">ObjectSpaceNormalMap</option>
				</select> <span className="show-value">[{materialProps.normalMapType}]</span><br />

			normalScale X:
				<input value={materialProps.normalScale[0]} type="range" min="0" max="20" step="0.02"
					onChange={ ({target: {value}}) => {	setMaterialProps({...materialProps, normalScale: [parseFloat(value), materialProps.normalScale[1]]}); } }
				/> <span className="show-value">[{materialProps.normalScale[0]}]</span><br />

			normalScale Y:
				<input value={materialProps.normalScale[1]} type="range" min="0" max="20" step="0.02"
					onChange={ ({target: {value}}) => {	setMaterialProps({...materialProps, normalScale: [materialProps.normalScale[0], parseFloat(value)]}); } }
				/> <span className="show-value">[{materialProps.normalScale[1]}]</span><br />

{/*			aoMapIntensity: 
				<input value={materialProps.aoMapIntensity} type="range" min="0" max="0.99" step="0.01"
					onChange={ ({target: {value}}) => {	setMaterialProps({...materialProps, aoMapIntensity: parseFloat(value)}); } }
				/> <span className="show-value">[{materialProps.aoMapIntensity}]</span><br />
*/}
{/*			Color: 
				<input type="color" value={materialProps.color}
					onChange={ ({target: {value}}) => {	setMaterialProps({...materialProps, color: value}); } }
				/> <span className="show-value">[{materialProps.color}]</span><br />
*/}
{/*			combine: 
				<select value={materialProps.combine} onChange={ e => setMaterialProps({ ...materialProps, combine: e.target.value }) }>
					<option value="MultiplyOperation">MultiplyOperation</option>
					<option value="MixOperation">MixOperation</option>
					<option value="AddOperation">AddOperation</option>
				</select> <span className="show-value">[{materialProps.combine}]</span><br />
*/}
{/*			Emissive: 
				<input type="color" value={materialProps.emissive}
					onChange={ ({target: {value}}) => {	setMaterialProps({...materialProps, emissive: value}); } }
				/> <span className="show-value">[{materialProps.emissive}]</span><br />
*/}
{/*			emissiveIntensity: 
				<input value={materialProps.emissiveIntensity} type="range" min="0" max="100" step="0.01"
					onChange={ ({target: {value}}) => {	setMaterialProps({...materialProps, emissiveIntensity: parseFloat(value)}); } }
				/> <span className="show-value">[{materialProps.emissiveIntensity}]</span><br />
*/}
{/*			reflectivity: 
				<input value={materialProps.reflectivity} type="range" min="0" max="1" step="0.01"
					onChange={ ({target: {value}}) => {	setMaterialProps({...materialProps, reflectivity: parseFloat(value)}); } }
				/> <span className="show-value">[{materialProps.reflectivity}]</span><br />
*/}
{/*			refractionRatio: 
				<input value={materialProps.refractionRatio} type="range" min="0" max="0.99" step="0.01"
					onChange={ ({target: {value}}) => {	setMaterialProps({...materialProps, refractionRatio: parseFloat(value)}); } }
				/> <span className="show-value">[{materialProps.refractionRatio}]</span><br />
*/}
{/*			wireframe: 
				<input checked={materialProps.wireframe} type="checkbox"
					onChange={ e => setMaterialProps({...materialProps, wireframe: e.target.checked }) }
				/> <span className="show-value">[{materialProps.wireframe + ''}]</span><br />
*/}
{/*			wireframeLinecap: 
				<select value={materialProps.combine} onChange={ e => setMaterialProps({ ...materialProps, wireframeLinecap: e.target.value }) }>
					<option value="round">round</option>
					<option value="butt">butt</option>
					<option value="square">square</option>
				</select> <span className="show-value">[{materialProps.wireframeLinecap}]</span><br />
*/}
{/*			wireframeLinejoin: 
				<select value={materialProps.combine} onChange={ e => setMaterialProps({ ...materialProps, wireframeLinejoin: e.target.value }) }>
					<option value="round">round</option>
					<option value="butt">butt</option>
					<option value="square">square</option>
				</select> <span className="show-value">[{materialProps.wireframeLinejoin}]</span><br />
*/}
{/*			wireframeLinewidth: 
				<input value={materialProps.wireframeLinewidth} type="range" min="0" max="20" step="0.01"
					onChange={ ({target: {value}}) => {	setMaterialProps({...materialProps, wireframeLinewidth: parseFloat(value)}); } }
				/> <span className="show-value">[{materialProps.wireframeLinewidth}]</span><br />
*/}

			<CommonMaterialPropertiesForm state={materialProps} setState={setMaterialProps} />


		</div>


		<div className="links-block">
			<a href="https://github.com/shstefanov/orbits-engine-examples/blob/master/example/scenes/materials/MeshMatcapMaterial.jsx"> Code </a>
		</div>

	</>

}









