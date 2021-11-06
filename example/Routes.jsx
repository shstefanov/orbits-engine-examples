import React from "react";
import { 
	BrowserRouter as Router,
	Route,
	Switch,
	Link
} from "react-router-dom";

import Basics           from "./scenes/Basics"
import MouseEvents      from "./scenes/MouseEvents"
import Hover            from "./scenes/Hover"

import Position         from "./scenes/Position"
import Rotation         from "./scenes/Rotation"
import Scale            from "./scenes/Scale"
import ScaleNumber      from "./scenes/ScaleNumber"
import Color            from "./scenes/Color"

import Transition       from "./scenes/Transition"
import Period           from "./scenes/Period"

import AmbientLightExample  from "./scenes/AmbientLight"
import PointLightExample  from "./scenes/PointLight"
import SpotLightExample  from "./scenes/SpotLight"
import DirectionalLightExample  from "./scenes/DirectionalLight"


import Fog  from "./scenes/Fog"

import ObjLoader  from "./scenes/ObjLoader"


import BoxGeometry from "./scenes/geometries/BoxGeometry"
import CircleGeometry from "./scenes/geometries/CircleGeometry"
import ConeGeometry from "./scenes/geometries/ConeGeometry"
import CylinderGeometry from "./scenes/geometries/CylinderGeometry"
import DodecahedronGeometry from "./scenes/geometries/DodecahedronGeometry"
import ExtrudeGeometry from "./scenes/geometries/ExtrudeGeometry"
import IcosahedronGeometry from "./scenes/geometries/IcosahedronGeometry"
import LatheGeometry from "./scenes/geometries/LatheGeometry"
import OctahedronGeometry from "./scenes/geometries/OctahedronGeometry"
import PlaneGeometry from "./scenes/geometries/PlaneGeometry"
import PolyhedronGeometry from "./scenes/geometries/PolyhedronGeometry"
import RingGeometry from "./scenes/geometries/RingGeometry"
import ShapeGeometry from "./scenes/geometries/ShapeGeometry"
import SphereGeometry from "./scenes/geometries/SphereGeometry"
import TetrahedronGeometry from "./scenes/geometries/TetrahedronGeometry"
import TorusGeometry from "./scenes/geometries/TorusGeometry"
import TorusKnotGeometry from "./scenes/geometries/TorusKnotGeometry"
import TubeGeometry from "./scenes/geometries/TubeGeometry"

import Audio from "./scenes/Audio"



export default ({children}) => <Router>

	{children}

	<Switch>

		<Route path="/basics">       <Basics      /> </Route>
		<Route path="/mouse-events"> <MouseEvents /> </Route>
		<Route path="/hover">        <Hover       /> </Route>
		<Route path="/position">     <Position    /> </Route>
		<Route path="/rotation">     <Rotation    /> </Route>
		<Route path="/scale">        <Scale       /> </Route>
		<Route path="/scale_number"> <ScaleNumber /> </Route>
		<Route path="/color">        <Color       /> </Route>
		<Route path="/transition">   <Transition  /> </Route>
		<Route path="/period">       <Period      /> </Route>

		<Route path="/ambient-light"><AmbientLightExample /> </Route>
		<Route path="/point-light"><PointLightExample /> </Route>
		<Route path="/spot-light"><SpotLightExample /> </Route>
		<Route path="/directional-light"><DirectionalLightExample /> </Route>

		<Route path="/fog"><Fog /> </Route>

		<Route path="/audio"><Audio /> </Route>

		<Route path="/obj-loader"><ObjLoader /> </Route>


		<Route path="/box-geometry">           <BoxGeometry />          </Route>
		<Route path="/circle-geometry">        <CircleGeometry />       </Route>
		<Route path="/cone-geometry">          <ConeGeometry />         </Route>
		<Route path="/cylinder-geometry">      <CylinderGeometry />     </Route>
		<Route path="/dodecahedron-geometry">  <DodecahedronGeometry /> </Route>
		<Route path="/extrude-geometry">       <ExtrudeGeometry />      </Route>
		<Route path="/icosahedron-geometry">   <IcosahedronGeometry />  </Route>
		<Route path="/lathe-geometry">         <LatheGeometry />        </Route>
		<Route path="/octahedron-geometry">    <OctahedronGeometry />   </Route>
		<Route path="/plane-geometry">         <PlaneGeometry />        </Route>
		<Route path="/polyhedron-geometry">    <PolyhedronGeometry />   </Route>
		<Route path="/ring-geometry">          <RingGeometry />         </Route>
		<Route path="/shape-geometry">         <ShapeGeometry />        </Route>
		<Route path="/sphere-geometry">        <SphereGeometry />       </Route>
		<Route path="/tetrahedron-geometry">   <TetrahedronGeometry />  </Route>
		<Route path="/torus-geometry">         <TorusGeometry />        </Route>
		<Route path="/torusknot-geometry">     <TorusKnotGeometry />    </Route>
		<Route path="/tube-geometry">          <TubeGeometry />         </Route>

	</Switch>
</Router>