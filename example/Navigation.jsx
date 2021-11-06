import React from "react";
import { 
	BrowserRouter as Router,
	Route,
	Switch,
	Link
} from "react-router-dom";

export default () => <>
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

</>