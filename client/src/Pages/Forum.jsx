import * as React from 'react';

import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme();


export default function Forum() {
  return (
    <ThemeProvider theme={theme}>
    <div className="Container">
    <div className="shift" style={{ height: 43 }}></div>
    <div style={{ backgroundColor: 'grey' }}>
      <h1>Forum Page</h1>
      <h1>Forum Page</h1>
      <h1>Forum Page</h1>
      <h1>Forum Page</h1> 
    </div>
    </div>
    </ThemeProvider>
  );
}