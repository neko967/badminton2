import React from 'react'
import {createRoot} from 'react-dom/client'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

import Player from './02_Player.js';
import Score from './03_Score.js';
import Speak from './04_Speak.js';
import Court from './05_Court.js';
import Menu from './06_Menu.js';


document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('root');
  createRoot(container).render (
    <div>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
          <Player />
          <Score />
          <Speak />
          <Court />
          <Menu />
        </Container>
      </React.Fragment>
    </div>
  );
})