import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/auth-context';
import logo from '../assets/images/logo.png';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.light,
  },
  logo: {
    height: '45px',
    width: 'auto',
  },
}));

function Header() {
  const classes = useStyles();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Container>
          <Grid container justify="space-between" alignItems="center">
            <Link to="/">
              <img src={logo} alt="logo" className={classes.logo} />
            </Link>
            {user ? (
              <Button variant="outlined" color="secondary" onClick={() => handleLogout()}>
                Logout
              </Button>
            ) : null}
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
