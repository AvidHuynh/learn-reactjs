import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@material-ui/core';
import QuantitiesField from 'components/FormControl/QuantitiesField';
import { PropTypes } from 'prop-types';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

AddToCartForm.propTypes = {
  onSubmit: PropTypes.func,
};

function AddToCartForm({ onSubmit = null }) {
  const schema = yup.object().shape({
    quantities: yup
      .number()
      .required('Please add product quantity')
      .min(1, 'Please enter at least 1')
      .typeError('Please enter input quantities'),
  });

  const form = useForm({
    defaultValues: {
      quantities: 1,
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (values) => {
    if (onSubmit(values)) {
      await onSubmit(values);
    }
  };

  const { isSubmitting } = form.formState;

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <QuantitiesField name="quantities" label="Số lượng" form={form} />
      <Button
        disabled={isSubmitting}
        type="submit"
        variant="contained"
        color="secondary"
        style={{ width: '270px', margin: '15px 0 0 15px' }}
        size="large"
      >
        ADD TO CART
      </Button>
    </form>
  );
}

export default AddToCartForm;
