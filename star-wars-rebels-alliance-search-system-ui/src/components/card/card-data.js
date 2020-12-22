import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';
import ValueContainer from './value-container';
import ResultItem from '../result-item';
import ListContainer from './list-container';

const useStyles = makeStyles((theme) => ({
  typeTitle: {
    color: theme.palette.common.white,
  },
}));

function CardData({
  relatedContentKeys, normalDataKeys, data, type,
}) {
  const classes = useStyles();
  const getRelatedContentType = (type) => {
    switch (type) {
      case 'homeworld':
        return 'planets';
      case 'characters':
        return 'people';
      case 'pilots':
        return 'people';
      case 'residents':
        return 'people';
      default:
        return type;
    }
  };

  return (
    <Grid item container spacing={4}>
      <Grid container justify="center" item xs={12}>
        <Typography variant="h4" gutterBottom className={classes.typeTitle}>
          {type}
        </Typography>
      </Grid>
      {normalDataKeys.map((key) => (
        <Grid key={key} item xs={6} sm={4}>
          <ValueContainer valueKey={key} value={data[key]} />
        </Grid>
      ))}

      {relatedContentKeys.map((key) => (
        data[key]
          ? data[key] instanceof Array
            ? data[key].length
              ? (
                <ListContainer key={key} listKey={key}>
                  {data[key].map((relatedContent) => (
                    <Grid key={relatedContent.id} item xs={6} sm={4}>
                      <ResultItem type={getRelatedContentType(key)} data={relatedContent} />
                    </Grid>
                  ))}
                </ListContainer>
              )
              : null
            : (
              <ListContainer key={key} listKey={key}>
                <Grid key={data[key].id} item xs={6} sm={4}>
                  <ResultItem type={getRelatedContentType(key)} data={data[key]} />
                </Grid>
              </ListContainer>
            )
          : null
      ))}
    </Grid>
  );
}

export default CardData;
