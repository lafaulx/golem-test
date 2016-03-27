import React from 'react';
import { renderToString } from 'react-dom/server';
import { RouterContext, match, createMemoryHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';

import routes from './routes';
import { configureStore } from './store';
import performContainerStaticMethod from './utils/performContainerStaticMethod';
import Html from './containers/Html';

export function renderApp(url) {
  return new Promise((resolve, reject) => {
    const memoryHistory = createMemoryHistory(url);
    const store = configureStore(memoryHistory);
    const history = syncHistoryWithStore(memoryHistory, store);

    match({ history, routes, location: url }, (error, redirectLocation, renderProps) => {
      if (error) {
        reject();
      } else if (redirectLocation) {
        reject({
          status: 301,
          url: redirectLocation.pathname + redirectLocation.search,
        });
      } else if (renderProps) {
        performContainerStaticMethod(renderProps, store).then(() => {
          const content = renderToString(
            <Provider store={store}>
              <RouterContext {...renderProps} />
            </Provider>
          );

          const htmlString = renderToString(<Html content={content} store={store} />);

          resolve(`<!doctype html>\n${htmlString}`);
        }, (err) => {
          reject(err);
        });
      }
    });
  });
}
