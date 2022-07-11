import React from 'react';
import PropTypes from 'prop-types';
import PageList from './pages/PageList';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';
import { Box } from '@material-ui/core';
import detailPage from './pages/DetailPage';

ProducsFeature.propTypes = {};

function ProducsFeature(props) {
  const match = useRouteMatch();
  return (
    <Box pt={4}>
      <Switch>
        <Route path={match.path} exact component={PageList} />
        <Route path={`${match.path}/:productId`} component={detailPage} />
      </Switch>
    </Box>
  );
}

export default ProducsFeature;
