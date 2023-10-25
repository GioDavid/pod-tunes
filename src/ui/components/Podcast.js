import React from 'react';
import { Paper, Avatar, Typography, Box } from '@mui/material';

function Podcast({name}) {
  return (
    <Paper
      className="w-[832px] h-20 pr-3.5 pt-3.5 pb-19 border-b border-white border-opacity-5 flex justify-start items-center"
    >
      <Box
        className="w-[818px] h-[47px] relative"
      >
        <Avatar
          className="w-45 h-45 left-50 top-2 absolute rounded-lg"
          alt="Profile Image"
          src="https://via.placeholder.com/45x45"
        />
        <Box
          className="w-173 h-38 left-115 top-5 absolute flex-col justify-start items-start"
        >
          <Typography
            className="text-white text-base font-medium font-Quicksand"
          >
           {name}
          </Typography>
          <Typography
            className="text-white text-opacity-30 text-sm font-medium font-Quicksand"
          >
            Ken Adams
          </Typography>
        </Box>
        <Typography
          className="w-210 left-396 top-5 absolute text-white text-opacity-30 text-base font-medium font-Quicksand"
        >
          Discovering your true passion is an ...
        </Typography>
        <Typography
          className="left-726 top-0 absolute text-white text-opacity-30 text-base font-medium font-Quicksand"
        >
          an hour ago
        </Typography>
        <Box
          className="w-30 h-30 px-3.75 left-0 top-10 absolute rounded-71.25 justify-center items-center gap-7.5 inline-flex"
        >
          <Box
            sx={{
              width: '15px',
              height: '15px',
              position: 'relative',
            }}
            className="w-15 h-15 relative"
          />
        </Box>
      </Box>
    </Paper>
  );
}

export default Podcast;
