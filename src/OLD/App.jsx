import Class from './Class';
import React from 'react';
// import ErrorBoundary from './ClassHooks/ErrorBoundary';
// import Hero from './ClassHooks/Hero';
// import Click from './ClassHooks/Hoc/Click';
// import Hover from './ClassHooks/Hoc/Hover';
// import State from './ClassHooks/State';
// import UseState from './Hooks/useState';
// import Comp from './ClassHooks/PureComponent';
// import RegularComponent from './ClassHooks/RegularComponent';
// import RenderProps from './ClassHooks/RenderProps';
// import UseCallback from './Hooks/useCallback';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clickEvent: null,
      eventType: null,
      count: 0,
    };
  }
  componentDidMount() {
    console.log('rendered');
  }
  componentWillUnmount() {
    // console.log('After rendering');
    console.log('rendering');
  } // render bo'lishidan oldin ishlaydi
  componentWillReceiveProps() {
    console.log('Changed Props');
  }
  render() {
    // function onClick(event) {
    //   console.log(event); // => обнуляемый объект.
    //   console.log(event.type); // => "click"
    //   const eventType = event.type; // => "click"

    //   setTimeout(function () {
    //     console.log(event.type, 'settimeout'); // => null
    //     console.log(eventType, 'typeset'); // => "click"
    //   }, 0);

    //   // Не будет работать. this.state.clickEvent будет содержать только значения null.
    //   this.setState({ clickEvent: event });

    //   // Вы всё равно можете экспортировать свойства события.
    //   this.setState({ eventType: event.type });
    // }

    return (
      <div>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Countss {this.state.count}
        </button>
        {/* <button
          onClick={() =>
            this.setState((prev) => {
              return { count: prev.count + 1 };
            })
          }
        >
          Inc App {this.state.count}
        </button> */}
        {/* <State /> */}
        {/* <UseState /> */}
        {/* <Comp /> */}
        {/* <RegularComponent /> */}
        {/* <ErrorBoundary>
          <Hero hero='Batman' />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero hero='Superman' />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero hero='Joker' />
        </ErrorBoundary> */}
        {/* <Click /> */}
        {/* <Hover /> */}
        {/* <UseCallback /> */}
        {/* <RenderProps /> */}
        {/* <button onClick={onClick}>Clicked</button> */}
        <Class count={this.state.count} />
      </div>
    );
  }
}
export default App;
