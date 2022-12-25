import { useNavigate } from "@solidjs/router"
import {
  Box,
  Card,
  CardContent,
  List,
  ListItemButton,
  ListItemText,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@suid/material"
import { RoutePath } from "../../RoutePath"

export function Events() {
  const navigate = useNavigate()

  return (
    <Box mt={2}>
      <Card>
        <CardContent>
          <Typography variant="h5">Termine</Typography>
        </CardContent>
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
              <TableCell>Neujahrsschießen</TableCell>
              <TableCell>01.01.2023</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Jahreshauptversammlung</TableCell>
              <TableCell>04.02.2023</TableCell>
              <TableCell>ab 15:00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Erbsensuppenessen</TableCell>
              <TableCell>01.05.2023</TableCell>
              <TableCell>ab 11:00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>
      <Card sx={{ mt: 2 }}>
        <CardContent>
          <Typography variant="h5">Vergangene Veranstaltungen</Typography>
        </CardContent>
        <List>
          <ListItemButton
            onClick={() => navigate(`/${RoutePath.Events}/2022/royal-shooting`)}
          >
            <ListItemText primary="Königsschießen 2022" />
          </ListItemButton>
        </List>
      </Card>
    </Box>
  )
}
