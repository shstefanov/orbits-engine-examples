import React, { useState } from "react";
import { Box } from "@orbits/engine";


export default () => {

	const [onMouseOver,   setMouseOver]     = useState("");
	const [onMouseOut,    setMouseOut]      = useState("*");
	const [onMouseDown,   setMouseDown]     = useState("");
	const [onMouseUp,     setMouseUp]       = useState("*");
	const [onMouseMove,   setOnMouseMove]   = useState(0);

	const [onClick,       setOnClick]       = useState(0);
	const [onContext,     setOnContext]     = useState(0);
	const [onMiddleClick, setOnMiddleClick] = useState(0);
	const [onDoubleClick, setOnDoubleClick] = useState(0);

	return <>

		<Box
			size={[50, 25, 25]}
			material={{
				type:   "MeshBasicMaterial",
				colors: { color: "#aaaaaa" },
			}}
			onMouseOver={   e => { setMouseOver("*"); setMouseOut("");  } }
			onMouseOut={    e => { setMouseOver("");  setMouseOut("*"); } }
			onMouseDown={   e => { setMouseDown("*"); setMouseUp("");   } }
			onMouseUp={     e => { setMouseDown("");  setMouseUp("*");  } }
			onMouseMove={   e => { setOnMouseMove(onMouseMove + 1);     } }
			onClick={       e => setOnClick(onClick + 1)                  }
			onContext={     e => setOnContext(onContext + 1)              }
			onMiddleClick={ e => setOnMiddleClick(onMiddleClick + 1)      }
			onDoubleClick={ e => setOnDoubleClick(onDoubleClick + 1)      }
		/>

		<div className="info">
			<ul>
				<li>onMouseOver:{onMouseOver}</li>
				<li>onMouseOut:{onMouseOut}</li>
				<li>onMouseDown:{onMouseDown}</li>
				<li>onMouseUp:{onMouseUp}</li>
				<li>onMouseMove:{onMouseMove}</li>
				<li>onClick:{onClick}</li>
				<li>onContext:{onContext}</li>
				<li>onMiddleClick:{onMiddleClick}</li>
				<li>onDoubleClick:{onDoubleClick}</li>
			</ul>
		</div>


		<div className="links-block">
			<a href="https://github.com/shstefanov/orbits-engine-examples/blob/master/example/scenes/MouseEvents.jsx"> Source </a>
		</div>

	</> 



}

