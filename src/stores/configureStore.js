import devTools from 'remote-redux-devtools';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';

const App = require('../../package.json');

export default function configureStore() {
  const enhancer = compose(
    applyMiddleware(thunk),
    devTools({
      name: App.name, realtime: true,
    }),
  );

  const store = createStore(reducer, enhancer);

  return store;
}
