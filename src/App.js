import React, { useState } from 'react';


/* css */
import './App.css';

function App() {

  return (
    <div id="wrap" className="wrap">
		<div id="content" className="cotent">
			<section className="section visual">
				<div className="visual-wrap">
					<div className="video-wrap">
						{/* <video preload='auto' muted autoPlay loop>
						<source src=""></source>
					</video> */}
					</div>
					<div className="text-wrap">
						<h2 className="title">어머머</h2>
						<p className="text">23.04.25</p>
					</div>
				</div>
			</section> {/* section.visual */}
			<section className="section greetings">
				<div class="content">
					
				</div>
			</section>{/* section.greetings */}
			<section className="section gallery">
				<div class="content">

				</div>
			</section>{/* section.gallery */}
			<section className="section map">
				<div class="content">
					
				</div>
			</section>{/* section.map */}
			<section className="section bank">
				<div class="content">
					
				</div>
			</section>{/* section.bank */}
			<section className="section form">
				<div class="content">
					
				</div>
			</section>{/* section.form */}
		</div>
    </div>
  );
}



export default App;
