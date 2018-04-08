import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import { WordList } from './WordList';
// import { Parent } from './exam1';
// import { Root } from './learn-redux/Root';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Provider store={store}>
          <WordList /> 
        </Provider>
        {/* <MyInput /> */}
        {/* <Root /> */}
      </div>
    );
  }
}

export default App;
