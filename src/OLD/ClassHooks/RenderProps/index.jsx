import React, { Component } from 'react';
import Click from './Click';
import Hover from './Hover';

export default class index extends Component {
  render() {
    return (
      <div>
        {/* <Click /> */}
        <Hover
          name={(count, increament) => (
            <Click count={count} increament={increament} />
          )}
        />
      </div>
    );
  }
}
