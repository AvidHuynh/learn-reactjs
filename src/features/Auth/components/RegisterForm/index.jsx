import { yupResolver } from '@hookform/resolvers/yup';
import { Avatar, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { LockOutlined } from '@material-ui/icons';
import PasswordField from 'components/FormControl/PasswordField';
import { PropTypes } from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import InputField from './../../../../components/FormControl/InputField/index';

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

function RegisterForm(props) {
  const useStyles = makeStyles((theme) => ({
    root: {
      paddingTop: theme.spacing(0),
    },

    avatar: {
      margin: '0 auto',
      backgroundColor: theme.palette.secondary.main,
    },

    create: {
      textAlign: 'center',
      margin: theme.spacing(1, 0),
    },

    submit: {
      margin: theme.spacing(2, 0, 1),
      lineHeight: theme.spacing(0.25),
    },
  }));

  const classes = useStyles();

  const schema = yup.object().shape({
    fullName: yup
      .string()
      .required('Please enter your full name')
      .test('should has at least two words', 'Please enter at least two word', (value) => {
        return value.split(' ').length >= 2;
      }),
    email: yup.string().required('Please enter your email').email('Please enter a valid email address'),
    password: yup.string().required('Please enter your password').min(6, 'Please enter at least 6 character'),
    retypePassword: yup
      .string()
      .required('Please retype your password')
      .oneOf([yup.ref('password')], 'Password does not match')
  });

  const form = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      retypePassword: '',
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
    <div className={classes.root}>
      <Avatar className={classes.avatar}>
        <LockOutlined></LockOutlined>
      </Avatar>

      <Typography component="h3" variant="h5" className={classes.create}>
        Sign Up
      </Typography>

      {/* form.hanldeSubmit là của thằng form, còn thằng đối số handleSubmit là hàm mới đc định nghĩa phía trên */}
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="fullName" label="Full Name" form={form} />
        <InputField name="email" label="Email" form={form} />
        <PasswordField name="password" label="Password" form={form} />
        <PasswordField name="retypePassword" label="Retype Password" form={form} />
        <Button type="submit" variant="contained" color="primary" fullWidth className={classes.submit}>
          Create An Account
        </Button>
      </form>
    </div>
  );
}

export default RegisterForm;
