// src/ui/components/iTunesSearch.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchiTunes } from '../../adapters/redux/itunesSlice';
import { Paper, InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

  const ITunesSearch = () => {
    const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleSearch = () => {
    if (query) {
      dispatch(searchiTunes(query));
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSearch();
    }
  };

  return (
    <Paper
    component="form"
    className="w-[822px] h-[50px] rounded-[15px] flex items-center pl-5 pr-5 gap-4"
    sx={{
      backgroundColor: '#1A1A1A',
    }
  }>
    <IconButton className="w-5 h-5 mr-1" onClick={handleSearch}>
      <SearchIcon className='text-white' />
    </IconButton>
    <InputBase
      sx={{
        color: 'white',
        fontSize: '16px',
        fontFamily: 'Quicksand', 
      }}
      placeholder="Search..."
      onChange={(e) => setQuery(e.target.value)}
      onKeyPress={handleKeyPress}
    />
  </Paper>
  );
}

export default ITunesSearch;
