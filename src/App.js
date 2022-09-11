import React, { Component } from 'react';
// import Message from './components/Message';
// import ActionButton from './components/ActionButton';
// import ThemeSelector from './components/ThemeSelector';
import GeneralList from './components/GeneralList';
import SortedList from './components/SortedList';
// import ProFeature from './components/ProFeature';
// import { ProController } from './components/ProController';
// import LogToConsole from './components/LogToConsole';
import { ProModeContext } from './components/ProModeContext';
import ProModeToggle from './components/ProModeToggle';


// const ProList = ProFeature(SortedList);
// const ProList = ProController(SortedList);
// const ProList = ProController(LogToConsole(SortedList, "Sorted", true, true, true));

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // counter: 0
      names: ["Zoe", "Bob", "Alice", "Dora", "Joe"],
      cities: ["London", "New York", "Paris", "Milan", "Boston"],
      // proMode: false
      proContextData: {
        proMode: true,
        toggleProMode: this.toggleProMode
      }
    };
  }

  // incrementCounter = () => {
  //   this.setState({ counter: this.state.counter + 1 });
  // }

  toggleProMode = () => {
    let mode = { ...this.state.proContextData };
    mode.proMode = !mode.proMode;
    this.setState({ proContextData: { proMode: mode.proMode } });
  }

  render() {
    return (
     <div className="container-fluid">
        <div className="row">
          <div className="col-12 text-center p-2">
            <div className="form-check">
              <input type="checkbox" className="form-check-input" value={ this.state.proContextData.proMode } onChange={ this.toggleProMode } />
              <label className="form-check-label">Pro Mode</label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <GeneralList list={ this.state.names } theme="primary" />
          </div>
          <div className="col-6">
            <h3>{ this.state.proContextData.proMode }</h3>
            <ProModeContext.Provider value={ this.state.proContextData }>
              <SortedList list={ this.state.names } />
            </ProModeContext.Provider>
            {/* <ProFeature pro={ this.state.proMode } render={
              text =>
                <>
                  <h4 className="text-center">{ text }</h4>
                  <SortedList list={ this.state.names } />
                </>
            } /> */}
          </div>
          {/* <div className="col-3">
            <GeneralList list={ this.state.names } theme="primary" />
          </div>
          <div className="col-3">
            <ProList list={ this.state.names } pro={ this.state.proMode } />
            <ProList list={ this.state.names } />
          </div>
          <div className="col-3">
            <GeneralList list={ this.state.cities } theme="secondary" />
          </div>
          <div className="col-3">
            <ProList list={ this.state.cities } pro={ this.state.proMode } />
            <ProList list={ this.state.names } />
          </div> */}
        </div>
     </div>
    );
  }
}
