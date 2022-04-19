import ButtonAppBar from 'components/Header';
import React from 'react';
import { Route } from 'react-router-dom';
import './App.scss';
import AlbumsFeature from './features/Albums/index';
import TodoFeature from './features/Todo/index';


function App() {
  return (
    <div className="App">
      <ButtonAppBar />
      <Route path="/todo" component={TodoFeature} />
      <Route path="/album" component={AlbumsFeature} />
    </div>
  );
}

export default App;
