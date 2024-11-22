import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function Loading({size}){

    return (
        <div className='loading'>
            <Box sx={{ display: 'flex', margin:0}}>
          <CircularProgress size={size?size:40}/>
        </Box>
        </div>
        
      );
}

export default Loading

