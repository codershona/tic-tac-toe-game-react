import React, { Component } from 'react';

import Square from './Square';







export default class Game extends Component {

	constructor(props) {

		super(props);
		this.state = {
			xIsNext: true,
			stepNumber: 0,
			history: [
			{
				squares: Array(9).fill(null)
			 }
			 
			]
		}

	}


	render() {

		return (

			<div>



			
			</div>



			)
	}
}