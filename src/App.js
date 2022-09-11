import ButtonAppBar from 'components/Header';
import { Link, Redirect, Route, Switch } from 'react-router-dom';
import logo from '../src/logo.svg';
import './App.scss';
import ProducsFeature from './features/Product/index';
import TodoFeature from './features/Todo/index';
import { Button, Grid, Box, Container } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <ButtonAppBar />
      <Switch>
        <Redirect from="/home" to="" exact />
        <Redirect from="/post-list/:postId" to="/posts/:postId" exact />

        <Route path="/" exact>
          <Box>
            <Container>
              <Grid container spacing={1} className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="text">Welcome to PetProject of Avid</h1>
                <Link className="link-text" to="/products">
                  <Button variant="contained" color="success" className="btn">
                    Go To The Product-Listing Page
                  </Button>
                </Link>
              </Grid>
            </Container>
          </Box>
        </Route>

        <Route path="/products" component={ProducsFeature} />
        <Route path="/todo" component={TodoFeature} />
      </Switch>
    </div>
  );
}

export default App;
