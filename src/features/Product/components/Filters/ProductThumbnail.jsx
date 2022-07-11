import React from 'react';
import PropTypes from 'prop-types';
import { THUMBNAIL_PLACEHOLDER } from 'constants/index';
import { STACTIS_HOST } from 'constants/common';
import { Box } from '@material-ui/core';

ProductThumbnail.propTypes = {
  product: PropTypes.object,
};

function ProductThumbnail({ product }) {
  const thumbnailUrl = product.thumbnail ? `${STACTIS_HOST}${product.thumbnail?.url}` : THUMBNAIL_PLACEHOLDER;
  return (
    <Box padding={1} minHeight="215px">
      <Box>
        <img src={thumbnailUrl} alt={product.name} width="100%" />
      </Box>
    </Box>
  );
}

export default ProductThumbnail;
