import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";



const Gallery = ()=> {

	gsap.registerPlugin(ScrollTrigger);
	function cc(){
		alert('hi');
	}

	return (
		<section className="section gallery">
			<div className="gutter">
				
			</div>
		</section>
	);
}

export default Gallery;