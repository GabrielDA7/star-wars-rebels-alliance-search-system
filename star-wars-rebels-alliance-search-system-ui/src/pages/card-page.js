import React, { useEffect, useState } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Alert from '@material-ui/lab/Alert';
import { getContent } from '../api/content-api';
import Card from '../components/card';
import BackLink from '../components/back-link';
import PageContainer from '../components/page-container';

function CardPage() {
  const { type, id } = useParams();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setIsLoading(true);
    getContent({ type, id })
      .then((data) => setData(data))
      .then(() => setIsLoading(false))
      .catch((error) => setError(error));
  }, [setIsLoading, setData, setError, id, type]);

  return (
    <PageContainer>
      <Grid container item xs={12} justify="center" spacing={2}>
        <BackLink to="/" />
        {
                    error
                      ? error.statusCode === 404
                        ? <Redirect to="/not-found" />
                        : <Alert severity="error">An error occured</Alert>
                      : isLoading
                        ? <CircularProgress color="secondary" />
                        : <Card data={data} type={type} />
                }
      </Grid>
    </PageContainer>
  );
}

export default CardPage;
