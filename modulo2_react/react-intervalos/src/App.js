import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      currentValue: 1,
    };

    this.divisors = [2, 3, 4, 5, 6, 7, 8, 9];
  }

  getDivisiveisPor(number) {
    const numbers = [];
    for (let i = 1; i <= this.state.currentValue; i++) {
      if (i % number === 0) {
        numbers.push(i);
      }
      if (this.state.currentValue > 60) {
        this.setState({currentValue:0});
      }
    }
    return numbers;
  }

  render() {
    return (
      <div class="container">
        <h3 id="title">Reatividade com intervalos de números - React</h3>
        <div>
          <div>
            <label>
              Contador
              <input
                type="number"
                min="1"
                max="200"
                value={this.state.currentValue}
                onChange={(event) =>
                  this.setState({ currentValue: event.target.value })
                }
              />
            </label>
          </div>
          <ul>
            {this.divisors.map((divisor) => {
              return (
                <li key={divisor}>
                  Números divisíveis por {divisor}:{' '}
                  {this.getDivisiveisPor(divisor).map((number) => {
                    return (
                      <span id="results" key={number}>
                        {number + ' '}
                      </span>
                    );
                  })}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
