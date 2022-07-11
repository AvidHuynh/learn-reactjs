import { Box, Grid, makeStyles } from '@material-ui/core';
import { STACTIS_HOST, THUMBNAIL_PLACEHOLDER } from 'constants/index';
import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router-dom';

Product.propTypes = {
  infoProduct: PropTypes.object,
};

const useStyles = makeStyles((theme) => ({
  hover: {
    cursor: 'pointer',
  }
}))

function Product({ infoProduct }) {
  const classes = useStyles();
  const thumbnailUrl = infoProduct.thumbnail ? `${STACTIS_HOST}${infoProduct.thumbnail?.url}` : THUMBNAIL_PLACEHOLDER;
  const history = useHistory();
  const hanldeClick = () => {
    history.push(`/products/${infoProduct.id}`);
  };
  return (
    <Box padding={1} minHeight="215px" onClick={hanldeClick} className={classes.hover}>
      <Box>
        <img src={thumbnailUrl} alt={infoProduct.name} width="100%" />
      </Box>

      <Box padding={1}>
        <Grid container variant="text">
          {infoProduct.name}
        </Grid>

        <Grid variant="text">
          <Box component="span" fontWeight="bold" mr={1}>
            {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(infoProduct.salePrice)}
          </Box>
          {infoProduct.promotionPercent > 0 ? `- ${infoProduct.promotionPercent}%` : ''}
        </Grid>
      </Box>
    </Box>
  );
}

export default Product;
