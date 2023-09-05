import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

export default function Court() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid xs={12}>
            <Paper variant="outlined" square>
              <LeftCourt />
            </Paper>
          </Grid>
        </Grid>
      </Box>
      

      <Box sx={{ '& > :not(style)': { m: 1 } }}>
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Box>
    </div>
  );
}

function LeftCourt() {
  return (
    <div>
      <Box sx={{ display: 'flex', '& > :not(style)': { m: 0, width: 230, height: 100, }, }} >
        <Paper variant="outlined" square>
        </Paper>
      </Box>
      <Box sx={{ display: 'flex', '& > :not(style)': { m: 0, width: 230, height: 100, }, }} >
        <Paper variant="outlined" square>
        </Paper>
      </Box>
    </div>
  );
}

function RightCourt() {
  return (
    <div>
      <Box sx={{ display: 'flex', '& > :not(style)': { m: 0, width: 230, height: 100, }, }} >
        <Paper variant="outlined" square>
        </Paper>
      </Box>
      <Box sx={{ display: 'flex', '& > :not(style)': { m: 0, width: 230, height: 100, }, }} >
        <Paper variant="outlined" square>
        </Paper>
      </Box>
    </div>
  );
}