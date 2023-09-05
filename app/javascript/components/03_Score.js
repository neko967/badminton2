import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

export default function Score() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid xs={6}>
            <Paper variant="outlined">1</Paper>
          </Grid>
          <Grid xs={6}>
            <Paper variant="outlined">1</Paper>
          </Grid>
        </Grid>
      </Box>
    <Box
      sx={{
        display: 'flex',
        '& > :not(style)': {
          m: 1,
          width: 250,
          height: 200,
        },
      }}
    >
      <Paper variant="outlined">1</Paper>
      <Paper variant="outlined">1</Paper>
    </Box>
    </div>
  );
}