import React, { useState } from "react";

export default ({state, setState}) => {
	const materialProps = state;
	const setMaterialProps = setState;

	return <>
		
		<h2>Common Material Attributes</h2>

		transparent: 
			<input checked={materialProps.transparent} type="checkbox"
				onChange={ e => setMaterialProps({...materialProps, transparent: e.target.checked }) }
			/> <span className="show-value">[{materialProps.transparent + ''}]</span><br />
		
		opacity: 
			<input value={materialProps.opacity} type="range" min="0" max="1" step="0.01"
				onChange={ ({target: {value}}) => {	setMaterialProps({...materialProps, opacity: parseFloat(value)}); } }
			/> <span className="show-value">[{materialProps.opacity}]</span><br />

		alphaTest:
			<input value={materialProps.alphaTest} type="range" min="0" max="1" step="0.01"
				onChange={ ({target: {value}}) => {	setMaterialProps({...materialProps, alphaTest: parseFloat(value)}); } }
			/> <span className="show-value">[{materialProps.alphaTest}]</span><br />
		
		alphaToCoverage: [{materialProps.alphaToCoverage}]
			<input value={materialProps.alphaToCoverage} type="range" min="0" max="1" step="0.01"
				onChange={ ({target: {value}}) => {	setMaterialProps({...materialProps, alphaToCoverage: parseFloat(value)}); } }
			/> <span className="show-value">[{materialProps.alphaToCoverage}]</span><br />


		blending: 
			<select value={materialProps.blending} onChange={ e => setMaterialProps({ ...materialProps, blending: e.target.value }) }>
				<option value="NoBlending">NoBlending</option>
				<option value="NormalBlending">NormalBlending</option>
				<option value="AdditiveBlending">AdditiveBlending</option>
				<option value="SubtractiveBlending">SubtractiveBlending</option>
				<option value="MultiplyBlending">MultiplyBlending</option>
				<option value="CustomBlending">CustomBlending</option>
			</select> <span className="show-value">[{materialProps.blending}]</span><br />

		blendDst: 
			<select value={materialProps.blendDst} onChange={ e => setMaterialProps({ ...materialProps, blendDst: e.target.value }) }>
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
			</select> <span className="show-value">[{materialProps.blendDst}]</span><br />

		blendDstAlpha (???): 
			<input value={materialProps.blendDstAlpha} type="range" min="0" max="20" step="0.01"
				onChange={ ({target: {value}}) => {	setMaterialProps({...materialProps, blendDstAlpha: parseFloat(value)}); } }
			/> <span className="show-value">[{materialProps.blendDstAlpha}]</span><br />

		blendEquation (???): 
			<input value={materialProps.blendEquation} type="range" min="0" max="20" step="0.01"
				onChange={ ({target: {value}}) => {	setMaterialProps({...materialProps, blendEquation: parseFloat(value)}); } }
			/> <span className="show-value">[{materialProps.blendEquation}]</span><br />

		blendEquationAlpha (???): 
			<input value={materialProps.blendEquationAlpha} type="range" min="0" max="20" step="0.01"
				onChange={ ({target: {value}}) => {	setMaterialProps({...materialProps, blendEquationAlpha: parseFloat(value)}); } }
			/> <span className="show-value">[{materialProps.blendEquationAlpha}]</span><br />

		blendSrc: 
			<select value={materialProps.blendSrc} onChange={ e => setMaterialProps({ ...materialProps, blendSrc: e.target.value }) }>
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
			</select> <span className="show-value">[{materialProps.blendSrc}]</span><br />

		blendSrcAlpha: 
			<select value={materialProps.blendSrcAlpha} onChange={ e => setMaterialProps({ ...materialProps, blendSrcAlpha: e.target.value }) }>
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
			</select> <span className="show-value">[{materialProps.blendSrcAlpha}]</span><br />

		clipIntersection: 
			<input value={materialProps.clipIntersection} type="checkbox"
				onChange={ e => setMaterialProps({...materialProps, clipIntersection: e.target.checked }) }
			/> <span className="show-value">[{materialProps.clipIntersection + ''}]</span><br />

		clippingPlanes (!) <br />
		
		defines (!) <br />

		clipShadows: 
			<input checked={materialProps.clipShadows} type="checkbox"
				onChange={ e => setMaterialProps({...materialProps, clipShadows: e.target.checked }) }
			/> <span className="show-value">[{materialProps.clipShadows + ''}]</span><br />
		
		colorWrite: 
			<input checked={materialProps.colorWrite} type="checkbox"
				onChange={ e => setMaterialProps({...materialProps, colorWrite: e.target.checked }) }
			/> <span className="show-value">[{materialProps.colorWrite + ''}]</span><br />

		depthFunc: 
			<select value={materialProps.depthFunc} onChange={ e => setMaterialProps({ ...materialProps, depthFunc: e.target.value }) }>
				<option value="NeverDepth">NeverDepth</option>
				<option value="AlwaysDepth">AlwaysDepth</option>
				<option value="EqualDepth">EqualDepth</option>
				<option value="LessDepth">LessDepth</option>
				<option value="LessEqualDepth">LessEqualDepth</option>
				<option value="GreaterEqualDepth">GreaterEqualDepth</option>
				<option value="GreaterDepth">GreaterDepth</option>
				<option value="NotEqualDepth">NotEqualDepth</option>
			</select> <span className="show-value">[{materialProps.depthFunc}]</span><br />

		depthTest: 
			<input checked={materialProps.depthTest} type="checkbox"
				onChange={ e => setMaterialProps({...materialProps, depthTest: e.target.checked }) }
			/> <span className="show-value">[{materialProps.depthTest + ''}]</span><br />
		
		depthWrite: 
			<input checked={materialProps.depthWrite} type="checkbox"
				onChange={ e => setMaterialProps({...materialProps, depthWrite: e.target.checked }) }
			/> <span className="show-value">[{materialProps.depthWrite + ''}]</span><br />

		stencilWrite: 
			<input checked={materialProps.stencilWrite} type="checkbox"
				onChange={ e => setMaterialProps({...materialProps, stencilWrite: e.target.checked }) }
			/> <span className="show-value">[{materialProps.stencilWrite + ''}]</span><br />

		stencilWriteMask: 
			<input value={materialProps.stencilWriteMask.toString(16)} type="text"
				onChange={ e => {
					if(e.target.value.match(/^[0-9a-z]{0,2}$/)){
						setMaterialProps({...materialProps, stencilWriteMask: parseInt("0x" + (e.target.value || "00"), 16) })
					}
				} }
			/> <span className="show-value">[{"0x" + materialProps.stencilWriteMask.toString(16)}]</span><br />

		stencilFunc: 
			<select value={materialProps.stencilFunc} onChange={ e => setMaterialProps({ ...materialProps, stencilFunc: e.target.value }) }>
				<option value="NeverStencilFunc">NeverStencilFunc</option>
				<option value="LessStencilFunc">LessStencilFunc</option>
				<option value="EqualStencilFunc">EqualStencilFunc</option>
				<option value="LessEqualStencilFunc">LessEqualStencilFunc</option>
				<option value="GreaterStencilFunc">GreaterStencilFunc</option>
				<option value="NotEqualStencilFunc">NotEqualStencilFunc</option>
				<option value="GreaterEqualStencilFunc">GreaterEqualStencilFunc</option>
				<option value="AlwaysStencilFunc">AlwaysStencilFunc</option>
				<option value="LineBasicMaterial">LineBasicMaterial</option>
			</select> <span className="show-value">[{materialProps.stencilFunc}]</span><br />
		
		stencilRef: 
			<input value={materialProps.stencilRef} type="range" min="0" max="100" step="1"
				onChange={ ({target: {value}}) => {	setMaterialProps({...materialProps, stencilRef: parseFloat(value)}); } }
			/> <span className="show-value">[{materialProps.stencilRef}]</span><br />

		stencilFuncMask: 
			<input value={materialProps.stencilFuncMask.toString(16)} type="text"
				onChange={ e => {
					if(e.target.value.match(/^[0-9a-z]{0,2}$/)){
						setMaterialProps({...materialProps, stencilFuncMask: parseInt("0x" + (e.target.value || "00"), 16) })
					}
				} }
			/> <span className="show-value">[{"0x" + materialProps.stencilFuncMask.toString(16)}]</span><br />

		stencilFail: 
			<select value={materialProps.stencilFail} onChange={ e => setMaterialProps({ ...materialProps, stencilFail: e.target.value }) }>
				<option value="ZeroStencilOp">ZeroStencilOp</option>
				<option value="KeepStencilOp">KeepStencilOp</option>
				<option value="ReplaceStencilOp">ReplaceStencilOp</option>
				<option value="IncrementStencilOp">IncrementStencilOp</option>
				<option value="DecrementStencilOp">DecrementStencilOp</option>
				<option value="IncrementWrapStencilOp">IncrementWrapStencilOp</option>
				<option value="DecrementWrapStencilOp">DecrementWrapStencilOp</option>
				<option value="InvertStencilOp">InvertStencilOp</option>
			</select> <span className="show-value">[{materialProps.stencilFail}]</span><br />

		stencilZFail: 
			<select value={materialProps.stencilZFail} onChange={ e => setMaterialProps({ ...materialProps, stencilZFail: e.target.value }) }>
				<option value="ZeroStencilOp">ZeroStencilOp</option>
				<option value="KeepStencilOp">KeepStencilOp</option>
				<option value="ReplaceStencilOp">ReplaceStencilOp</option>
				<option value="IncrementStencilOp">IncrementStencilOp</option>
				<option value="DecrementStencilOp">DecrementStencilOp</option>
				<option value="IncrementWrapStencilOp">IncrementWrapStencilOp</option>
				<option value="DecrementWrapStencilOp">DecrementWrapStencilOp</option>
				<option value="InvertStencilOp">InvertStencilOp</option>
			</select> <span className="show-value">[{materialProps.stencilZFail}]</span><br />
		
		stencilZPass: 
			<select value={materialProps.stencilZPass} onChange={ e => setMaterialProps({ ...materialProps, stencilZPass: e.target.value }) }>
				<option value="ZeroStencilOp">ZeroStencilOp</option>
				<option value="KeepStencilOp">KeepStencilOp</option>
				<option value="ReplaceStencilOp">ReplaceStencilOp</option>
				<option value="IncrementStencilOp">IncrementStencilOp</option>
				<option value="DecrementStencilOp">DecrementStencilOp</option>
				<option value="IncrementWrapStencilOp">IncrementWrapStencilOp</option>
				<option value="DecrementWrapStencilOp">DecrementWrapStencilOp</option>
				<option value="InvertStencilOp">InvertStencilOp</option>
			</select> <span className="show-value">[{materialProps.stencilZPass}]</span><br />
	
		fog: 
			<input checked={materialProps.fog} type="checkbox"
				onChange={ e => setMaterialProps({...materialProps, fog: e.target.checked }) }
			/> <span className="show-value">[{materialProps.fog + ''}]</span><br />

		polygonOffset: 
			<input checked={materialProps.polygonOffset} type="checkbox"
				onChange={ e => setMaterialProps({...materialProps, polygonOffset: e.target.checked }) }
			/> <span className="show-value">[{materialProps.polygonOffset + ''}]</span><br />

		polygonOffsetFactor: 
			<input value={materialProps.polygonOffsetFactor} type="range" min="0" max="100" step="1"
				onChange={ ({target: {value}}) => {	setMaterialProps({...materialProps, polygonOffsetFactor: parseFloat(value)}); } }
			/> <span className="show-value">[{materialProps.polygonOffsetFactor}]</span><br />

		polygonOffsetUnits: 
			<input value={materialProps.polygonOffsetUnits} type="range" min="0" max="100" step="1"
				onChange={ ({target: {value}}) => {	setMaterialProps({...materialProps, polygonOffsetUnits: parseFloat(value)}); } }
			/> <span className="show-value">[{materialProps.polygonOffsetUnits}]</span><br />

		precision: 
			<select value={materialProps.precision} onChange={ e => setMaterialProps({ ...materialProps, precision: e.target.value }) }>
				<option value="highp">highp</option>
				<option value="mediump">mediump</option>
				<option value="lowp">lowp</option>
			</select> <span className="show-value">[{materialProps.precision}]</span><br />

		premultipliedAlpha: 
			<input checked={materialProps.premultipliedAlpha} type="checkbox"
				onChange={ e => setMaterialProps({...materialProps, premultipliedAlpha: e.target.checked }) }
			/> <span className="show-value">[{materialProps.premultipliedAlpha + ''}]</span><br />

		dithering: 
			<input checked={materialProps.dithering} type="checkbox"
				onChange={ e => setMaterialProps({...materialProps, dithering: e.target.checked }) }
			/> <span className="show-value">[{materialProps.dithering + ''}]</span><br />

		shadowSide: 
			<select value={materialProps.shadowSide} onChange={ e => setMaterialProps({ ...materialProps, shadowSide: e.target.value }) }>
				<option value="FrontSide">FrontSide</option>
				<option value="BackSide">BackSide</option>
				<option value="DoubleSide">DoubleSide</option>
			</select> <span className="show-value">[{materialProps.shadowSide}]</span><br />
		
		side: 
			<select value={materialProps.side} onChange={ e => setMaterialProps({ ...materialProps, side: e.target.value }) }>
				<option value="FrontSide">FrontSide</option>
				<option value="BackSide">BackSide</option>
				<option value="DoubleSide">DoubleSide</option>
			</select> <span className="show-value">[{materialProps.side}]</span><br />

		toneMapped: 
			<input checked={materialProps.toneMapped} type="checkbox"
				onChange={ e => setMaterialProps({...materialProps, toneMapped: e.target.checked }) }
			/> <span className="show-value">[{materialProps.toneMapped + ''}]</span><br />

		vertexColors: 
			<input checked={materialProps.vertexColors} type="checkbox"
				onChange={ e => setMaterialProps({...materialProps, vertexColors: e.target.checked }) }
			/> <span className="show-value">[{materialProps.vertexColors + ''}]</span><br />

		visible: 
			<input checked={materialProps.visible} type="checkbox"
				onChange={ e => setMaterialProps({...materialProps, visible: e.target.checked }) }
			/> <span className="show-value">[{materialProps.visible + ''}]</span><br />



	</>
}