import React, { Component } from 'react';

class Button extends Component{
	constructor(props){
 		super(props);
 		this.state={redFlag: true};

		this.greenbutton = () => {
			console.log("Green button click");
			this.setState({redFlag : false});
		};

		this.redbutton = () => {
			console.log("Red button click");
			this.setState({redFlag : true});
		};

}
	render(){
		return(
			<div>
				<p>Flag value {this.state.redFlag}</p>
				{this.state.redFlag ? <button onClick={this.greenbutton}>Green</button> :
			 	<button onClick={this.redbutton}>Red</button>}
			</div>
		)
	}
}
export default Button;