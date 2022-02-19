import React, { Component } from 'react';

export default class Hover extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  increament = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div onMouseOver={this.increament}>
        {this.state.count} {this.props.name(this.state.count, this.increament)}
      </div>
    );
  }
}
