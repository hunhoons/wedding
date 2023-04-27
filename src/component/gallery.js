import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const Gallery = ()=> {

	gsap.registerPlugin(ScrollTrigger);
	const components = useRef(null);
	useEffect (() => {
		// function setTrackHeights() {
		// 	const ccc = document.querySelector('.section.gallery');
		// 	const cccc = document.querySelector('.section.gallery .gutter').scrollWidth;
			
		// 	ccc.style.height = `${cccc}px`;
		//   }
		//   setTrackHeights();
		//   window.addEventListener("resize", function () {
		// 	setTrackHeights();
		//   });

		let ctx = gsap.context( ()=> {

			gsap.to('.section.gallery .gutter',{
				scrollTrigger: {
					trigger : components.current,
					pin: true,
				},
				// xPercent: -100,
				
			});

			// gsap.timeline({
			// 	scrollTrigger : {
			// 		trigger: components.current,
			// 		start: "top top",
			// 		end: "bottom bottom",
			// 		scrub: 1,
			// 		markers: true,
			// 	}
			// }).to(".section.gallery .gutter",{
			// 	xPercent: -100,
			// 	ease: "none"
			// });

			


		}, components);
		return () => ctx.revert();
	}, []);


	return (
		<section className="section gallery" ref={components}>
			<div className="sticky-elem">
				<div className="gutter">
					<ul className="list-wrap">
						<li>
							<div className="item gallery">
								{/* <div className="img-wrap">
									<img src="" alt="" className="img" />
								</div> */}
								<div className="text-wrap">
									<p className="title">
										테스트 입니다.
									</p>
									<p className="text">
										Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates nemo tempore dolorum quod nihil accusantium! Repudiandae suscipit deserunt quaerat dignissimos, totam vero doloremque ipsam, voluptas est alias non, quidem odit?
									</p>
								</div>
							</div>
						</li>
						<li>
							<div className="item gallery">
								{/* <div className="img-wrap">
									<img src="" alt="" className="img" />
								</div> */}
								<div className="text-wrap">
									<p className="title">
										테스트 입니다.
									</p>
									<p className="text">
										Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates nemo tempore dolorum quod nihil accusantium! Repudiandae suscipit deserunt quaerat dignissimos, totam vero doloremque ipsam, voluptas est alias non, quidem odit?
									</p>
								</div>
							</div>
						</li>
						<li>
							<div className="item gallery">
								{/* <div className="img-wrap">
									<img src="" alt="" className="img" />
								</div> */}
								<div className="text-wrap">
									<p className="title">
										테스트 입니다.
									</p>
									<p className="text">
										Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates nemo tempore dolorum quod nihil accusantium! Repudiandae suscipit deserunt quaerat dignissimos, totam vero doloremque ipsam, voluptas est alias non, quidem odit?
									</p>
								</div>
							</div>
						</li>
						<li>
							<div className="item gallery">
								{/* <div className="img-wrap">
									<img src="" alt="" className="img" />
								</div> */}
								<div className="text-wrap">
									<p className="title">
										테스트 입니다.
									</p>
									<p className="text">
										Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates nemo tempore dolorum quod nihil accusantium! Repudiandae suscipit deserunt quaerat dignissimos, totam vero doloremque ipsam, voluptas est alias non, quidem odit?
									</p>
								</div>
							</div>
						</li>
						<li>
							<div className="item gallery">
								{/* <div className="img-wrap">
									<img src="" alt="" className="img" />
								</div> */}
								<div className="text-wrap">
									<p className="title">
										테스트 입니다.
									</p>
									<p className="text">
										Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates nemo tempore dolorum quod nihil accusantium! Repudiandae suscipit deserunt quaerat dignissimos, totam vero doloremque ipsam, voluptas est alias non, quidem odit?
									</p>
								</div>
							</div>
						</li>
						<li>
							<div className="item gallery">
								{/* <div className="img-wrap">
									<img src="" alt="" className="img" />
								</div> */}
								<div className="text-wrap">
									<p className="title">
										테스트 입니다.
									</p>
									<p className="text">
										Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates nemo tempore dolorum quod nihil accusantium! Repudiandae suscipit deserunt quaerat dignissimos, totam vero doloremque ipsam, voluptas est alias non, quidem odit?
									</p>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</section>

	);
}

export default Gallery;