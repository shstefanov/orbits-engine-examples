



```jsx
import { OrbitsScene } from "@orbits/engine";
ReactDOM.render(
	<OrbitsScene

		renderInterval={40} // optional, default: 40 (ms)

		timer={ undefined } // provide own timer instance or default (time speeed: 0) will be used

		controlsOptions={{ // for all options - https://www.npmjs.com/package/camera-controls
			distance: 150
		}}
	>
		{/* 3D objects components or normal html components mixed here */}
	</OrbitsScene>
, document.getElementById("app")
);
```






## Credits

Skybox by:
https://wwwtyro.net/

Audio by:
https://opengameart.org/content/background-space-track
https://opengameart.org/content/ui-sounds
https://opengameart.org/content/rockbreaking

