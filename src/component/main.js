import React from "react";

/* page */
import Visual from "./visual";
import Greetings from "./greetings";
import Gallery from "./gallery";
import Bank from "./bank";
import Messages from "./message"

const Main = ()=>{

	return (
		<div id="content" className="content">
			<Visual />
			<Greetings />
			<Gallery />
			<Bank />
			<Messages />
		</div>
	);
}

export default Main;