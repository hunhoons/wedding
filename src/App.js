import React, { useEffect ,useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/* css */
import './App.css';
/* page */
// import Main from './component/main';

function App() {
	function setVH (){
		let VH = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', `${VH}px`)
	}
	setVH();
	window.addEventListener('resize', () =>{
		setVH();
	});
	gsap.registerPlugin(ScrollTrigger);
	const componented = useRef(null);
	useEffect( ()=>{
		let cc = document.querySelector('.section.cc');
		console.log(cc);
		let ccc = document.querySelector('.section.cc .list-wrap').offsetWidth;
		cc.style.height = `${ccc}px`;
		let cccc = ccc - window.innerWidth;
		

		let ctx = gsap.context( ()=>{
			gsap.to(".section.cc .list-wrap",{
				x: -cccc,
				ease: "none",
				scrollTrigger: {
					trigger: '.section.cc',
					markers: true,
					start: "top top",
					// pin: true,
					end: ccc,
					scrub: 1,
				}
			});
		}, componented);
		return () => ctx.revert();
	}, [componented]);	

	return (
		<div id="wrap" className="wrap" ref={componented}>
			<div id="container" className="container">
				<div className="section">
					aaaaaaaaaaaaaaaaaaaa
				</div>
				<div className="section cc">
					<div className="inner">
						<ul className="list-wrap">
							<li>
								cccccc1111 <br />
								cccccc1111 <br />
								cccccc1111 <br />
								cccccc1111
							</li>
							<li>
								cccccc2222 <br />
								cccccc2222 <br />
								cccccc2222 <br />
								cccccc2222
							</li>
							<li>
								cccccc3333 <br />
								cccccc3333 <br />
								cccccc3333 <br />
								cccccc3333
							</li>
							<li>
								cccccc4444 <br />
								cccccc4444 <br />
								cccccc4444 <br />
								cccccc4444
							</li>
							<li>
								cccccc5555 <br />
								cccccc5555 <br />
								cccccc5555 <br />
								cccccc5555
							</li>
							<li>
								cccccc6666 <br />
								cccccc6666 <br />
								cccccc6666 <br />
								cccccc6666
							</li>
						</ul>
					</div>
				</div>
				<div className="section">
					eeeeeeeeeeeee
				</div>
				{/* <Main /> */}
			</div>
		</div>
	);

}



export default App;
