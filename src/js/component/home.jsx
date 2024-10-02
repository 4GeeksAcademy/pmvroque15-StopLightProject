import React, {useState} from "react";

//include images into your bundle

//create your first component
const Home = () => {
	const [activeLight,setActiveLight]= useState("");
	return (
<div className="bg">	
			{/* <img src="https://i.insider.com/614e3960b414c100186262d8?width=700"/> */}
			<div id="trafficTop"></div>
			<div id="container">
			
				<div 
					className={`red light ${activeLight == "red" ? " redGlow" : " "}`} 
					onClick = {() => 
					setActiveLight( 'red' )}
				>

				</div>
				<div 
					className={`yellow light ${activeLight == "yellow" ? "yellowGlow" : " "}`}
					onClick = {() => 
					setActiveLight( 'yellow' )}
				>

				</div>
				<div 
					className={`green light ${activeLight == "green" ? "greenGlow" : " "}`} 
					onClick = {() => 
					setActiveLight( 'green' )}
				>
					</div>
				</div>
			</div>
		
	);
};

export default Home;