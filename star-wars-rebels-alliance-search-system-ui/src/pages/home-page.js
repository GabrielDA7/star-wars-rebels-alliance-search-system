import React from 'react';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import Alert from '@material-ui/lab/Alert';
import FilterBar from '../components/filter-bar';
import SearchBar from '../components/search-bar';
import SingleResultContainer from '../components/single-result-container';
import { useSearch } from '../contexts/search-context';
import PageContainer from '../components/page-container';

function HomePage() {
  const {
    handleFilterSelection, handleSearch, query, data, error, isSearching,
  } = useSearch();

  return (

    <PageContainer>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <SearchBar handleSearch={handleSearch} value={query.search || ''} />
        </Grid>
        <Grid item xs={12}>
          <FilterBar currentFilter={query.filter} handleFilterSelection={handleFilterSelection} />
        </Grid>
        <Grid container item xs={12} justify="center" spacing={2}>
          {
                            error
                              ? <Alert severity="error">{error.message}</Alert>
                              : isSearching
                                ? <CircularProgress color="secondary" />
                                : Object.keys(data).map((type, index) => (
                                  <Grid item xs={12} key={index}>
                                    <SingleResultContainer data={data[type]} type={type} filter={query.filter} />
                                  </Grid>
                                ))
                        }
        </Grid>
      </Grid>
    </PageContainer>
  );
}

export default HomePage;
