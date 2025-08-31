/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import React from 'react';
import App from './App';
import { name as appName } from './app.json';

// If you use Redux or any global providers, import them here
// import { Provider } from 'react-redux';
// import store from './src/store';

const Main = () => (
  <SafeAreaProvider>
    {/* Wrap with Redux Provider if using Redux */}
    {/* <Provider store={store}> */}
      <App />
    {/* </Provider> */}
  </SafeAreaProvider>
);

AppRegistry.registerComponent(appName, () => Main);
