// src/ui/components/iTunesSearch.js
import React from 'react';
import { useSelector } from 'react-redux';
import Podcast from './Podcast';

  const ITunesResults = () => {
  const results = useSelector((state) => state.itunes.results);
  const status = useSelector((state) => state.itunes.status);

  return (
    <div className="text-white text-opacity-40 text-base font-normal font-['Quicksand']">
      {status === 'loading' ? (
        <p>Loading...</p>
      ) : status === 'succeeded' ? (
        <ul>
          {results.map((result) => (
            <Podcast key={result.trackId} name={result.trackName} />
          ))}
        </ul>
      ) : status === 'failed' ? (
        <p>Error: An error occurred while fetching data.</p>
      ) : null}
    </div>
  );
}

export default ITunesResults;
