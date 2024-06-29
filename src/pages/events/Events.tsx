import { useNavigate } from "react-router-dom"
import {
  Box,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material"
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
              <TableCell>Sommerbiathlon</TableCell>
              <TableCell>07.07.2024</TableCell>
              <TableCell>ab 11:00 Uhr</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Schießstand auf dem Stadtfest Obernburg</TableCell>
              <TableCell>04.08.2024</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Preisschießen</TableCell>
              <TableCell>29.10. - 26.11.2024</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Schießstand auf der Kerb in Eisenbach</TableCell>
              <TableCell>29.09.2024</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Königsschießen</TableCell>
              <TableCell>23.11.2024</TableCell>
              <TableCell>15:00 Uhr</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Königsfeier</TableCell>
              <TableCell>30.11.2024</TableCell>
              <TableCell>19:00 Uhr</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Neujahrsschießen</TableCell>
              <TableCell>01.01.2025</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Jahreshauptversammlung</TableCell>
              <TableCell>01.02.2025</TableCell>
              <TableCell>15:00 Uhr</TableCell>
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
            onClick={() =>
              navigate(`/${RoutePath.Events}/2024/new-years-shooting`)
            }
          >
            <ListItemText primary="Neujahrsschießen 2024" />
          </ListItemButton>
          <ListItemButton
            onClick={() => navigate(`/${RoutePath.Events}/2023/royal-shooting`)}
          >
            <ListItemText primary="Königsschießen 2023" />
          </ListItemButton>
          <ListItem>
            <ListItemText primary="Vereinsmeisterschaft 2023" />
          </ListItem>
          <ListItemButton
            onClick={() =>
              navigate(`/${RoutePath.Events}/2023/summer-holiday-program`)
            }
          >
            <ListItemText primary="Sommerferienspiele 2023" />
          </ListItemButton>
          <ListItem>
            <ListItemText primary="Sommerbiathlon 2023" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Erbsensuppenessen 2023" />
          </ListItem>
          <ListItemButton
            onClick={() =>
              navigate(`/${RoutePath.Events}/2023/general-meeting`)
            }
          >
            <ListItemText primary="Jahreshauptversammlung 2023" />
          </ListItemButton>
          <ListItemButton
            onClick={() =>
              navigate(`/${RoutePath.Events}/2023/new-years-shooting`)
            }
          >
            <ListItemText primary="Neujahrsschießen 2023" />
          </ListItemButton>
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
