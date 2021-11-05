import React, { useState } from "react";
import { Box } from "@orbits/engine";

export default () => {

	const [color, setColor] = useState("#888888");

	return <>
		<div className="info">
			Color: <input type="color" value={color}
				onChange={ ({target: {value}}) => {
					setColor(value);
				} }
			/>			
		</div>
		
		<Box
			color={color}
			size={[50, 25, 25]}
		/>
	</>



}


