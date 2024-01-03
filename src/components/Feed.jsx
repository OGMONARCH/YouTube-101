import {useState, useEffect} from 'react';
import {Box, Stack, Typography} from '@mui/material';

import { Sidebar, Videos } from  '../components';

const Feed = () => {
  return (
    <Stack sx={{flexDirection: {sx: 'column',
    md: "row"
    }}}>
      {/* px here is for horizontal padding */}
      <Box sx={{height: {sx: "auto", md: "92vh"}, borderRight: "1px solid #3d3d3d", px:{sx: 0, md: 2} }}>
      <Sidebar />
      <Typography className='copyright' variant='body2' sx={{mt: 1.5, color: "#fff"}}>
        {/* This is used a simple component that is used for all texts basically instead of p tags or headings. */}
        Copyright 2024 REX Media
      </Typography>
      </Box>

      <Box p={2} sx={{overflowY: "auto", flex: 2, height: "90vh"}}>
        <Typography variant='h4' fontWeight="bold" mb={2} sx={{color: "white"}}>
            New <span style={{color: "FC1503"}}>videos</span>
        </Typography>

        <Videos videos={[]}/>
      </Box>
    </Stack>
  )
}

export default Feed