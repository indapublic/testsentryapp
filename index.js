/**
 * @format
 */
 import * as Sentry from "@sentry/react-native";

import {AppRegistry} from 'react-native';
import {App} from './App';
import {name as appName} from './app.json';

Sentry.init({
    dsn: "https://de42747da2aa4ef7bce48588aeb9e30c@o140491.ingest.sentry.io/6085670",
    // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring.
    // We recommend adjusting this value in production.
    tracesSampleRate: 1.0,
});

AppRegistry.registerComponent(appName, () => App);
