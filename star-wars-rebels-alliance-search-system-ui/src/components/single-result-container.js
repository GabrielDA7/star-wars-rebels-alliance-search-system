import React from 'react';

import Grid from '@material-ui/core/Grid';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import IconButton from '@material-ui/core/IconButton';
import ResultItem from './result-item';
import { useSearch } from '../contexts/search-context';

const useStyles = makeStyles((theme) => ({
  navigationContainer: {
    '& > *:not(:last-child)': {
      marginRight: theme.spacing(1),
    },
  },
  header: {
    borderBottom: `3px solid ${theme.palette.primary.light}`,
  },
  typography: {
    color: theme.palette.common.white,
  },
  list: {
    width: '100%',
  },
}));

function SingleResultContainer({ data, type, filter }) {
  const classes = useStyles();
  const { handlePage } = useSearch();

  return (
    <Grid item container spacing={2}>
      <Grid item container justify="space-between" alignItems="center">
        <Grid className={classes.header} container justify="space-between" item xs={12}>
          <Typography className={classes.typography} variant="h4" color="textPrimary">
            {data.count}
            {' '}
            {filter ? 'results' : type}
          </Typography>
          <Box className={classes.navigationContainer} display="inline-block">
            {data.previous ? (
              <IconButton color="secondary" aria-label="previous page" onClick={() => handlePage(data.previous, type)}>
                <ArrowBackIosIcon />
              </IconButton>
            ) : null}
            {data.next ? (
              <IconButton color="secondary" aria-label="next page" onClick={() => handlePage(data.next, type)}>
                <ArrowForwardIosIcon />
              </IconButton>
            ) : null}
          </Box>
        </Grid>
      </Grid>
      <Grid container item xs={12}>
        <GridList className={classes.list} cellHeight="auto" cols={3} spacing={10}>
          {data.results.map((result) => (
            <GridListTile key={result.id}>
              <ResultItem data={result} type={type} />
            </GridListTile>
          ))}
        </GridList>
      </Grid>
    </Grid>
  );
}

export default SingleResultContainer;
