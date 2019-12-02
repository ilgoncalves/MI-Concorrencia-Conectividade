import React from 'react';

import '~/config/ReactotronConfig';

import { Provider } from 'react-redux';
import { AppWithNavigationState, store } from './store';

function App() {
  return (
    <Provider store={store}>
      <AppWithNavigationState />
    </Provider>
  )
};

const OverlayApp = console.tron.overlay(App);

export default OverlayApp;
