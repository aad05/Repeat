import React, { Component } from 'react';

export default class Class extends Component {
  componentWillReceiveProps() {
    console.log('Changed Props');
  }
  shouldComponentUpdate() {
    if (this.props.count > 10) {
      return true;
    }
    return false;
  }
  componentWillUpdate() {
    console.log('changin');
  }
  componentDidUpdate() {
    console.log('Updated');
  }
  componentWillUnmount() {
    'deleteed something';
  }
  render() {
    return (
      <div>
        Class {this.props.count}
        {this.props.count > 5 ? '' : <button>Delete</button>}
      </div>
    );
  }
}

// Uyga vazifa bajarmaganlar dars vaqtigacha uyga vazifalar qabul qilinadi.
// Uyga vazifalar bo'yicha -(minus) ko'payib ketadigon bo'lsa o'qishdan chetlatilinadi!
