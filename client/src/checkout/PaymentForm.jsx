import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function PaymentForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Liens et Contacts
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            label="Lien d'incription"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="contact discord"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="mail"
            helperText="Attention ce mail sera visible par tous les étudiants"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={50}>
          <TextField
            required
            id="cardName"
            label="Explication précise"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Mémoriser les liens de contacts pour mon profil"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
