import React from "react";
import { Audio, AudioEffect, PositionalAudio, Box } from "@orbits/engine";

// rock_breaking.flac

export default () => <>

	<Box
		size={50}
		hover={
			<AudioEffect
				src="/audio/button1.ogg"
				play={true}
				loop={false}
				volume={1}
			/>
		}
	>
		<PositionalAudio
			src="/audio/rock_breaking.flac"
			refDistance={50}
			play={true}
			loop={true}
			volume={0.5}
		/>

	</Box>
	
	<Audio
		src="/audio/MyVeryOwnDeadShip.ogg"
		play={true}
		loop={true}
		volume={0.5}
	/>


</>


