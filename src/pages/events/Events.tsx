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
              <TableCell>Vereinsmeisterschaft</TableCell>
              <TableCell>16.09.2023</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Königsschießen</TableCell>
              <TableCell>25.11.2023</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Königsfeier</TableCell>
              <TableCell>09.12.2023</TableCell>
              <TableCell></TableCell>
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
