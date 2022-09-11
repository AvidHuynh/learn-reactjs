import { Box, Container, Grid, Paper, makeStyles } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import productsApi from 'Api/productApi';
import queryString from 'query-string';
import { React, useEffect, useState, useMemo } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import FilterViewer from '../components/FilterViewer';
import ProductFilter from '../components/ProductFilter';
import ProductList from '../components/ProductList';
import ProductSkeletonList from '../components/ProductSkeletonList';
import ProductSort from '../components/ProductSort';

PageList.propTypes = {};

const useStyles = makeStyles((theme) => ({
  root: {},

  left: {
    width: '253px',
  },

  right: {
    flex: '1 1 0',
  },

  pagination: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',

    marginTop: '30px',
    paddingBottom: '20px',
  },
}));

function PageList(props) {
  const classes = useStyles();

  const history = useHistory();
  const location = useLocation();
  const queryParams = useMemo(() => {
    const params = queryString.parse(location.search);
    // params ở đây đang ở dạng chuỗi
    console.log({params});
    return {
      ...params,
      _page: Number.parseInt(params._page) || 1,
      _limit: Number.parseInt(params._limit) || 8,
      _sort: params._sort || 'salePrice:ASC',
      isPromotion: params.isPromotion === 'true',
      isFreeShip: params.isFreeShip === 'true',
    };
  }, [location.search]);
  console.log({queryParams});

  const [loading, setLoading] = useState(true);
  const [productList, setProductList] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 10,
  });

  // const [filters, setFilters] = useState({
  //   // page mặc định load ban đầu
  //   ...queryParams,
  //   _page: Number.parseInt(queryParams._page) || 1,
  //   _limit: Number.parseInt(queryParams._limit) || 8,
  //   _sort: queryParams._sort || 'salePrice:ASC',
  // });

  const handleChange = (e, page) => {
    // setFilters((preList) => ({
    //   ...preList,
    //   _page: page,
    // }));

    const filters = {
      ...queryParams,
      _page: page,
    };
    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(filters),
    });
  };

  const handleSortChange = (newValue) => {
    // setFilters((preList) => ({
    //   ...preList,
    //   _sort: newValue,
    // }));

    const filters = {
      ...queryParams,
      _sort: newValue,
    };
    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(filters),
    });
  };

  const handleFilterChange = (newFilters) => {
    // setFilters((preFilters) => ({
    //   ...preFilters,
    //   ...newFilters,
    // }));
    const filters = {
      ...queryParams,
      ...newFilters,
    };
    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(filters),
    });
  };

  const hanldeFilterViewer = (newFilters) => {
    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(newFilters),
    });
  };

  // useEffect(() => {
  //   history.push({
  //     pathname: history.location.pathname,
  //     search: queryString.stringify(queryParams),
  //   });
  // }, [history, queryParams]);

  useEffect(() => {
    // IIFE
    (async () => {
      try {
        // pagination bên dưới là từ file productApi
        const { data, pagination } = await productsApi.getAll(queryParams);
        setProductList(data);
        setPagination(pagination);
      } catch (error) {
        console.log('Failed:', error);
      }
      setLoading(false);
    })();
  }, [queryParams]);

  return (
    <Box>
      <Container>
        <Grid container spacing={1}>
          <Grid item className={classes.left}>
            <Paper elevation={0}>
              <ProductFilter filters={queryParams} onChange={handleFilterChange} />
            </Paper>
          </Grid>
          
          <Grid item className={classes.right}>
            <Paper elevation={0}>
              <ProductSort currentSort="salePrice" onChange={handleSortChange} />
              <FilterViewer filters={queryParams} onChange={hanldeFilterViewer} />
              {loading ? <ProductSkeletonList /> : <ProductList data={productList} />}

              <Box className={classes.pagination}>
                <Pagination
                  count={Math.ceil(pagination.total / pagination.limit)}
                  page={pagination.page}
                  color="primary"
                  onChange={handleChange}
                />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default PageList;
