import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from './containers/App';
import configureStore from './stores/configureStore';

const { store } = configureStore();

export default class Setup extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
    };
  }

  render() {
    return (
      <Provider store={store}>
        <App />       
      </Provider>
    );
  }
}