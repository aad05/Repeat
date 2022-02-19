import React, { PureComponent } from 'react';

class Comp extends PureComponent {
  render() {
    console.log('Pure Comp');
    return <div>PureComponent</div>;
  }
}

export default Comp;
