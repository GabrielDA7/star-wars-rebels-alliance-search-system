import React from 'react';
import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core';
import { categories } from '../constants';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.light,
    padding: theme.spacing(1),
    borderRadius: theme.spacing(1),
    '& > *:not(:last-child)': {
      marginRight: theme.spacing(1),
    },
  },
  button: {
    minWidth: '60x',
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.secondary.main,
    },
  },
  buttonSelected: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
  },
}));

function FilterBar({ currentFilter, handleFilterSelection }) {
  const classes = useStyles();

  return (
    <Box className={classes.root} display="flex" flexWrap="wrap">
      <Chip className={`${classes.button} ${!currentFilter ? classes.buttonSelected : ''}`} label="all" onClick={() => handleFilterSelection()} />
      {categories.map(((type, index) => <Chip key={index} className={`${classes.button} ${currentFilter === type ? classes.buttonSelected : ''}`} label={type} onClick={() => handleFilterSelection(type)} />))}
    </Box>
  );
}

export default FilterBar;
