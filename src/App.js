import ButtonAppBar from 'components/Header';
import { Redirect, Route, Switch } from 'react-router-dom';
import logo from '../src/logo.svg';
import './App.scss';
import ProducsFeature from './features/Product/index';
import TodoFeature from './features/Todo/index';
import { Button } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <ButtonAppBar />
      <Switch>
        <Redirect from="/home" to="" exact />
        <Redirect from="/post-list/:postId" to="/posts/:postId" exact />

        <Route path="/" exact>
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="text">Welcome to Mini Project of Avid</h1>
            <Button variant="contained" color="success" className="btn" href="/products">
              Go To The Product-Listing Page
            </Button>
          </div>
        </Route>
        <Route path="/products" component={ProducsFeature} />
        <Route path="/todo" component={TodoFeature} />
      </Switch>
    </div>
  );
}

export default App;
