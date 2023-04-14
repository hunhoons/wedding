import React from "react";
import ocean from "../images/videos/ocean.mp4";

const Contents = () =>{
	return (
		<div id="content" className="content main">
			<section className="section visual">
				<div className="video-wrap">
					<video loop autoPlay muted playsInline>
						<source src={ocean} type="video/mp4"></source>
					</video>
				</div>
			</section>
		</div>
	);
}

export default Contents;


