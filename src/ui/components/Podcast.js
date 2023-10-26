import React from 'react';
import { Avatar, Typography } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

function Podcast({artistName, name, image, collectionName, releaseDate}) {
  return (
    <div
      className="w-full h-20 pr-3.5 pt-3.5 pb-19 !border-b !border-white/[0.03] border-opacity-5 flex justify-start items-center !bg-black gap-8"
    >
        <div className='flex flex-1 gap-5 items-center'>
        <PlayArrowIcon className='w-[30px] h-[30px] text-white' />
        <Avatar
          className="w-45 h-45 left-50 top-2  rounded-lg"
          alt="Profile Image"
          src={image}
        />
        <div>
        <Typography
            className="text-white text-base font-medium font-Quicksand truncate h-5 w-[200px]"
          >
           {name}
          </Typography>
          <Typography
            className="text-white text-opacity-30 text-sm font-medium font-Quicksand truncate h-5 w-[200px]"
          >
            {artistName}
          </Typography>
        </div>
        </div>
        <Typography
          className="w-[210px] text-white text-opacity-30 text-base font-medium font-Quicksand truncate h-10 line-clamp-2"
        >
          {collectionName}
        </Typography>
        <Typography
          className="text-white text-opacity-30 text-base font-medium font-Quicksand"
        >
          {releaseDate}
        </Typography>
    </div>
  );
}

export default Podcast;
