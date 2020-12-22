import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  valueKey: {
    color: theme.palette.primary.light,
    borderBottom: `1px solid ${theme.palette.primary.light}`,
    fontWeight: 'bold',
  },
  value: {
    color: theme.palette.common.white,
  },
}));

function ValueContainer({ valueKey, value }) {
  const classes = useStyles();
  return (
    <Grid container item xs={12}>
      <Grid item xs={12}>
        <Typography variant="caption" display="block" className={classes.valueKey} gutterBottom>
          {valueKey}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" component="span" display="block" className={classes.value}>
          {value}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default ValueContainer;
