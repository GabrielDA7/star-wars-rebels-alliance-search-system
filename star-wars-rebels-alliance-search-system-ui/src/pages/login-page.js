import React, { useState } from 'react';
import { useFormik } from 'formik';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import * as Yup from 'yup';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core';
import { useAuth } from '../contexts/auth-context';
import PageContainer from '../components/page-container';

const useStyles = makeStyles((theme) => ({
  input: {
    '& .MuiFormLabel-root': {
      color: theme.palette.common.white,
    },
    '& .MuiInputBase-input': {
      color: theme.palette.common.white,
      fontWeight: 'bold',
    },
    '& .MuiOutlinedInput-notchedOutline, .MuiOutlinedInput-root:hover': {
      borderColor: `${theme.palette.common.white} !important`,
    },
  },
  button: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.common.white,
  },
  title: {
    color: theme.palette.common.white,
  },
}));

function LoginPage() {
  const classes = useStyles();
  const [error, setError] = useState(null);
  const { login } = useAuth();
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required('Required'),
      password: Yup.string()
        .required('Required'),
    }),
    onSubmit: (values) => {
      login(values)
        .catch((error) => setError(error));
    },
  });

  return (
    <PageContainer>
      <Grid container justify="center">
        <Grid container item xs={12} sm={6} spacing={2}>
          <Grid container item xs={12} justify="center">
            <Typography variant="h3" component="h1" className={classes.title}>
              Login
            </Typography>
          </Grid>
          {error ? (
            <Grid item xs={12}>
              <Alert severity="error">{error.message}</Alert>
            </Grid>
          ) : null}
          <Grid item xs={12}>
            <form onSubmit={formik.handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    className={classes.input}
                    color="secondary"
                    fullWidth
                    error={!!formik.errors.username}
                    id="username"
                    name="username"
                    label="Username"
                    defaultValue={formik.values.username}
                    onChange={formik.handleChange}
                    helperText={formik.errors.username}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    className={classes.input}
                    fullWidth
                    color="secondary"
                    error={!!formik.errors.password}
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    defaultValue={formik.values.password}
                    onChange={formik.handleChange}
                    helperText={formik.errors.password}
                    variant="outlined"
                  />
                </Grid>
                <Grid container item xs={12}>
                  <Button color="secondary" type="submit" size="large" variant="contained" fullWidth className={classes.button}>
                    Login
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Grid>
    </PageContainer>
  );
}

export default LoginPage;
