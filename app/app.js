/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

// Needed for redux-saga es6 generator support
import '@babel/polyfill';

// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router/immutable';
import history from 'utils/history';
import 'sanitize.css/sanitize.css';

// Import root app
import App from 'containers/App';

// Import Language Provider
import LanguageProvider from 'containers/LanguageProvider';

// Load assets
import '!file-loader?name=[name].[ext]!./images/7.png';
import '!file-loader?name=[name].[ext]!./images/3.png';
import '!file-loader?name=[name].[ext]!./images/2.png';
import '!file-loader?name=[name].[ext]!./images/1.png';
import '!file-loader?name=[name].[ext]!./images/cherry.png';
import '!file-loader?name=[name].[ext]!./images/deco1.png';
import '!file-loader?name=[name].[ext]!./images/deco1on.png';
import '!file-loader?name=[name].[ext]!./images/deco2.png';
import '!file-loader?name=[name].[ext]!./images/gloom.png';
import '!file-loader?name=[name].[ext]!./images/pikachu.png';
import '!file-loader?name=[name].[ext]!./images/pokeball.png';
import '!file-loader?name=[name].[ext]!./images/squirtle.png';
import '!file-loader?name=[name].[ext]!./images/staryu.png';
import '!file-loader?name=[name].[ext]!./fonts/PokemonGB.woff';
import '!file-loader?name=[name].[ext]!./fonts/PokemonGB.woff2';
import 'file-loader?name=.htaccess!./.htaccess';
/* eslint-enable import/no-unresolved, import/extensions */

import configureStore from './configureStore';

// Import i18n messages
import { translationMessages } from './i18n';

// Create redux store with history
const initialState = {};
const store = configureStore(initialState, history);
const MOUNT_NODE = document.getElementById('app');

const render = messages => {
  ReactDOM.render(
    <Provider store={store}>
      <LanguageProvider messages={messages}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </LanguageProvider>
    </Provider>,
    MOUNT_NODE,
  );
};

if (module.hot) {
  // Hot reloadable React components and translation json files
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(['./i18n', 'containers/App'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render(translationMessages);
  });
}

// Chunked polyfill for browsers without Intl support
if (!window.Intl) {
  new Promise(resolve => {
    resolve(import('intl'));
  })
    .then(() => Promise.all([import('intl/locale-data/jsonp/en.js')]))
    .then(() => render(translationMessages))
    .catch(err => {
      throw err;
    });
} else {
  render(translationMessages);
}

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install(); // eslint-disable-line global-require
}
