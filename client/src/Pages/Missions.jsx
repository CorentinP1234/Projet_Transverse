import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useEffect, useState } from 'react';
// import MissionCard from '../components/MissionCard';

const theme = createTheme();

const tiers = [
  {
    title: 'Journée porte ouverte',
    price: '2',
    description: [
      'date : 66 juin 2066',
      'heure : 10h15',
      'lieux : campus bordeau',
      'durée : 10h',
    ],
    buttonText: 'Je participe',
    buttonVariant: 'outlined',
  },
  {
    title: 'Tournoi de mathématiques',
    // subheader: 'Most popular',
    price: '3',
    description: [
      'date : 19 Mars 2022',
      'heure : 14H40',
      'lieux : Campus république',
      'durée : 2h',
    ],
    buttonText: 'Je participe',
    buttonVariant: 'outlined',
    //buttonVariant: 'contained',
  },
  {
    title: 'Voyage Bureau des sports',
    price: '5',
    description: [
      'date : 34/26 Avil',
      'heure : 8h10',
      'lieux : camping en Lozère',
      'durée : 2j',
    ],
    buttonText: 'Je participe',
    buttonVariant: 'outlined',
  },
];

const footers = [
  {
    title: 'Company',
    description: ['Team', 'History', 'Contact us', 'Locations'],
  },
  {
    title: 'Features',
    description: [
      'Cool stuff',
      'Random feature',
      'Team feature',
      'Developer stuff',
      'Another one',
    ],
  },
  {
    title: 'Resources',
    description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
  },
];
// fetch("/missions").then(data => {
//   console.log(data)
// })

function PricingContent() {
  const [missions, setBackendData] = useState([])

  useEffect(() => {
    fetch("/api/missions")
      .then(response => response.json())
      .then(missions => {
        missions.forEach((mission) => {
          mission.infos = [
            `Date : ${mission.date}`,
            `Heure : ${mission.heure}`,
            `Lieu : ${mission.lieu}`,
            `Durée : ${mission.durée}`,
          ];
        });
        return missions;
      })
      .then(missions => {
        setBackendData(missions);
        console.log(missions); // This will only be executed after setBackendData has finished updating the state
      });
  }, []);

  return (
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />

      {/* Hero unit */}
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Missions
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" component="p">
          Viens rejoindre des missions pour participer à la vie de l'école et accumuler des points learning XP
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {missions.map((mission) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={mission.id}
              xs={12}
              sm={mission.title === 'Enterprise' ? 12 : 6}
              md={4}
            >
              <Card>
                <Button fullWidth variant={'outlined'} style={{ padding: 0, width: '100%' }} >
                  <CardHeader
                    title={mission.titre}
                    subheader={mission.subheader}
                    titleTypographyProps={{ align: 'center' }}
                    action={mission.title === 'Pro' ? <StarIcon /> : null}
                    subheaderTypographyProps={{
                      align: 'center',
                    }}
                    sx={{
                      backgroundColor: (theme) =>
                        theme.palette.mode === 'light'
                          ? theme.palette.grey[200]
                          : theme.palette.grey[700],
                    }}
                  />
                </Button>
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                    }}
                  >
                    <Typography component="h2" variant="h4" color="text.primary">
                      {mission.xp} XP
                    </Typography>
                  </Box>
                  <ul>
                    {mission.infos.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={'outlined'}>
                    {'REJOINDRE ICI'}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* Footer */}
      <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
        }}
      >
      </Container>
      {/* End footer */}
    </React.Fragment>
  );
}


export default function Missions() {
  return (
    <ThemeProvider theme={theme}>
      <div className="Container">
        <div className="shift" style={{ height: 43 }}></div>
        <PricingContent />
      </div>
    </ThemeProvider>
  );
}

