import React from 'react';
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import BackLink from '../components/back-link';
import PageContainer from '../components/page-container';

const useStyles = makeStyles((theme) => ({
  img: {
    width: '100%',
    height: 'auto',
  },
}));

function NotFoundPage() {
  const classes = useStyles();
  return (
    <PageContainer>
      <Grid container justify="center" alignItems="center" spacing={2}>
        <BackLink to="/" />
        <Grid item xs={12}>
          <img className={classes.img} src="https://media.giphy.com/media/f7eeNCiyyIvxJyJJZS/source.gif" alt="not found gif" />
        </Grid>
      </Grid>
    </PageContainer>
  );
}

export default NotFoundPage;
