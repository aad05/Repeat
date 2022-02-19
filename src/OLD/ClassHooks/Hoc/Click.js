import React, { Component } from 'react';
import HOC from './index';

class Click extends Component {
  //   constructor(props) {
  //     super(props);

  //     this.state = {
  //       count: 0,
  //     };
  //     this.increament = this.increament.bind(this);
  //   }
  //   increament() {
  //     this.setState({
  //       count: this.state.count + 1,
  //     });
  //   }

  render() {
    const { count, increament } = this.props;
    return (
      //   <button onClick={this.increament}>Click {this.state.count} times </button>
      <button onClick={increament}>Clicked {count} times</button>
    );
  }
}
export default HOC(Click);
