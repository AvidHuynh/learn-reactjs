import ButtonAppBar from 'components/Header';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.scss';
import ProducsFeature from './features/Product/index';
import TodoFeature from './features/Todo/index';

function App() {
  return (
    <div className="App">
      <ButtonAppBar />
      <Switch>
        <Redirect from="/home" to="/" exact />
        <Route path="/todo" component={TodoFeature} />
        <Route path="/products" component={ProducsFeature} />
      </Switch>
    </div>
  );
}

export default App;
