import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import iTunesReducer from "./adapters/redux/itunesSlice";
import ITunesSearch from "./ui/components/iTunesSearch";
import ITunesResults from "./ui/components/iTunesResults";
import { Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const store = configureStore({
  reducer: {
    itunes: iTunesReducer,
  },
});

function App() {
  return (
    <Provider store={store}>
      <div className="w-full h-screen bg-neutral-950">
        <div className="w-full h-full bg-neutral-950 bg-opacity-20">
          <div className="pl-5 pt-[30px] pb-5 justify-center items-start gap-[15px] inline-flex w-full">
            <ITunesSearch />
          </div>
          <div className="flex !justify-end w-[822px] m-auto">
            <Button
              component="label"
              classes={{ root: '!text-white'}}
              variant="text"
              startIcon={<SearchIcon className="text-white" />}
              endIcon={<KeyboardArrowDownIcon className="text-white" />}
            >
              Order by
            </Button></div>
          <ITunesResults />
        </div>
      </div>
    </Provider>
  );
}

export default App;
