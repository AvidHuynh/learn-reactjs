import { Box, Container, Grid, makeStyles, Paper, LinearProgress } from '@material-ui/core';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import AddToCartForm from '../components/AddToCartForm';
import ProductThumbnail from '../components/Filters/ProductThumbnail';
import ProductAdditional from '../components/ProductAdditional';
import ProductDescription from '../components/ProductDescription';
import ProductInfo from '../components/ProductInfo';
import ProductMenu from '../components/ProductMenu';
import ProductReviews from '../components/ProductReviews';
import useProductDetail from '../hooks/useProductDetail';

const useStyles = makeStyles((theme) => ({
  root: {},

  left: {
    width: '400px',
    padding: theme.spacing(1.5),
    borderRight: `1px solid ${theme.palette.grey[300]}`,
  },

  right: {
    flex: '1 1 0',
    padding: theme.spacing(1.5),
  },
  loading: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
  },
}));

function DetailPage() {
  const classes = useStyles();
  // const match = useRouteMatch();
  // console.log({match}); => để xem thông tin - sau đó lấy params và productId trong params -> cú pháp bên dưới
  const {
    params: { productId },
    url,
  } = useRouteMatch();
  const { product, loading } = useProductDetail(productId);

  if (loading) {
    return (
      <Box className={classes.loading}>
        <LinearProgress />
      </Box>
    );
  }
  const handleAddToCartSubmit = (formValues) => {
    console.log('Form submit:', formValues);
  };
  return (
    <Box>
      <Container>
        <Paper elevation={0}>
          <Grid container>
            <Grid item className={classes.left}>
              <ProductThumbnail product={product} />
            </Grid>
            <Grid item className={classes.right}>
              <ProductInfo product={product} />
              <AddToCartForm onSubmit={handleAddToCartSubmit} />
            </Grid>
          </Grid>
        </Paper>

        <Paper elevation={0}>
          <ProductMenu />
          <Switch>
            <Route path={url} exact>
              <ProductDescription product={product} />
            </Route>
            <Route path={`${url}/additional`} component={ProductAdditional} />
            <Route path={`${url}/reviews`} component={ProductReviews} />
          </Switch>
        </Paper>
      </Container>
    </Box>
  );
}

export default DetailPage;
