import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

function getCurrentDate() {
  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let current = `${day}-${month}-${year}`
  return current
}

export default function Deposits() {
  return (
    <React.Fragment>
      <Title>Learning XP</Title>
      <Typography component="p" variant="h4">
        {}/20
      </Typography>
      <Typography fontSize={15} sx={{ flex: 1 }}>
      <br></br>
      <br></br>
        {getCurrentDate()}
      </Typography>
    </React.Fragment>
  );
}
