import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AppContainer } from 'react-hot-loader';
import { HashRouter } from 'react-router-dom';
import "typeface-roboto";
import "typeface-exo";

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <HashRouter>
        <Component/>
      </HashRouter>
    </AppContainer>,
    document.getElementById('root')
  );
};

render(App);

/*eslint-disable */

if (module.hot) {
  module.hot.accept('./App', () => {
    render(App)
  });
}

/*eslint-enable */
