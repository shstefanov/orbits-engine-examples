import React, { useState } from "react";

export default ({state, setState}) => {
	const materialProps = state;
	const setMaterialProps = setState;

	return <>
		
		<h2>Common Material Attributes</h2>

		transparent: 
			<input checked={materialProps.values.transparent} type="checkbox"
				onChange={ e => setMaterialProps({...materialProps, values: {
					...materialProps.values,
					transparent: e.target.checked,
				} }) }
			/> <span className="show-value">[{materialProps.values.transparent + ''}]</span><br />
		
		opacity: 
			<input value={materialProps.values.opacity} type="range" min="0" max="1" step="0.01"
				onChange={ ({target: {value}}) => {	setMaterialProps({...materialProps, values: {
					...materialProps.values,
					opacity: parseFloat(value)
				}}); } }
			/> <span className="show-value">[{materialProps.values.opacity}]</span><br />

		alphaTest:
			<input value={materialProps.values.alphaTest} type="range" min="0" max="1" step="0.01"
				onChange={ ({target: {value}}) => {	setMaterialProps({...materialProps, values: {
					...materialProps.values,
					alphaTest: parseFloat(value)
				}}); } }
			/> <span className="show-value">[{materialProps.values.alphaTest}]</span><br />
		
		alphaToCoverage: 
			<input value={materialProps.values.alphaToCoverage} type="range" min="0" max="1" step="0.01"
				onChange={ ({target: {value}}) => {	setMaterialProps({...materialProps, values: {
					...materialProps.values,
					alphaToCoverage: parseFloat(value)
				}}); } }
			/> <span className="show-value">[{materialProps.values.alphaToCoverage}]</span><br />


		blending: 
			<select value={materialProps.constants.blending} onChange={ e => setMaterialProps({ ...materialProps, constants: {
				...materialProps.constants,
				blending: e.target.value,
			} }) }>
				<option value="NoBlending">NoBlending</option>
				<option value="NormalBlending">NormalBlending</option>
				<option value="AdditiveBlending">AdditiveBlending</option>
				<option value="SubtractiveBlending">SubtractiveBlending</option>
				<option value="MultiplyBlending">MultiplyBlending</option>
				<option value="CustomBlending">CustomBlending</option>
			</select> <span className="show-value">[{materialProps.constants.blending}]</span><br />

		blendDst: 
			<select value={materialProps.constants.blendDst} onChange={ e => setMaterialProps({ ...materialProps, constants: {
				...materialProps.constants,
				blendDst: e.target.value
			} }) }>
				<option value="ZeroFactor">ZeroFactor</option>
				<option value="OneFactor">OneFactor</option>
				<option value="SrcColorFactor">SrcColorFactor</option>
				<option value="OneMinusSrcColorFactor">OneMinusSrcColorFactor</option>
				<option value="SrcAlphaFactor">SrcAlphaFactor</option>
				<option value="OneMinusSrcAlphaFactor">OneMinusSrcAlphaFactor</option>
				<option value="DstAlphaFactor">DstAlphaFactor</option>
				<option value="OneMinusDstAlphaFactor">OneMinusDstAlphaFactor</option>
				<option value="DstColorFactor">DstColorFactor</option>
				<option value="OneMinusDstColorFactor">OneMinusDstColorFactor</option>
			</select> <span className="show-value">[{materialProps.constants.blendDst}]</span><br />

		blendDstAlpha (???): 
			<input value={materialProps.values.blendDstAlpha} type="range" min="0" max="20" step="0.01"
				onChange={ ({target: {value}}) => {	setMaterialProps({...materialProps, values: {
					...materialProps.values,
					blendDstAlpha: parseFloat(value)
				}}); } }
			/> <span className="show-value">[{materialProps.values.blendDstAlpha}]</span><br />

		blendEquation (???): 
			<input value={materialProps.values.blendEquation} type="range" min="0" max="20" step="0.01"
				onChange={ ({target: {value}}) => {	setMaterialProps({...materialProps, values: {
					...materialProps.values,
					blendEquation: parseFloat(value),
				}}); } }
			/> <span className="show-value">[{materialProps.values.blendEquation}]</span><br />

		blendEquationAlpha (???): 
			<input value={materialProps.values.blendEquationAlpha} type="range" min="0" max="20" step="0.01"
				onChange={ ({target: {value}}) => {	setMaterialProps({...materialProps, values: {
					...materialProps.values,
					blendEquationAlpha: parseFloat(value)
				}}); } }
			/> <span className="show-value">[{materialProps.values.blendEquationAlpha}]</span><br />

		blendSrc: 
			<select value={materialProps.constants.blendSrc} onChange={ e => setMaterialProps({ ...materialProps, constants: {
				...materialProps.constants,
				blendSrc: e.target.value
			} }) }>
				<option value="ZeroFactor">ZeroFactor</option>
				<option value="OneFactor">OneFactor</option>
				<option value="SrcColorFactor">SrcColorFactor</option>
				<option value="OneMinusSrcColorFactor">OneMinusSrcColorFactor</option>
				<option value="SrcAlphaFactor">SrcAlphaFactor</option>
				<option value="OneMinusSrcAlphaFactor">OneMinusSrcAlphaFactor</option>
				<option value="DstAlphaFactor">DstAlphaFactor</option>
				<option value="OneMinusDstAlphaFactor">OneMinusDstAlphaFactor</option>
				<option value="DstColorFactor">DstColorFactor</option>
				<option value="OneMinusDstColorFactor">OneMinusDstColorFactor</option>
				<option value="SrcAlphaSaturateFactor">SrcAlphaSaturateFactor</option>
			</select> <span className="show-value">[{materialProps.constants.blendSrc}]</span><br />

		blendSrcAlpha: 
			<select value={materialProps.constants.blendSrcAlpha} onChange={ e => setMaterialProps({ ...materialProps, constants: {
				...materialProps.constants,
				blendSrcAlpha: e.target.value
			} }) }>
				<option value="ZeroFactor">ZeroFactor</option>
				<option value="OneFactor">OneFactor</option>
				<option value="SrcColorFactor">SrcColorFactor</option>
				<option value="OneMinusSrcColorFactor">OneMinusSrcColorFactor</option>
				<option value="SrcAlphaFactor">SrcAlphaFactor</option>
				<option value="OneMinusSrcAlphaFactor">OneMinusSrcAlphaFactor</option>
				<option value="DstAlphaFactor">DstAlphaFactor</option>
				<option value="OneMinusDstAlphaFactor">OneMinusDstAlphaFactor</option>
				<option value="DstColorFactor">DstColorFactor</option>
				<option value="OneMinusDstColorFactor">OneMinusDstColorFactor</option>
				<option value="SrcAlphaSaturateFactor">SrcAlphaSaturateFactor</option>
			</select> <span className="show-value">[{materialProps.constants.blendSrcAlpha}]</span><br />

		clipIntersection: 
			<input value={materialProps.values.clipIntersection} type="checkbox"
				onChange={ e => setMaterialProps({...materialProps, values: {
					...materialProps.values,
					clipIntersection: e.target.checked
				} }) }
			/> <span className="show-value">[{materialProps.values.clipIntersection + ''}]</span><br />

		clippingPlanes (!) <br />
		
		defines (!) <br />

		clipShadows: 
			<input checked={materialProps.values.clipShadows} type="checkbox"
				onChange={ e => setMaterialProps({...materialProps, values: {
					...materialProps.values,
					clipShadows: e.target.checked
				} }) }
			/> <span className="show-value">[{materialProps.values.clipShadows + ''}]</span><br />
		
		colorWrite: 
			<input checked={materialProps.values.colorWrite} type="checkbox"
				onChange={ e => setMaterialProps({...materialProps, values: {
					...materialProps.values,
					colorWrite: e.target.checked
				} }) }
			/> <span className="show-value">[{materialProps.values.colorWrite + ''}]</span><br />

		depthFunc: 
			<select value={materialProps.constants.depthFunc} onChange={ e => setMaterialProps({ ...materialProps, constants: {
				...materialProps.constants,
				depthFunc: e.target.value
			} }) }>
				<option value="NeverDepth">NeverDepth</option>
				<option value="AlwaysDepth">AlwaysDepth</option>
				<option value="EqualDepth">EqualDepth</option>
				<option value="LessDepth">LessDepth</option>
				<option value="LessEqualDepth">LessEqualDepth</option>
				<option value="GreaterEqualDepth">GreaterEqualDepth</option>
				<option value="GreaterDepth">GreaterDepth</option>
				<option value="NotEqualDepth">NotEqualDepth</option>
			</select> <span className="show-value">[{materialProps.constants.depthFunc}]</span><br />

		depthTest: 
			<input checked={materialProps.values.depthTest} type="checkbox"
				onChange={ e => setMaterialProps({...materialProps, values: {
					...materialProps.values,
					depthTest: e.target.checked
				} }) }
			/> <span className="show-value">[{materialProps.values.depthTest + ''}]</span><br />
		
		depthWrite: 
			<input checked={materialProps.values.depthWrite} type="checkbox"
				onChange={ e => setMaterialProps({...materialProps, values: {
					...materialProps.values,
					depthWrite: e.target.checked
				} }) }
			/> <span className="show-value">[{materialProps.values.depthWrite + ''}]</span><br />

		stencilWrite: 
			<input checked={materialProps.values.stencilWrite} type="checkbox"
				onChange={ e => setMaterialProps({...materialProps, values: {
					...materialProps.values,
					stencilWrite: e.target.checked
				} }) }
			/> <span className="show-value">[{materialProps.values.stencilWrite + ''}]</span><br />

		stencilWriteMask: 
			<input value={materialProps.values.stencilWriteMask.toString(16)} type="text"
				onChange={ e => {
					if(e.target.value.match(/^[0-9a-z]{0,2}$/)){
						setMaterialProps({...materialProps, values: {
							...materialProps.values,
							stencilWriteMask: parseInt("0x" + (e.target.value || "00"), 16)
						} })
					}
				} }
			/> <span className="show-value">[{"0x" + materialProps.values.stencilWriteMask.toString(16)}]</span><br />

		stencilFunc: 
			<select value={materialProps.constants.stencilFunc} onChange={ e => setMaterialProps({ ...materialProps, constants: {
				...materialProps.constants,
				stencilFunc: e.target.value
			} }) }>
				<option value="NeverStencilFunc">NeverStencilFunc</option>
				<option value="LessStencilFunc">LessStencilFunc</option>
				<option value="EqualStencilFunc">EqualStencilFunc</option>
				<option value="LessEqualStencilFunc">LessEqualStencilFunc</option>
				<option value="GreaterStencilFunc">GreaterStencilFunc</option>
				<option value="NotEqualStencilFunc">NotEqualStencilFunc</option>
				<option value="GreaterEqualStencilFunc">GreaterEqualStencilFunc</option>
				<option value="AlwaysStencilFunc">AlwaysStencilFunc</option>
				<option value="LineBasicMaterial">LineBasicMaterial</option>
			</select> <span className="show-value">[{materialProps.constants.stencilFunc}]</span><br />
		
		stencilRef: 
			<input value={materialProps.values.stencilRef} type="range" min="0" max="100" step="1"
				onChange={ ({target: {value}}) => {	setMaterialProps({...materialProps, values: {
					...materialProps.values,
					stencilRef: parseFloat(value)
				}}); } }
			/> <span className="show-value">[{materialProps.values.stencilRef}]</span><br />

		stencilFuncMask: 
			<input value={materialProps.values.stencilFuncMask.toString(16)} type="text"
				onChange={ e => {
					if(e.target.value.match(/^[0-9a-z]{0,2}$/)){
						setMaterialProps({...materialProps, values: {
							...materialProps.values,
							stencilFuncMask: parseInt("0x" + (e.target.value || "00"), 16),
						}});
					}
				} }
			/> <span className="show-value">[{"0x" + materialProps.values.stencilFuncMask.toString(16)}]</span><br />

		stencilFail: 
			<select value={materialProps.constants.stencilFail} onChange={ e => setMaterialProps({ ...materialProps, constants: {
				...materialProps.constants,
				stencilFail: e.target.value
			} }) }>
				<option value="ZeroStencilOp">ZeroStencilOp</option>
				<option value="KeepStencilOp">KeepStencilOp</option>
				<option value="ReplaceStencilOp">ReplaceStencilOp</option>
				<option value="IncrementStencilOp">IncrementStencilOp</option>
				<option value="DecrementStencilOp">DecrementStencilOp</option>
				<option value="IncrementWrapStencilOp">IncrementWrapStencilOp</option>
				<option value="DecrementWrapStencilOp">DecrementWrapStencilOp</option>
				<option value="InvertStencilOp">InvertStencilOp</option>
			</select> <span className="show-value">[{materialProps.constants.stencilFail}]</span><br />

		stencilZFail: 
			<select value={materialProps.constants.stencilZFail} onChange={ e => setMaterialProps({ ...materialProps, constants: {
				...materialProps.constants,
				stencilZFail: e.target.value
			} }) }>
				<option value="ZeroStencilOp">ZeroStencilOp</option>
				<option value="KeepStencilOp">KeepStencilOp</option>
				<option value="ReplaceStencilOp">ReplaceStencilOp</option>
				<option value="IncrementStencilOp">IncrementStencilOp</option>
				<option value="DecrementStencilOp">DecrementStencilOp</option>
				<option value="IncrementWrapStencilOp">IncrementWrapStencilOp</option>
				<option value="DecrementWrapStencilOp">DecrementWrapStencilOp</option>
				<option value="InvertStencilOp">InvertStencilOp</option>
			</select> <span className="show-value">[{materialProps.constants.stencilZFail}]</span><br />
		
		stencilZPass: 
			<select value={materialProps.constants.stencilZPass} onChange={ e => setMaterialProps({ ...materialProps, constants: {
				...materialProps.constants,
				stencilZPass: e.target.value
			} }) }>
				<option value="ZeroStencilOp">ZeroStencilOp</option>
				<option value="KeepStencilOp">KeepStencilOp</option>
				<option value="ReplaceStencilOp">ReplaceStencilOp</option>
				<option value="IncrementStencilOp">IncrementStencilOp</option>
				<option value="DecrementStencilOp">DecrementStencilOp</option>
				<option value="IncrementWrapStencilOp">IncrementWrapStencilOp</option>
				<option value="DecrementWrapStencilOp">DecrementWrapStencilOp</option>
				<option value="InvertStencilOp">InvertStencilOp</option>
			</select> <span className="show-value">[{materialProps.constants.stencilZPass}]</span><br />
	
		fog: 
			<input checked={materialProps.values.fog} type="checkbox"
				onChange={ e => setMaterialProps({...materialProps, values: {
					...materialProps.values,
					fog: e.target.checked
				} }) }
			/> <span className="show-value">[{materialProps.values.fog + ''}]</span><br />

		polygonOffset: 
			<input checked={materialProps.values.polygonOffset} type="checkbox"
				onChange={ e => setMaterialProps({...materialProps, values: {
					...materialProps.values,
					polygonOffset: e.target.checked
				} }) }
			/> <span className="show-value">[{materialProps.values.polygonOffset + ''}]</span><br />

		polygonOffsetFactor: 
			<input value={materialProps.values.polygonOffsetFactor} type="range" min="0" max="100" step="1"
				onChange={ ({target: {value}}) => {	setMaterialProps({...materialProps, values: {
					...materialProps.values,
					polygonOffsetFactor: parseFloat(value)
				}}); } }
			/> <span className="show-value">[{materialProps.values.polygonOffsetFactor}]</span><br />

		polygonOffsetUnits: 
			<input value={materialProps.values.polygonOffsetUnits} type="range" min="0" max="100" step="1"
				onChange={ ({target: {value}}) => {	setMaterialProps({...materialProps, values: {
					...materialProps.values,
					polygonOffsetUnits: parseFloat(value)
				}}); } }
			/> <span className="show-value">[{materialProps.values.polygonOffsetUnits}]</span><br />

		precision: 
			<select value={materialProps.values.precision} onChange={ e => setMaterialProps({ ...materialProps, values: {
				...materialProps.values,
				precision: e.target.value
			} }) }>
				<option value="highp">highp</option>
				<option value="mediump">mediump</option>
				<option value="lowp">lowp</option>
			</select> <span className="show-value">[{materialProps.values.precision}]</span><br />

		premultipliedAlpha: 
			<input checked={materialProps.values.premultipliedAlpha} type="checkbox"
				onChange={ e => setMaterialProps({...materialProps, values: {
					...materialProps.values,
					premultipliedAlpha: e.target.checked
				} }) }
			/> <span className="show-value">[{materialProps.values.premultipliedAlpha + ''}]</span><br />

		dithering: 
			<input checked={materialProps.values.dithering} type="checkbox"
				onChange={ e => setMaterialProps({...materialProps, values: {
					...materialProps.values,
					dithering: e.target.checked
				} }) }
			/> <span className="show-value">[{materialProps.values.dithering + ''}]</span><br />

		shadowSide: 
			<select value={materialProps.constants.shadowSide} onChange={ e => setMaterialProps({ ...materialProps, constants: {
				...materialProps.constants,
				shadowSide: e.target.value
			} }) }>
				<option value="FrontSide">FrontSide</option>
				<option value="BackSide">BackSide</option>
				<option value="DoubleSide">DoubleSide</option>
			</select> <span className="show-value">[{materialProps.constants.shadowSide}]</span><br />
		
		side: 
			<select value={materialProps.constants.side} onChange={ e => setMaterialProps({ ...materialProps, constants: {
				...materialProps.constants,
				side: e.target.value,
			} }) }>
				<option value="FrontSide">FrontSide</option>
				<option value="BackSide">BackSide</option>
				<option value="DoubleSide">DoubleSide</option>
			</select> <span className="show-value">[{materialProps.constants.side}]</span><br />

		toneMapped: 
			<input checked={materialProps.values.toneMapped} type="checkbox"
				onChange={ e => setMaterialProps({...materialProps, values: {
					...materialProps.values,
					toneMapped: e.target.checked
				} }) }
			/> <span className="show-value">[{materialProps.values.toneMapped + ''}]</span><br />

		vertexColors: 
			<input checked={materialProps.values.vertexColors} type="checkbox"
				onChange={ e => setMaterialProps({...materialProps, values: {
					...materialProps.values,
					vertexColors: e.target.checked
				} }) }
			/> <span className="show-value">[{materialProps.values.vertexColors + ''}]</span><br />

		visible: 
			<input checked={materialProps.values.visible} type="checkbox"
				onChange={ e => setMaterialProps({...materialProps, values: {
					...materialProps.values,
					visible: e.target.checked
				} }) }
			/> <span className="show-value">[{materialProps.values.visible + ''}]</span><br />



	</>
}