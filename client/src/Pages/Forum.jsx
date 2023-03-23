import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import image from '#/assets/image_login.jpg';

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