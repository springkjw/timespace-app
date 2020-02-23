/**
 * @format
 */

import {AppRegistry, YellowBox} from 'react-native';
import App from './src';
import {name as appName} from './app.json';

if (__DEV__) {
  YellowBox.ignoreWarnings(['Remote debugger', 'RCTRootView cancelTouches']);
}

AppRegistry.registerComponent(appName, () => App);
