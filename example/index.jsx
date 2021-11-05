import React        from "react"
import ReactDOM     from "react-dom"

import { 
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
	Link,
	useHistory
} from "react-router-dom";

import { OrbitsScene, AmbientLight, PointLight } from "@orbits/engine";

import SkyBox from "./SkyBox";
import Cube from "./Cube";



// import {AmbientLight}     from "./AmbientLight";
// import PointLight       from "./PointLight";


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


function Redirector({children}){
	if(window.location.href.indexOf("~") > -1){
		const history = useHistory();
		history.push(location.search.replace(/\?q=/, '').replace(/~/g, "/"));		
	}
	return children;
}


ReactDOM.render(<>
	<Router>

		<Redirector>
			

			<OrbitsScene
				
				renderInterval={10} // optional, default: 40 (ms)
				
				// onUpdateControls={ e => console.log("onUpdateControls", e.target.distance) }

				controlsOptions={{
					distance: 150
				}}

			>

				<div style={{
					position: "fixed",
					width: "100%",
					height: "0%",
					overflow: "visible",
					zIndex: "1"
				}}>
					

			
					<h1 className="nowrap">Orbits Engine Example</h1>
					<ul className="examples-menu" style={{
						display:         "block",
						overflow:        "auto",
						maxHeight:       "400px",
						width:           "150px",
						backgroundColor: "black",
					}}>
						<li><Link className="nowrap" to="/basics">       Basics         </Link> </li>

						<hr/>
						<h2>Mouse Interaction:</h2>

						<li><Link className="nowrap" to="/mouse-events"> Mouse Events   </Link> </li>
						<li><Link className="nowrap" to="/hover">        Hover          </Link> </li>

						<hr/>
						<h2>Transforms:</h2>

						<li><Link className="nowrap" to="/position">     Position       </Link> </li>
						<li><Link className="nowrap" to="/rotation">     Rotation       </Link> </li>
						<li><Link className="nowrap" to="/scale">        Scale          </Link> </li>
						<li><Link className="nowrap" to="/scale_number"> Scale (number) </Link> </li>
						<li><Link className="nowrap" to="/color">        Color          </Link> </li>

						<hr/>
						<h2>Transitions:</h2>

						<li><Link className="nowrap" to="/transition">   Transition     </Link> </li>
						<li><Link className="nowrap" to="/period">       Period         </Link> </li>
						
						<hr/>
						<h2>Lights:</h2>
						<li><Link className="nowrap" to="/ambient-light"> Ambient Light  </Link> </li>
						<li><Link className="nowrap" to="/point-light"> Point Light  </Link> </li>
						<li><Link className="nowrap" to="/spot-light"> Spot Light  </Link> </li>
						<li><Link className="nowrap" to="/directional-light"> Directional Light  </Link> </li>


						<hr/>
						<h2>Fog:</h2>
						<li><Link className="nowrap" to="/fog"> Fog  </Link> </li>

						<hr/>
						<h2>Audio:</h2>
						<li><Link className="nowrap" to="/audio"> Audio  </Link> </li>

						<hr/>
						<h2>Loaders:</h2>
						<li><Link className="nowrap" to="/obj-loader"> OBJ Loader </Link> </li>



						<hr/>
						<h2>Geometries:</h2>

						<li><Link className="nowrap" to="/box-geometry">          BoxGeometry          </Link> </li>
						<li><Link className="nowrap" to="/circle-geometry">       CircleGeometry       </Link> </li>
						<li><Link className="nowrap" to="/cone-geometry">         ConeGeometry         </Link> </li>
						<li><Link className="nowrap" to="/cylinder-geometry">     CylinderGeometry     </Link> </li>
						<li><Link className="nowrap" to="/dodecahedron-geometry"> DodecahedronGeometry </Link> </li>
						<li><Link className="nowrap" to="/extrude-geometry">      ExtrudeGeometry      </Link> </li>
						<li><Link className="nowrap" to="/icosahedron-geometry">  IcosahedronGeometry  </Link> </li>
						<li><Link className="nowrap" to="/lathe-geometry">        LatheGeometry        </Link> </li>
						<li><Link className="nowrap" to="/octahedron-geometry">   OctahedronGeometry   </Link> </li>
						<li><Link className="nowrap" to="/plane-geometry">        PlaneGeometry        </Link> </li>
						<li><Link className="nowrap" to="/polyhedron-geometry">   PolyhedronGeometry   </Link> </li>
						<li><Link className="nowrap" to="/ring-geometry">         RingGeometry         </Link> </li>
						<li><Link className="nowrap" to="/shape-geometry">        ShapeGeometry        </Link> </li>
						<li><Link className="nowrap" to="/sphere-geometry">       SphereGeometry       </Link> </li>
						<li><Link className="nowrap" to="/tetrahedron-geometry">  TetrahedronGeometry  </Link> </li>
						<li><Link className="nowrap" to="/torus-geometry">        TorusGeometry        </Link> </li>
						<li><Link className="nowrap" to="/torusknot-geometry">    TorusKnotGeometry    </Link> </li>
						<li><Link className="nowrap" to="/tube-geometry">         TubeGeometry         </Link> </li>

					</ul>

					<SkyBox />
					<AmbientLight color={"ffffff"} intensity={0.5} />
					<PointLight 
						position={{x: 100, y: 100, z: 100}}
						color={"#ffffff"} intensity={1}
					/>

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


						<Route path="/xbasic---">
							<Cube
								cursor="pointer"
								debug={true}
								size={50}
								color={0x00ffff}

								onClick={e => console.log("click")}
								onDoubleClick={e => console.log("double click")}
								onMouseOver={e => console.log("ener")}
								onMouseOut={e => console.log("leave")}
								onMouseOut={e => console.log("leave")}

								hover={
									<h2>
										Hover :)

										<Cube

											position={{x:10, y: 0, z: 0}}
											
											size={55}

											color={0xff00ff}

										/>



									</h2>
								}

							/>
						</Route>
						


						<Route path="/link2"> <h3>Link 2</h3> </Route>
						<Route path="/link3"> <h3>Link 3</h3> </Route>
					</Switch>
					
				</div>
			</OrbitsScene>


			
		</Redirector>


	</Router>		
</>, document.getElementById("app") );