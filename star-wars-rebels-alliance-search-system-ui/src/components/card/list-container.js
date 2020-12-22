import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  listKey: {
    color: theme.palette.primary.light,
    borderBottom: `1px solid ${theme.palette.primary.light}`,
    fontWeight: 'bold',
  },
}));

function ListContainer({ listKey, children }) {
  const classes = useStyles();
  return (
    <Grid container item xs={12}>
      <Grid item xs={12}>
        <Typography variant="caption" display="block" className={classes.listKey} gutterBottom>
          {listKey}
        </Typography>
      </Grid>
      <Grid container item xs={12}>
        {children}
      </Grid>
    </Grid>
  );
}

export default ListContainer;
