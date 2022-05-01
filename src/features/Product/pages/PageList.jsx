import { Box, Container, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import productsApi from 'Api/productApi';
import { React, useEffect, useState } from 'react';
import ProductList from '../components/ProductList';
import ProductSkeletonList from '../components/ProductSkeletonList';

PageList.propTypes = {};

function PageList(props) {
  const useStyles = makeStyles((theme) => ({
    root: {},

    left: {
      width: '253px',
    },

    right: {
      flex: '1 1 0',
    },
  }));

  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    // IIFE
    (async () => {
      try {
        const { data } = await productsApi.getAll({ _page: 1, _limit: 12 });
        setProductList(data);
      } catch (error) {
        console.log('Failed:', error);
      }
      setLoading(false);
    })();
  }, []);

  return (
    <Box>
      <Container>
        <Grid container spacing={1}>
          <Grid item className={classes.left}>
            <Paper elevation={0}>left column</Paper>
          </Grid>
          <Grid item className={classes.right}>
            <Paper elevation={0}>{loading ? <ProductSkeletonList /> : <ProductList data={productList} />}</Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default PageList;
