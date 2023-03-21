import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

function sum_XP(rows) {
  sum = 0;
  for (i = 0; i<rows.length; i++) {
    sum += rows[i].amount;
  }
  return sum;
}

const rows = [
  createData(
    0,
    '16 Mars, 2019',
    'participation séance',
    'Villejuif 78000',
    'Atlante',
    2,
  ),
  createData(
    1,
    '16 Mars, 2019',
    'journée porte ouverte',
    'Villejuif 78000',
    'EFREI',
    4,
  ),
  createData(
    2,
    '16 Mars, 2019', 
    'la daronne à romain', 
    'Villejuif 78000', 
    'JSP', 
    10000),
  createData(
    3,
    '16 Mars, 2019',
    'participation séance',
    'Villejuif 78000',
    'Efrei Chess',
    1,
  ),
  createData(
    4,
    '15 Mars, 2019',
    'journée associative',
    'Villejuif 78000',
    'Le millésime',
    5,
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Activités récentes</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Type d'évènement</TableCell>
            <TableCell>Lieux</TableCell>
            <TableCell>association</TableCell>
            <TableCell align="right">Learning XP</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{`${row.amount}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        voir d'autres activités
      </Link>
    </React.Fragment>
  );
}
