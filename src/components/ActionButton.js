import React, { Component } from 'react';
import { ProModeContext } from './ProModeContext';

export default class ActionButton extends Component {
  getClasses(proMode) {
    let col = proMode ? this.props.theme : "danger";
    return `btn btn-${col} m-2`;
  }

  render() {
    return (
      <ProModeContext.Consumer>
        {
          contextData =>
            <button className={ this.getClasses(contextData.proMode) } onClick={ this.props.callback } disabled={ !contextData.proMode }>
              { this.props.text }
            </button>
        }
      </ProModeContext.Consumer>
    );
  }
}
