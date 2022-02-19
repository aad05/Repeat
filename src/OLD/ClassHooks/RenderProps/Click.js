import React, { Component } from 'react';

export default class Click extends Component {
  render() {
    return (
      <button onClick={() => this.props.increament()}>
        Click me {this.props.count}{' '}
      </button>
    );
  }
}
