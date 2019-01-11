import React from 'react';
import ReactDOM from 'react-dom';

// Custom components
import App from './components/App';

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);

module.hot.accept();