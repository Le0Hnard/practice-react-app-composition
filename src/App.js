import React, { Component } from 'react';
import Message from './components/Message';
import ActionButton from './components/ActionButton';
import ThemeSelector from './components/ThemeSelector';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  incrementCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    return (
      <ThemeSelector>
        <div className="m-2 text-center">
          <Message theme="primary" message={ `Counter: ${this.state.counter}` } />
          <ActionButton theme="secondary" text="Increment" callback={ this.incrementCounter } />
        </div>
      </ThemeSelector>
    );
  }
}
