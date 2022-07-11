import React from 'react';
import PropTypes from 'prop-types';
import { Box, Link, makeStyles } from '@material-ui/core';
import { NavLink, useRouteMatch } from 'react-router-dom';

ProductMenu.propTypes = {};
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'center',
        alignItems: 'center',
        listStyleType: 'none',
        padding: 0,
        '& > li': {
            padding: theme.spacing(3,4),
        },
        '& > li > a': {
            color: theme.palette.grey[800],
        },
        '& > li > a.active': {
            border: '1px solid',
            backgroundColor: theme.palette.grey[50],
            borderRadius: 3,
            padding: theme.spacing(1),
            fontWeight: 'bold',
            color: theme.palette.primary.main,
        },
        '& > li > a:hover': {
            textDecoration: 'none',
            color: theme.palette.primary.main,
        }
    },
}))

function ProductMenu(props) {
  const { url } = useRouteMatch();
  const classes = useStyles();
  return (
    <Box component="ul" className={classes.root}>
      <li>
        <Link component={NavLink} to={url} exact>
          Description
        </Link>
      </li>
      <li>
        <Link component={NavLink} to={`${url}/additional`}>
          Additional Information
        </Link>
      </li>
      <li>
        <Link component={NavLink} to={`${url}/reviews`}>
          Reviews
        </Link>
      </li>
    </Box>
  );
}

export default ProductMenu;
