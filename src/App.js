import React from "react";

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

	return (
		<div id="wrap" className="wrap">
			<div id="container" className="container">
				<Main />
			</div>
		</div>
	);

}



export default App;
