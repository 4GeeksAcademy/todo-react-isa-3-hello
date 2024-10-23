import React from "react";
import Todo from "./Todo"; 

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<h1 className="text-center mt-7">TODO-LIST</h1>	
			<Todo/> {}
			<p className="fixed-bottom">
			<p>© 2024 Made by Isa </p>
			</p>
		</div>
	);
};

export default Home;