import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

export default function Player() {

  return (
    <div>
      <PlayerDepending />
      <PlayerName />
    </div>
  );
}

function PlayerDepending() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid xs={12}>
          <Item>xs=12</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
function PlayerName() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid xs={3}>
          <Item>xs=3</Item>
        </Grid>
        <Grid xs={3}>
          <Item>xs=3</Item>
        </Grid>
        <Grid xs={3}>
          <Item>xs=3</Item>
        </Grid>
        <Grid xs={3}>
          <Item>xs=3</Item>
        </Grid>
      </Grid>
    </Box>
  );
}