import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createReactNavigationReduxMiddleware, createNavigationReducer, createReduxContainer } from 'react-navigation-redux-helpers';
import { connect } from 'react-redux';

import navigator from '~/routes'

import reducers from './ducks';
import sagas from './sagas';

const middlewares = [];
const navReducer = createNavigationReducer(navigator)

const reducersWithNavigation = combineReducers({
  nav: navReducer,
  ...reducers
})

const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
const navMiddleware = createReactNavigationReduxMiddleware(
  state => state.nav
);

middlewares.push(sagaMiddleware);
middlewares.push(navMiddleware);

const composer = __DEV__
  ? compose(
    applyMiddleware(...middlewares),
    console.tron.createEnhancer(),
  )
  : compose(applyMiddleware(...middlewares));

const store = createStore(reducersWithNavigation, composer);

const App = createReduxContainer(navigator, "root")
const mapStateToProps = state => ({ state: state.nav })
const AppWithNavigationState = connect(mapStateToProps)(App)

sagaMiddleware.run(sagas);

export { store, AppWithNavigationState }
