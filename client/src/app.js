import React from 'react';
import ReactDOM from 'react-dom';
import ItunesContainer from './containers/ItunesContainer.jsx';

window.onload = function () {
  ReactDOM.render(
    <ItunesContainer />,
    document.getElementById('app')
  );
};
