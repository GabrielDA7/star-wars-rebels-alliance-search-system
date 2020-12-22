import React from 'react';
import { makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(2),
  },
}));

function PageContainer({ children }) {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      {children}
    </Container>
  );
}

export default PageContainer;
