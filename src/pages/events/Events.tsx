import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@suid/material"

export function Events() {
  return (
    <Box mt={2}>
      <Typography variant="h4">Termine</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Datum</TableCell>
            <TableCell>Zeit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Königsfeier</TableCell>
            <TableCell>03.12.2022</TableCell>
            <TableCell>ab 18:30</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Neujahrsschießen</TableCell>
            <TableCell>01.01.2023</TableCell>
            <TableCell></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Jahreshauptversammlung</TableCell>
            <TableCell>03.02.2023</TableCell>
            <TableCell>ab 15:00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Erbsensuppenessen</TableCell>
            <TableCell>01.05.2023</TableCell>
            <TableCell>ab 11:00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  )
}
