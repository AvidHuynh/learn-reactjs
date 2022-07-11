import React from 'react';
import PropTypes from 'prop-types';
import { Box, makeStyles, Typography } from '@material-ui/core';
import { formatPrice } from '../utils';

ProductInfo.propTypes = {
  product: PropTypes.object,
};

const useStyles = makeStyles((theme) => ({
  box: {
    padding: theme.spacing(0, 2),
  },
  name: {
    textTransform: 'uppercase',
  },
  description: {
    margin: theme.spacing(2, 0),
  },
  boxPrice: {
    borderRadius: theme.spacing(1),
    padding: theme.spacing(2),
    margin: theme.spacing(3, 0, 2.5, 0),
    background: '#f5f5f5',
  },
  oriPrice: {
    textDecoration: 'line-through',
    margin: theme.spacing(0, 2),
    lineHeight: theme.spacing(0),
  },
  salePrice: {
    fontSize: theme.typography.h4.fontSize,
    color: theme.palette.secondary.main,
    fontWeight: 500,
  },
  promoPercent: {
    border: `1px solid ${theme.palette.secondary.main}`,
    borderRadius: 4,
    color: theme.palette.secondary.main,
  },
}));

function ProductInfo({ product = {} }) {
  const { name, shortDescription, originalPrice, salePrice, promotionPercent } = product;
  const classes = useStyles();
  return (
    <Box className={classes.box}>
      <Typography component="h1" variant="h4" className={classes.name}>
        {name}
      </Typography>

      <Typography variant="text" className={classes.description}>
        {shortDescription}
      </Typography>

      <Box className={classes.boxPrice}>
        <Box component="span" className={classes.salePrice}>
          {formatPrice(salePrice)}
        </Box>

        {promotionPercent > 0 && (
          <>
            <Box component="span" className={classes.oriPrice}>
              {formatPrice(originalPrice)}
            </Box>
            <Box component="span" className={classes.promoPercent}>
              {`-${promotionPercent}%`}
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
}

export default ProductInfo;
