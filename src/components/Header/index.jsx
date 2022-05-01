import { Box, Container, IconButton, Menu, MenuItem } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { AccountCircle, Close } from '@material-ui/icons';
import CodeIcon from '@material-ui/icons/Code';
import Register from 'features/Auth/components/Register';
import { logout } from 'features/Auth/userSlice';
import { React, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import Login from './../../features/Auth/components/Login/index';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 0,
  },
  menuButton: { 
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    textDecoration: 'none',
    color: '#fff',
  },
  icon: {
    position: 'absolute',
    top: theme.spacing(1),
    right: theme.spacing(1),
    color: theme.palette.grey,
  },
}));

const MODE = {
  LOGIN: 'login',
  REGISTER: 'register',
};
export default function ButtonAppBar() {
  const loginStatus = useSelector((state) => state.user.current);
  const isLogin = !!loginStatus.id;
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState(MODE.REGISTER);
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleClickCloseMenu = () => {
    const action = logout();
    dispatch(action);
  };

  return (
    <Box >
      <AppBar position="static" >
        <Container>
          <Toolbar className={classes.root}>
            <CodeIcon className={classes.menuButton} color="inherit" />
            <Typography variant="h6" className={classes.title}>
              <Link className={classes.link} to="/">
                AVID STORE
              </Link>
            </Typography>

            <NavLink className={classes.link} to="/products">
              <Button color="inherit">PRODUCT</Button>
            </NavLink>

            <NavLink className={classes.link} to="/todo">
              <Button color="inherit">TODO</Button>
            </NavLink>

            {!isLogin && (
              <Button color="inherit" onClick={handleClickOpen}>
                REGISTER
              </Button>
            )}

            {isLogin && (
              <IconButton color="inherit" onClick={handleClick}>
                <AccountCircle />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Menu
        keepMounted
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        getContentAnchorEl={null}
      >
        <MenuItem onClick={handleCloseMenu}>My account</MenuItem>
        <MenuItem onClick={handleClickCloseMenu}>Logout</MenuItem>
      </Menu>

      <Dialog
        disableEscapeKeyDown
        disableBackdropClick
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <IconButton className={classes.icon} onClick={handleClose}>
          <Close />
        </IconButton>

        <DialogContent>
          {mode === MODE.REGISTER && (
            <>
              <Register closeDialog={handleClose} />
              <Box textAlign="center">
                <Button color="primary" onClick={() => setMode(MODE.LOGIN)}>
                  Already have account. Login here
                </Button>
              </Box>
            </>
          )}

          {mode === MODE.LOGIN && (
            <>
              <Login closeDialog={handleClose} />
              <Box textAlign="center">
                <Button color="primary" onClick={() => setMode(MODE.REGISTER)}>
                  Dont have an account. Register here
                </Button>
              </Box>
            </>
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
}
