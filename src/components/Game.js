import React, { Component } from 'react';

// import Square from './Square';

import Board from './Board';







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


	handleClick(i) {
  const history = this.state.history.slice(0, this.state.stepNumber+1);

    const current = history[history.length-1];

    const squares = current.squares.slice();

  



    squares[i] = this.state.xIsNext ? 'X' :'O';
    this.setState({
    	history: history.concat({
    		squares: squares
    	}),
    	xIsNext: !this.state.xIsNext,
    	stepNumber: history.length



    });


	}


	render() {

		const history = this.state.history;

		const current = history[this.state.stepNumber];




		return (

			<div className="game">

			<div className="game-board">

			<Board onClick={(i) => this.handleClick(i)}
			squares={current.squares} />

			</div>	

			<div className="game-info">




			</div>

			</div>



			)
	}
}



  {/* calculate winners in component board   */} 



  function calculateWinner(squares) {

  	const lines = [

    	[0, 1, 2],
    	[3, 4, 5],
    	[6, 7, 8],
    	[0, 3, 6],
    	[1, 4, 7],
    	[2, 5, 8],
    	[0, 4, 8],
    	[2, 4, 6]




  	];


   


  	return null;

  }