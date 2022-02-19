import React, { Component } from 'react';

export default class State extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{ id: 1, sum: 0 }],
    };
  }
  render() {
    const onAdd = () => {
      var newData = { id: this.state.data.length + 1, sum: 0 };
      var secondData = [...this.state.data, newData];
      this.setState({
        data: secondData,
      });
    };
    const increament = (id) => {
      this.setState({
        data: this.state.data.map((value) =>
          id === value.id ? { id: value.id, sum: value.sum + 1 } : value
        ),
      });
    };
    const decreament = (id) => {
      this.setState({
        data: this.state.data.map((value) =>
          id === value.id ? { id: value.id, sum: value.sum - 1 } : value
        ),
      });
    };
    return (
      <>
        <button onClick={onAdd}>Add</button>
        {this.state.data.map(({ sum, id }) => (
          <div key={id}>
            <button onClick={() => decreament(id)}>Minus</button>
            {sum}
            <button onClick={() => increament(id)}>Plus</button>
          </div>
        ))}
      </>
    );
  }
}
