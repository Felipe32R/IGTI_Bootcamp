import React, { Component } from 'react';


export class Button extends Component {
  handleClick() {
    const { onClick, disabled } = this.props;
    if (onClick && !disabled) onClick();
  }

  render() {
    this.cssButtonClass = this.props.disabled ? 'button disabled' : 'button';
    return (
      <div
        className={this.cssButtonClass}
        onClick={this.handleClick.bind(this)} 
      >
        {this.props.display}
      </div>
    );
  }
}
