import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from '../components/Title';

function preventDefault(event) {
  event.preventDefault();
}

export default function Historique_Missions({ missions }) {
  const rows = missions
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
              <TableCell>{row.type}</TableCell>
              <TableCell>{row.lieu}</TableCell>
              <TableCell>{row.assos}</TableCell>
              <TableCell align="right">{`${row.XP}`}</TableCell>
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
