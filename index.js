/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import MyMapView from './src/screens/MyMapView';

AppRegistry.registerComponent(appName, () => MyMapView);
