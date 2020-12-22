import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
      borderRadius: theme.spacing(1),
    },
  },
  typography: {
    color: theme.palette.common.white,
  },
  link: {
    textDecoration: 'none',
  },
}));

function ResultItem({ data, type }) {
  const classes = useStyles();
  const link = `/${type}/${data.id}`;

  return (
    <Link to={link} className={classes.link}>
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Typography className={classes.typography} variant="body1" component="span">
            {data.name || data.title}
          </Typography>
        </Grid>
        {data.model ? (
          <Grid item xs={12}>
            <Typography className={classes.typography} variant="body1" component="span">
              Model :
              {' '}
              {data.model}
            </Typography>
          </Grid>
        ) : null}
      </Grid>
    </Link>
  );
}

export default ResultItem;
