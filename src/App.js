import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
/* css */
import './App.css';
/* page */
import Main from './component/main';

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
	const gallRef = useRef(null);
	useEffect (() => {
		const el = gallRef.current;
		let elWidth = el.offsetWidth;
		console.log(elWidth);
		let horiZon = elWidth - window.innerWidth;
		console.log(horiZon);
		gsap.fromTo( el, {
			x: 0,
		},{
			scrollTrigger : {
				scrub: 1,
				trigger : '.section.gallery',
				pin: true,
				start: "top top",
				end: elWidth,
				markers: true
			},
			x: -horiZon,
			ease: "none"
		});
	}, []);

	return (
		<div id="wrap" className="wrap">
			<div id="container" className="container">
				<Main />


				<section className="section gallery">
			<div className="cc" ref={gallRef}>
			<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae temporibus eligendi repellat quam, optio distinctio laborum, et in accusamus ipsum delectus aperiam sequi id, modi natus explicabo eveniet atque doloremque?</p>
			<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae temporibus eligendi repellat quam, optio distinctio laborum, et in accusamus ipsum delectus aperiam sequi id, modi natus explicabo eveniet atque doloremque?</p>
			<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae temporibus eligendi repellat quam, optio distinctio laborum, et in accusamus ipsum delectus aperiam sequi id, modi natus explicabo eveniet atque doloremque?</p>
			<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae temporibus eligendi repellat quam, optio distinctio laborum, et in accusamus ipsum delectus aperiam sequi id, modi natus explicabo eveniet atque doloremque?</p>
			<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae temporibus eligendi repellat quam, optio distinctio laborum, et in accusamus ipsum delectus aperiam sequi id, modi natus explicabo eveniet atque doloremque?</p>
			<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae temporibus eligendi repellat quam, optio distinctio laborum, et in accusamus ipsum delectus aperiam sequi id, modi natus explicabo eveniet atque doloremque?</p>
			<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae temporibus eligendi repellat quam, optio distinctio laborum, et in accusamus ipsum delectus aperiam sequi id, modi natus explicabo eveniet atque doloremque?</p>
			<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae temporibus eligendi repellat quam, optio distinctio laborum, et in accusamus ipsum delectus aperiam sequi id, modi natus explicabo eveniet atque doloremque?</p>
			</div>
		</section>
			</div>
		</div>
	);

}



export default App;
