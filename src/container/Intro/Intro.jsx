import React from 'react';
import { BsPlayFill } from 'react-icons/bs';
import './Intro.css';
import { meal } from '../../constants';
import { useState } from 'react';

const Intro = () => {
	const [playVideo, setPlayVideo] = useState(false);
	const vidRef = React.useRef();

	const handleVideo = () => {
		setPlayVideo(!playVideo);

		if (playVideo) {
			vidRef.current.pause();
		} else {
			vidRef.current.play();
		}
	};

	return (
		<div className="app__video">
			<video
				ref={vidRef}
				src={meal}
				type="video/mp4"
				loop
				controls={false}
				muted
			/>
			<div
				className="app__video-overlay flex__center"
				onClick={handleVideo}
			>
				{!playVideo && (
					<div className="app__video-overlay_circle flex__center">
						<BsPlayFill color="#fff" fontSize={30} />
					</div>
				)}
			</div>
		</div>
	);
};
export default Intro;
