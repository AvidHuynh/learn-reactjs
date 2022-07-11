import { Box, Button, makeStyles, TextField, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { useState } from 'react';

ProductPriceFilter.propTypes = {
  onChange: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    borderTop: `1px solid ${theme.palette.grey[300]}`,
  },

  range: {
    marginTop: 15,
    display: 'flex',
    flexWrap: 'nowrap',
    '& > span': {
      lineHeight: 2,
      marginLeft: 5,
      marginRight: 5,
    },
  },

  btn: {
    marginTop: 15,
  },
}));

function ProductPriceFilter({ onChange }) {
  const [values, setValues] = useState({
    salePrice_gte: 0,
    salePrice_lte: 0,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const handleSubmit = () => {
    if (onChange) onChange(values);
  };
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography variant="subtitle2">GIÁ</Typography>

      <Box className={classes.range}>
        <TextField
          variant="outlined"
          size="small"
          name="salePrice_gte"
          value={values.salePrice_gte}
          onChange={handleChange}
        />
        <span>-</span>
        <TextField
          variant="outlined"
          size="small"
          name="salePrice_lte"
          value={values.salePrice_lte}
          onChange={handleChange}
        />
      </Box>

      <Button className={classes.btn} color="primary" variant="outlined" onClick={handleSubmit}>
        Áp dụng
      </Button>
    </Box>
  );
}

export default ProductPriceFilter;
