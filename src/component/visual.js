import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Visual = ()=>{
	gsap.registerPlugin(ScrollTrigger);
	// let ref = useRef(null);
	// let elem = ref.current;
    useEffect(() => {
		
    }, [])


	return (
		<section className="section visual">
			<div className="visual-wrap">
				<div className="video-wrap">
					{/* <video preload='auto' muted autoPlay loop>
						<source src=""></source>
					</video> */}
				</div>
				<div className="text-wrap">
					<h2 className="title">테스트</h2>
					<p className="text">23.04.25</p>
				</div>
			</div>
		</section>
	);
};


export default Visual;