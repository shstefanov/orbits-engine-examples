import React, { useState } from "react";
import { Box, TorusKnot } from "@orbits/engine";
import CommonMaterialPropertiesForm from "./_CommonMaterialPropertiesForm.jsx";

export default () => {

	const [ materialProps, setMaterialProps ] = useState({
				
		type: "MeshPhongMaterial",

		textures: {
			aoMap:     "/textures/brick/ruin_wall_03.png",
			map: "/textures/brick/ruin_wall_01.png",
			normalMap:  "/textures/brick/ruin_wall_03_norm.png",
			alphaMap:  "/textures/brick/ruin_wall_03_rough.png",
			displacementMap: "/textures/test.png",
			bumpMap:  "/textures/brick/ruin_wall_03_height.png",
			emissiveMap: "/textures/brick/ruin_wall_03.png",
			envMap:  "/textures/bumpmap.jpg",
			lightMap:  "/textures/test.png",
			specularMap:  "/textures/brick/ruin_wall_03_norm.png",
		},
		
		colors: {
			color:    "#ff8888",
			emissive: "#ff8888",
			specular: "#ff8888",
		},

		constants: {
			combine: "MultiplyOperation",  // MultiplyOperation, MixOperation, AddOperation
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
			aoMapIntensity: 0.5,     // 0 - 1
			bumpScale: 0.5, // 0 - 1
			displacementScale: 2,
			displacementBias: 2,
			emissiveIntensity: 0.5,
			flatShading: false,
			lightMapIntensity: 100,  // Float
			reflectivity: 0.4,     // Float (0 - 1)
			refractionRatio: 0.4,  // < 1
			shininess: 30,
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

		}




	});
	
	return <>

		<TorusKnot
			scale={10}
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

			emissive: 
				<input type="color" value={materialProps.colors.emissive}
					onChange={ ({target: {value}}) => {	setMaterialProps({...materialProps, colors: {
						...materialProps.colors,
						emissive: value
					}}); } }
				/> <span className="show-value">[{materialProps.colors.emissive}]</span><br />
			
			specular: 
				<input type="color" value={materialProps.colors.specular}
					onChange={ ({target: {value}}) => {	setMaterialProps({...materialProps, colors: {
						...materialProps.colors,
						specular: value
					}}); } }
				/> <span className="show-value">[{materialProps.colors.specular}]</span><br />

			aoMapIntensity: 
				<input value={materialProps.values.aoMapIntensity} type="range" min="0" max="0.99" step="0.01"
					onChange={ ({target: {value}}) => {	setMaterialProps({...materialProps, values: {
						...materialProps.values,
						aoMapIntensity: parseFloat(value)
					}}); } }
				/> <span className="show-value">[{materialProps.values.aoMapIntensity}]</span><br />

			bumpScale:
				<input value={materialProps.values.bumpScale} type="range" min="0" max="1" step="0.01"
					onChange={ ({target: {value}}) => {	setMaterialProps({...materialProps, values: {
						...materialProps.values,
						bumpScale: parseFloat(value)
					}}); } }
				/> <span className="show-value">[{materialProps.values.bumpScale}]</span><br />
			
			combine: 
				<select value={materialProps.constants.combine} onChange={ e => setMaterialProps({ ...materialProps, constants: {
					...materialProps.constants,
					combine: e.target.value
				} }) }>
					<option value="MultiplyOperation">MultiplyOperation</option>
					<option value="MixOperation">MixOperation</option>
					<option value="AddOperation">AddOperation</option>
				</select> <span className="show-value">[{materialProps.constants.combine}]</span><br />

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

			emissiveIntensity: 
				<input value={materialProps.values.emissiveIntensity} type="range" min="0" max="2" step="0.01"
					onChange={ ({target: {value}}) => {	setMaterialProps({...materialProps, values: {
						...materialProps.values,
						emissiveIntensity: parseFloat(value)
					}}); } }
				/> <span className="show-value">[{materialProps.values.emissiveIntensity}]</span><br />

			flatShading: 
				<input checked={materialProps.values.flatShading} type="checkbox"
					onChange={ e => setMaterialProps({...materialProps, values: {
						...materialProps.values,
						flatShading: e.target.checked
					} }) }
				/> <span className="show-value">[{materialProps.values.flatShading + ''}]</span><br />

			lightMapIntensity: 
				<input value={materialProps.values.lightMapIntensity} type="range" min="0" max="100" step="1"
					onChange={ ({target: {value}}) => {	setMaterialProps({...materialProps, values: {
						...materialProps.values,
						lightMapIntensity: parseFloat(value)
					}}); } }
				/> <span className="show-value">[{materialProps.values.lightMapIntensity}]</span><br />

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

			reflectivity: 
				<input value={materialProps.values.reflectivity} type="range" min="0" max="1" step="0.01"
					onChange={ ({target: {value}}) => {	setMaterialProps({...materialProps, values: {
						...materialProps.values,
						reflectivity: parseFloat(value)
					}}); } }
				/> <span className="show-value">[{materialProps.values.reflectivity}]</span><br />

			refractionRatio: 
				<input value={materialProps.values.refractionRatio} type="range" min="0" max="0.99" step="0.01"
					onChange={ ({target: {value}}) => {	setMaterialProps({...materialProps, values: {
						...materialProps.values,
						refractionRatio: parseFloat(value)
					}}); } }
				/> <span className="show-value">[{materialProps.values.refractionRatio}]</span><br />

			shininess: 
				<input value={materialProps.values.shininess} type="range" min="0" max="1000" step="0.01"
					onChange={ ({target: {value}}) => {	setMaterialProps({...materialProps, values: {
						...materialProps.values,
						shininess: parseFloat(value)
					}}); } }
				/> <span className="show-value">[{materialProps.values.shininess}]</span><br />

			wireframe: 
				<input checked={materialProps.values.wireframe} type="checkbox"
					onChange={ e => setMaterialProps({...materialProps, values: {
						...materialProps.values,
						wireframe: e.target.checked
					} }) }
				/> <span className="show-value">[{materialProps.values.wireframe + ''}]</span><br />

			wireframeLinecap: 
				<select value={materialProps.values.wireframeLinecap} onChange={ e => setMaterialProps({ ...materialProps, values: {
					...materialProps.values,
					wireframeLinecap: e.target.value
				} }) }>
					<option value="round">round</option>
					<option value="butt">butt</option>
					<option value="square">square</option>
				</select> <span className="show-value">[{materialProps.values.wireframeLinecap}]</span><br />

			wireframeLinejoin: 
				<select value={materialProps.values.wireframeLinejoin} onChange={ e => setMaterialProps({ ...materialProps, values: {
					...materialProps.values,
					wireframeLinejoin: e.target.value
				} }) }>
					<option value="round">round</option>
					<option value="butt">butt</option>
					<option value="square">square</option>
				</select> <span className="show-value">[{materialProps.values.wireframeLinejoin}]</span><br />

			wireframeLinewidth: 
				<input value={materialProps.values.wireframeLinewidth} type="range" min="0" max="20" step="0.01"
					onChange={ ({target: {value}}) => {	setMaterialProps({...materialProps, values: {
						...materialProps.values,
						wireframeLinewidth: parseFloat(value)
					}}); } }
				/> <span className="show-value">[{materialProps.values.wireframeLinewidth}]</span><br />

			<CommonMaterialPropertiesForm state={materialProps} setState={setMaterialProps} />

		</div>


		<div className="links-block">
			<a href="https://github.com/shstefanov/orbits-engine-examples/blob/master/example/scenes/materials/MeshPhongMaterial.jsx"> Code </a>
		</div>

	</>

}









