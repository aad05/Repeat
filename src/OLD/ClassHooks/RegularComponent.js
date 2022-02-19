import React from 'react';

class RegularComponent extends React.Component {
  shouldComponentUpdate() {
    return false;
  }
  render() {
    console.log(' Regular Comp');
    return <div>RegularCOmponent</div>;
  }
}

export default RegularComponent;
