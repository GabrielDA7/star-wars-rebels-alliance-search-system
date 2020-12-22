import React from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: 'none',
    color: theme.palette.common.white,
    '&:hover': {
      color: theme.palette.secondary.main,
    },
  },
  text: {
    marginLeft: theme.spacing(1),
  },
}));

function BackLink({ to }) {
  const classes = useStyles();
  return (
    <Grid container item xs={12}>
      <Link to={to} className={classes.link}>
        <Grid container alignItems="center">
          <ArrowBackIcon />
          <Typography className={classes.text} variant="h5" component="span">Back</Typography>
        </Grid>
      </Link>
    </Grid>
  );
}

export default BackLink;
