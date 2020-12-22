import React, {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { useQueryParams, NumberParam, StringParam } from 'use-query-params';
import { search as apiSearch } from '../api/search-api';
import { categories } from '../constants';
import useDebounce from '../hooks/use-debounce';

const SearchContext = React.createContext(null);
SearchContext.displayName = 'SearchContext';

function SearchProvider(props) {
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState();
  const [data, setData] = useState({});
  const [query, setQuery] = useQueryParams({
    filter: StringParam,
    search: StringParam,
    page: NumberParam,
  });
  query.filter = (categories.includes(query.filter)) ? query.filter : undefined;
  const { filter, search, page } = query;
  const debouncedSearchTerm = useDebounce(search, 500);

  useEffect(() => {
    setIsSearching(true);
    apiSearch({ type: filter, page, search: debouncedSearchTerm })
      .then((data) => setData(data))
      .then(() => setIsSearching(false))
      .catch((error) => setError(error));
  }, [filter, debouncedSearchTerm, page]);

  const handleFilterSelection = useCallback((filter) => {
    setQuery({ filter, page: 1 });
  }, [setQuery]);

  const handleSearch = useCallback((event) => {
    const inputValue = event.target.value;
    setQuery({ search: inputValue });
  }, [setQuery]);

  const handlePage = useCallback((page, type) => {
    const queryParamsUpdate = { page };
    if (type !== filter) queryParamsUpdate.filter = type;
    setQuery(queryParamsUpdate);
  }, [setQuery, filter]);

  const providerValue = useMemo(
    () => ({
      handleFilterSelection, handleSearch, query, data, error, isSearching, handlePage,
    }),
    [handleFilterSelection, handleSearch, query, data, error, isSearching, handlePage],
  );

  return <SearchContext.Provider value={providerValue} {...props} />;
}

function useSearch() {
  const context = React.useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearch must be used within a AuthProvider');
  }
  return context;
}

export { SearchProvider, useSearch };
