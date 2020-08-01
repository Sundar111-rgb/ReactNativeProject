/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import FlatListBasics  from './src/component/FlatListBasics';
//import PlayStore from './src/component/PlayStore';
//import PlayStore2 from './src/component/PlayStore2';
//import App2 from './src/component/App2';
//import Call from './src/component/Call';
import NewApiFlat from './src/component/NewApiFlat';
import SplashScreen from './src/component/SplashScreen';

AppRegistry.registerComponent(appName, () => SplashScreen);
