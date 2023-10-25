import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import iTunesReducer from './adapters/redux/itunesSlice';
import ITunesSearch from './ui/components/iTunesSearch';

const store = configureStore({
  reducer: {
    itunes: iTunesReducer,
  },
});

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ITunesSearch />
      </div>
    </Provider>
  );
}

export default App;
