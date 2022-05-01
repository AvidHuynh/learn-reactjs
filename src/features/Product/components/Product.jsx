import { Box, Typography } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import PropTypes from 'prop-types';
import React from 'react';

Product.propTypes = {
  product: PropTypes.object,
};

function Product({ product }) {
  return (
    <Box padding={1}>
      <Skeleton variant="rect" width="100%" height={118} />
      <div>
        <Typography variant="text">{product.name}</Typography>
      </div>
      <div>
        <Typography variant="text">{product.originalPrice}</Typography>
      </div>
    </Box>
  );
}

export default Product;
