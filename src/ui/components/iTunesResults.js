// src/ui/components/iTunesSearch.js
import React from "react";
import { useSelector } from "react-redux";
import Podcast from "./Podcast";

const Header = () => {
  return (
    <div className="flex w-full h-10 border-b border-white border-opacity-5">
      <div className="w-[100px] pl-4 text-white text-opacity-30 text-base font-semibold font-['Quicksand']">
        #
      </div>
      <div className="flex-1 text-white text-opacity-30 text-sm font-semibold font-['Quicksand']">
        Name
      </div>
      <div className="w-[250px] text-white text-opacity-30 text-sm font-semibold font-['Quicksand']">
        Released
      </div>
      <div className="w-[150px] text-white text-opacity-30 text-sm font-semibold font-['Quicksand']">
        Description
      </div>
      <div className="w-3.5 h-3.5 left-[773px] top-[1px] " />
    </div>
  );
};

const ITunesResults = () => {
  const results = useSelector((state) => state.itunes.results);
  const status = useSelector((state) => state.itunes.status);

  return (
    <div className="flex h-full w-full justify-center items-center">
      <div className="text-white text-opacity-40 text-base font-normal font-['Quicksand'] gap-4 h-full w-[832px]">
        <Header />
        {status === "loading" ? (
          <p>Loading...</p>
        ) : status === "succeeded" ? (
          <ul className="overflow-y-auto gap-1">
            {results.map((result) => (
              <Podcast
                key={result.trackId}
                name={result.trackName}
                image={result.artworkUrl60}
                artistName={result.artistName}
                collectionName={result.collectionName}
                releaseDate={result.releaseDate}
              />
            ))}
          </ul>
        ) : status === "failed" ? (
          <p>Error: An error occurred while fetching data.</p>
        ) : null}
      </div>
    </div>
  );
};

export default ITunesResults;
