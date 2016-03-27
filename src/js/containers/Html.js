import React, { PropTypes } from 'react';
import serialize from 'serialize-javascript';

const hash = process.env.hash;

export default function Html({ store, content, isError }) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <title>Colossus</title>

        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, minimal-ui" />
        {!isError &&
          <script dangerouslySetInnerHTML={{
            __html: `window.__initialState__ = ${serialize(store.getState())};`,
          }}
          />
        }
      </head>
      <body>
        <div id="app" dangerouslySetInnerHTML={{ __html: content }} />

        {!isError &&
          <script src={`/static/app.${hash}.js`} />
        }
      </body>
    </html>
  );
}

Html.propTypes = {
  store: PropTypes.object,
  content: PropTypes.string,
  isError: PropTypes.bool,
};
