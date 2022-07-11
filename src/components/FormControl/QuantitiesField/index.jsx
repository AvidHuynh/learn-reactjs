import { Box, FormHelperText, IconButton, makeStyles, Typography } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { AddCircleOutline, RemoveCircleOutline } from '@material-ui/icons';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';

QuantitiesField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disable: PropTypes.bool,
};

const useStyles = makeStyles((theme) => ({
  root: {},
  box: {
    display: 'flex',
    flexFlow: 'row nowrap',
    maxWidth: 200,
    alignItems: 'center',
  },
  remove: {},
  add: {},
}));

function QuantitiesField(props) {
  const { form, name, label } = props;
  const { control, setValue } = form;
  const classes = useStyles();
  return (
    <div>
      <Typography style={{ padding: 0, marginLeft: 20, fontWeight: 'normal', fontSize: 18 }}>Số lượng</Typography>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, onBlur, value, name, ref }, fieldState: { invalid, isTouched, error } }) => (
          <Box className={classes.box}>
            <IconButton onClick={() => setValue(name, Number.parseInt(value) ? Number.parseInt(value) - 1 : 1)}>
              <RemoveCircleOutline />
            </IconButton>

            <FormControl error={isTouched && invalid} margin="normal" variant="outlined" size="small">
              <OutlinedInput
                id={name}
                error={invalid}
                type="number"
                value={value}
                onBlur={onBlur}
                onChange={onChange}
              />
            </FormControl>

            <IconButton onClick={() => setValue(name, Number.parseInt(value) ? Number.parseInt(value) + 1 : 1)}>
              <AddCircleOutline />
            </IconButton>
          </Box>
        )}
      />
    </div>
  );
}

export default QuantitiesField;
