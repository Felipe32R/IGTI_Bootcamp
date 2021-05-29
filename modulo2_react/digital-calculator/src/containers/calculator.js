/* eslint-disable default-case */
import { Component } from 'react';
import { Button } from '../components/Button.js';
import Display from '../components/Display.js';


class Calculator extends Component {
  initialState = {
    firstValue: 0,
    secondValue: 0,
    operator: 1,
    operator2:0,
    isSum: false,
    isSubtraction:false,
    isMultiplication: false,
    isDivision:false,
  };
  constructor(props) {
    super(props);
    this.state = this.initialState;
  }

  putValue = (value) => {
    const { firstValue, secondValue, operator } = this.state;

    const lastValue = operator === 1 ? firstValue : secondValue;


    switch (operator) {
      case 1:
        this.setState({ firstValue: lastValue * 10 + value });
        break;
      case 2:
        this.setState({ secondValue: lastValue * 10 + value });
        break;
    }
  };

  getValue = () => {
    const { firstValue, secondValue, operator } = this.state;

    switch (operator) {
      case 1:
        return firstValue;
      case 2:
        return secondValue;
      case 3:
        return firstValue + secondValue;
      case 4:
        return firstValue - secondValue;
      case 5:
        return firstValue * secondValue;
      case 6:
        return firstValue / secondValue;

    }
  };

  pickSum = (isSum) => {
      this.setState({ operator: 2, isSum });
  };
  pickSubtraction = (isSubtraction) =>{
    this.setState({operator: 2, isSubtraction})
  }
  pickMultiplication = (isMultiplication) =>{
    this.setState({operator: 2, isMultiplication})
  }
  pickDivision = (isDivision) =>{
    this.setState({operator: 2, isDivision})
  }


  execOperation = () => {
    const {isSum, isSubtraction, isMultiplication, isDivision} = this.state;
    if(isSum){
    this.setState({ operator: 3 });
    }
    if(isSubtraction){
    this.setState({ operator: 4 });
    }
    if(isMultiplication){
    this.setState({ operator: 5 });
    }
    if(isDivision){
    this.setState({ operator: 6 });
    }

  };

  clear = () => {
    this.setState(this.initialState);
  };

  render() {
    const { operator} = this.state;

    return (
      <div className="calculator">
        <div>
          <Display value={this.getValue()} />
        </div>

        <div className="buttonsContainer">
          <Button
            display={'1'}
            onClick={() => this.putValue(1)}
            disabled={operator >= 3}
          />
          <Button
            display={'2'}
            onClick={() => this.putValue(2)}
            disabled={operator >= 3}
          />
          <Button
            display={'3'}
            onClick={() => this.putValue(3)}
            disabled={operator >= 3}
          />
          <Button
            display={'4'}
            onClick={() => this.putValue(4)}
            disabled={operator >= 3}
          />
          <Button
            display={'5'}
            onClick={() => this.putValue(5)}
            disabled={operator >= 3}
          />
          <Button
            display={'6'}
            onClick={() => this.putValue(6)}
            disabled={operator >= 3}
          />
          <Button
            display={'7'}
            onClick={() => this.putValue(7)}
            disabled={operator >= 3}
          />
          <Button
            display={'8'}
            onClick={() => this.putValue(8)}
            disabled={operator >= 3}
          />
          <Button
            display={'9'}
            onClick={() => this.putValue(9)}
            disabled={operator >= 3}
          />
          <Button
            display={'0'}
            onClick={() => this.putValue(0)}
            disabled={operator >= 3}
          />
          <Button
            display={'+'}
            onClick={() => this.pickSum(true)}
            disabled={operator !== 1}
          />
          <Button
            display={'-'}
            onClick={() => this.pickSubtraction(true)}
            disabled={operator !== 1}
          />
            <Button
              display={'='}
              onClick={() => this.execOperation()}
              disabled={operator === 1}
            />
          <Button
            display={'*'}
            onClick={() => this.pickMultiplication(true)}
            disabled={operator !== 1}
          />
          <Button
            display={'/'}
            onClick={() => this.pickDivision(true)}
            disabled={operator !== 1}
          />
          <Button display={'C'} onClick={() => this.clear()} alt="Clear" />
        </div>
      </div>
    );
  }
}

export default Calculator;
