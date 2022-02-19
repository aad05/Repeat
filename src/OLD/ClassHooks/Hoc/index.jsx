import React from 'react';

const HOC = (Component) => {
  class InsideHOC extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
      this.increament = this.increament.bind(this);
    }
    increament() {
      this.setState({
        count: this.state.count + 1,
      });
    }
    render() {
      return (
        <Component count={this.state.count} increament={this.increament} />
      );
    }
  }
  return InsideHOC;
};
export default HOC;

// import React from 'react';

// const HOC = (Container) => {
//   class InContainer extends React.Component {
//     constructor(props) {
//       super(props);

//       this.state = {
//         count: 0,
//       };
//       this.increament = this.increament.bind(this);
//     }
//     increament() {
//       this.setState({
//         count: this.state.count + 1,
//       });
//     }
//     render() {
//       return (
//         <Container count={this.state.count} increament={this.increament} />
//       );
//     }
//   }
//   return InContainer;
// };
// export default HOC;
