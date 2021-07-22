import React, { Component } from 'react';
import Die from './Die';
import './RollDice.css';

export class RollDice extends Component {
  static defaultProps = {
    faces: ['one','two','three','four','five','six']
  }
  state = {
    rolling: false,
    die1: 'one',
    die2: 'two',
    die3: 'three',
    die4: 'four',
    die5: 'five'
  }
  roll = () => {
    const die1 = this.props.faces[
      Math.floor(Math.random() * this.props.faces.length)
    ];
    const die2 = this.props.faces[
      Math.floor(Math.random() * this.props.faces.length)
    ];
    const die3 = this.props.faces[
      Math.floor(Math.random() * this.props.faces.length)
    ];
    const die4 = this.props.faces[
      Math.floor(Math.random() * this.props.faces.length)
    ];
    const die5 = this.props.faces[
      Math.floor(Math.random() * this.props.faces.length)
    ];

    this.setState({ rolling: true });

    setTimeout(() => {
      this.setState({ die1: die1, die2: die2, die3: die3, die4: die4, die5: die5, rolling: false });
    }, 700);
  }
  render() {
    return (
      <div className="RollDice">
        <div className="RollDice-container">
            <Die key='1' face={this.state.die1} rolling={this.state.rolling}/>
            <Die key='2' face={this.state.die2} rolling={this.state.rolling}/>
            <Die key='3' face={this.state.die3} rolling={this.state.rolling}/>
            <Die key='4' face={this.state.die4} rolling={this.state.rolling}/>
            <Die key='5' face={this.state.die5} rolling={this.state.rolling}/>           
        </div>
        <button onClick={this.roll} disabled={this.state.rolling} className={this.state.rolling ? 'disabled' : ''} >
          {this.state.rolling ? 'Rolling...' : 'Click and roll dices!!!'}
        </button>
      </div>
    )
  }
}

export default RollDice;
