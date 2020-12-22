import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.light,
    borderRadius: theme.spacing(1),
    display: 'flex',
    padding: theme.spacing(1),
  },
  input: {
    '& .MuiFormLabel-root': {
      color: theme.palette.common.white,
    },
    '& .MuiInputBase-input': {
      color: theme.palette.common.white,
      fontWeight: 'bold',
    },
    '& .MuiInput-underline::before, &:hover .MuiInput-underline::before': {
      borderBottom: `1px solid ${theme.palette.common.white}`,
    },
  },
}));

function SearchBar({ handleSearch, value }) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <TextField value={value} color="secondary" className={classes.input} fullWidth label="Search" id="search" onChange={handleSearch} />
    </Box>
  );
}

export default SearchBar;
