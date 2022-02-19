import React, { Component } from 'react';
import HOC from '.';

class Hover extends Component {
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
      //   <div onMouseOver={this.increament}>Hovered {this.state.count} times</div>
      <div onMouseOver={increament}>Hovered {count} times</div>
    );
  }
}
// export default HOC(Hover);
export default HOC(Hover);
