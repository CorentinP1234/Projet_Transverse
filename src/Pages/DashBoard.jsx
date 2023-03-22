import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Image_PROFILE from '../Profile_PAGE/Image_PROFILE';
import Learning_XP_Box from '../Profile_PAGE/Learning_XP_Box_PROFILE';
import Historique_Missions from '../Profile_PAGE/HistoriqueMissions_PROFILE';
import missions from '#/data/missions.json';


function sum_XP(rows) {
  let sum = 0;
  for (let i = 0; i < rows.length; i++) {
    sum += rows[i].XP;
  }
  return sum;
}


const mdTheme = createTheme();

function DashBoard() {

  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box
      component="main"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[900],
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
      }}
    >
      <Toolbar />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          {/* Chart */}
          <Grid item xs={12} md={8} lg={9}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 240,
              }}
            >
              <Image_PROFILE />
            </Paper>
          </Grid>
          {/* Recent Deposits */}
          <Grid item xs={12} md={4} lg={3}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 240,
              }}
            >
              <Learning_XP_Box sum_XP={sum_XP(missions)} />
            </Paper>
          </Grid>
          {/* Recent Orders */}
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              <Historique_Missions missions={missions} />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default DashBoard;
