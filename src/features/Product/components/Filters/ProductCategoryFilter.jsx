import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, makeStyles } from '@material-ui/core';
import categoryApi from 'Api/categoryApi';

ProductCategoryFilter.propTypes = {
  onChange: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },

  menu: {
    padding: 0,
    margin: 0,
    listStyleType: 'none',
    '& > li': {
      marginTop: 5,
      fontWeight: 300,
      '&:hover': {
        cursor: 'pointer',
        color: theme.palette.primary.main,
      },
    },
  },
}));

function ProductCategoryFilter({ onChange }) {
  const [categoryList, setCategoryList] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    (async () => {
      try {
        const list = await categoryApi.getAll();
        setCategoryList(
          list.map((x) => ({
            id: x.id,
            name: x.name,
          }))
        );
      } catch (error) {
        console.log('Fetch API failed:', error);
      }
    })();
  }, []);

  const hanldeCategoryClick = (category) => {
    if (onChange) {
      onChange(category.id);
    }
  };

  return (
    <Box className={classes.root}>
      <Typography variant="subtitle2">DANH MỤC SẢN PHẨM</Typography>
      <ul className={classes.menu}>
        {categoryList.map((category) => (
          <li key={category.id} onClick={() => hanldeCategoryClick(category)}>
            <Typography variant="subtitle1">{category.name}</Typography>
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default ProductCategoryFilter;
