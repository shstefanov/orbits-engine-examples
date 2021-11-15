import React, { Fragment, useState } from "react";
import { Box, CameraControls } from "@orbits/engine";


export default () => {
	const [enabled, setenabled] = useState(true);
	const [boundaryEnclosesCamera, setboundaryEnclosesCamera] = useState(false);
	const [verticalDragToForward, setverticalDragToForward] = useState(false);
	const [dollyToCursor, setdollyToCursor] = useState(true);

	const [distance, setdistance] = useState(100);
	const [maxDistance, setmaxDistance] = useState(4000);
	const [minDistance, setminDistance] = useState(20);
	
	const [polarAngle, setPolarAngle] = useState(Math.PI / 2);
	const [maxPolarAngle, setmaxPolarAngle] = useState( Math.PI);
	const [minPolarAngle, setminPolarAngle] = useState( Math.PI / 2);
	
	const [azimuthAngle, setAzimuthAngle] = useState(0);
	const [minAzimuthAngle, setminAzimuthAngle] = useState( -100);
	const [maxAzimuthAngle, setmaxAzimuthAngle] = useState( 100);

	const [zoom, setZoom] = useState(0);
	const [minZoom, setMinZoom] = useState( 1 );
	const [maxZoom, setMaxZoom] = useState( 10 );

	const [boundaryFriction, setboundaryFriction] = useState( 0);
	const [dampingFactor, setdampingFactor] = useState(20);
	const [draggingDampingFactor, setdraggingDampingFactor] = useState(10);
	const [azimuthRotateSpeed, setazimuthRotateSpeed] = useState(1);
	const [polarRotateSpeed, setpolarRotateSpeed] = useState(1);
	const [dollySpeed, setdollySpeed] = useState(0.2);
	const [truckSpeed, settruckSpeed] = useState(2.0);


	return <>

		<CameraControls 
			
			distance={distance}
			polarAngle={polarAngle}
			azimuthAngle={azimuthAngle}

			zoom={zoom}
			minZoom={minZoom}
			maxZoom={maxZoom}


			enabled={enabled}
			boundaryEnclosesCamera={boundaryEnclosesCamera}
			verticalDragToForward={verticalDragToForward}
			dollyToCursor={dollyToCursor}
			
			maxDistance={maxDistance}
			minDistance={minDistance}
			maxPolarAngle={maxPolarAngle}
			minPolarAngle={minPolarAngle}
			maxAzimuthAngle={maxAzimuthAngle}
			minAzimuthAngle={minAzimuthAngle}
			boundaryFriction={boundaryFriction}
			dampingFactor={dampingFactor}
			draggingDampingFactor={draggingDampingFactor}
			azimuthRotateSpeed={azimuthRotateSpeed}
			polarRotateSpeed={polarRotateSpeed}
			dollySpeed={dollySpeed}
			truckSpeed={truckSpeed}


			onUpdateControls={ e => {
				setdistance(e.target.distance);
				setPolarAngle(e.target.polarAngle);
				setAzimuthAngle(e.target.azimuthAngle);
			}}

			/*
				CameraControls.ACTION.ROTATE* 
				CameraControls.ACTION.TRUCK 
				CameraControls.ACTION.DOLLY 
				CameraControls.ACTION.ZOOM 
				CameraControls.ACTION.NONE
			*/


			// TODO: stringify options:
			// mouseButtons={{
			// 	left:   CameraControls.ACTION.ROTATE,
			// 	middle: CameraControls.ACTION.NONE,
			// 	right:  CameraControls.ACTION.TRUCK,
			// 	wheel:  CameraControls.ACTION.DOLLY
			// }}

			// touches={{
			// 	one:   CameraControls.ACTION.ROTATE,
			// 	two:   CameraControls.ACTION.DOLLY,
			// 	three: CameraControls.ACTION.NONE,
			// }}

		/>


		<Box
			size={[50, 25, 25]}
			color={"#999999"}
		/>
		
		<Box
			position={{x: 50, y: 25, z: 25}}
			size={[50, 25, 25]}
			color={"#999999"}
		/>


		<div className="info">
			{[
				["enabled", enabled, setenabled],
				["boundaryEnclosesCamera", boundaryEnclosesCamera, setboundaryEnclosesCamera],
				["verticalDragToForward", verticalDragToForward, setverticalDragToForward],
				["dollyToCursor", dollyToCursor, setdollyToCursor],

			].map( ([name, value, setter], i) => <Fragment key={`checkbox-${i}`}>
				{name}: 
				<input type="checkbox" checked={value} onChange={ e => setter(e.target.checked) } />
			</Fragment>	)}

			<br />

			{[
				// NAME                   VALUE                  SETTER                       MIN           MAX          STEP


				["distance",              distance,              setdistance,                 minDistance,          maxDistance,  1       ],
				["maxDistance",           maxDistance,           setmaxDistance,              300,          500,         10   ],
				["minDistance",           minDistance,           setminDistance,              20,           50,          1    ],
				
				["zoom",                  zoom,                  setZoom,                     minZoom, maxZoom, 0.01 ],
				["minZoom",               minZoom,               setMinZoom,                  1,            10,         0.01  ],
				["maxZoom",               maxZoom,               setMaxZoom,                  1,            10,         0.01  ],


				["polarAngle",            polarAngle,            setPolarAngle,               minPolarAngle, maxPolarAngle, 0.01 ],
				["minPolarAngle",         minPolarAngle,         setminPolarAngle,            0,            Math.PI,     0.01 ],
				["maxPolarAngle",         maxPolarAngle,         setmaxPolarAngle,            0,            Math.PI,     0.01 ],
				

				["azimuthAngle",          azimuthAngle,          setAzimuthAngle,             minAzimuthAngle, maxAzimuthAngle, 0.01 ],
				["minAzimuthAngle",       minAzimuthAngle,       setminAzimuthAngle,          -100, 100, 0.01 ],
				["maxAzimuthAngle",       maxAzimuthAngle,       setmaxAzimuthAngle,          -100, 100, 0.01 ],
				


				["boundaryFriction",      boundaryFriction,      setboundaryFriction,         0,            100,         1    ],
				["dampingFactor",         dampingFactor,         setdampingFactor,            0,            100,         1    ],
				["draggingDampingFactor", draggingDampingFactor, setdraggingDampingFactor,    0,            100,         1    ],
				["azimuthRotateSpeed",    azimuthRotateSpeed,    setazimuthRotateSpeed,       0.5,          5,           0.01 ],
				["polarRotateSpeed",      polarRotateSpeed,      setpolarRotateSpeed,         0.5,          5,           0.01 ],
				["dollySpeed",            dollySpeed,            setdollySpeed,               0.1,          5,           0.01 ],
				["truckSpeed",            truckSpeed,            settruckSpeed,               0.1,          5,           0.01 ],

			].map( ([name, value, setter, min, max, step], i) => <label
					key={`range-${i}`}
				 	style={{float: "right", clear: "right"}}
				 >
				{name} [{value}]: 
				<input
					type="range"
					{...({value, min, max, step})}
					onChange={ e => setter(parseFloat(e.target.value)) } />
			</label>	)}



		</div>

		<div className="links-block">
			<a href="https://github.com/shstefanov/orbits-engine-examples/blob/master/example/scenes/CameraControls.jsx"> Source </a>
		</div>
	</>



}


