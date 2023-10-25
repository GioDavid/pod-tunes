// src/ui/components/iTunesSearch.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchiTunes } from '../../adapters/redux/itunesSlice';

  const ITunesSearch = () => {
    const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const results = useSelector((state) => state.itunes.results);
  const status = useSelector((state) => state.itunes.status);

  const handleSearch = () => {
    if (query) {
      dispatch(searchiTunes(query));
    }
  };

  return (
    <div>
      <h1>iTunes Search</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search iTunes"
      />
      <button onClick={handleSearch}>Search</button>
      {status === 'loading' ? (
        <p>Loading...</p>
      ) : status === 'succeeded' ? (
        <ul>
          {results.map((result) => (
            <li key={result.trackId}>{result.trackName}</li>
          ))}
        </ul>
      ) : status === 'failed' ? (
        <p>Error: An error occurred while fetching data.</p>
      ) : null}
    </div>
  );
}

export default ITunesSearch;
