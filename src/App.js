import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";

/* compoents */
import Contents from './compoents/content';

/* css */
import './App.css';

function App() {
	const [mousePosition, setMousePosition] = useState({
		x: 0,
		y: 0
	});
	// console.log(mousePosition);
	const [cursorVariant, setCursorVariant] = useState('default');

	useEffect( () =>{
		const mouseMove = (e) =>{
			setMousePosition({
				x: e.clientX,
				y: e.clientY,
			});
		};
		window.addEventListener('mousemove', mouseMove);
		return () => {
			window.removeEventListener('mousemove', mouseMove);
		}
	}, []);

	const variants = {
		default: {
			x: mousePosition.x - 16,
			y: mousePosition.y - 16
		}
	}

  return (
    <div id="wrap" className="wrap">
		<Contents />
		<motion.div 
			id="cursor" className='cursor'
			variants={variants}
			animate={cursorVariant}
		/>
    </div>
  );
}



export default App;
