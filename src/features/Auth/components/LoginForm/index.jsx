import { yupResolver } from '@hookform/resolvers/yup';
import { Avatar, Button, LinearProgress, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { LockOutlined } from '@material-ui/icons';
import PasswordField from 'components/FormControl/PasswordField';
import { PropTypes } from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import InputField from '../../../../components/FormControl/InputField/index';

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};

function LoginForm(props) {
  const useStyles = makeStyles((theme) => ({
    root: {
      padding: theme.spacing(1, 0),
      width: 500,
    },

    avatar: {
      top: theme.spacing(1),
      margin: '0 auto',
      backgroundColor: theme.palette.secondary.main,
    },

    create: {
      textAlign: 'center',
      margin: theme.spacing(2, 0),
    },

    submit: {
      margin: theme.spacing(2, 0, 1),
    },

    progress: {
      position: 'absolute',
      top: theme.spacing(1),
      left: 0,
      right: 0,
    },
  }));

  const classes = useStyles();

  const schema = yup.object().shape({
    identifier: yup.string().required('Please enter your email').email('Please enter a valid email address'),
    password: yup.string().required('Please enter your password').min(6, 'Please enter at least 6 character'),
  });

  const form = useForm({
    defaultValues: {
      identifier: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      await onSubmit(values);
    }
  };

  const { isSubmitting } = form.formState;

  return (
    <div className={classes.root}>
      {isSubmitting && <LinearProgress className={classes.progress} />}
      <Avatar className={classes.avatar}>
        <LockOutlined></LockOutlined>
      </Avatar>

      <Typography component="h3" variant="h5" className={classes.create}>
        Login
      </Typography>

      {/* form.hanldeSubmit là của thằng form, còn thằng đối số handleSubmit là hàm mới đc định nghĩa phía trên */}
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="identifier" label="Email" form={form} />
        <PasswordField name="password" label="Password" form={form} />
        <Button
          disabled={isSubmitting}
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          size="large"
          className={classes.submit}
        >
          LogIn
        </Button>
      </form>
    </div>
  );
}

export default LoginForm;
