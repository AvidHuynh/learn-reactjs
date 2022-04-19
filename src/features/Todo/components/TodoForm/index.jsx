import React from 'react';
import InputField from './../../../../components/FormControl/InputField/index';
import { useForm } from 'react-hook-form';
import { PropTypes } from 'prop-types';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

function TodoForm(props) {
  const schema = yup.object().shape({
    title: yup.string().required('Please enter title').min(5, 'Title is too short'),
  });

  const form = useForm({
    defaultValues: {
      title: '',
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      onSubmit(values);
    }
    form.reset();
  };

  return (
    // form.hanldeSubmit là của thằng form, còn thằng đối số handleSubmit là hàm mới đc định nghĩa phía trên
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <InputField name="title" label="Todo" form={form} />
    </form>
  );
}

export default TodoForm;
