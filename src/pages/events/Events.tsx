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

type Event = {
  title: string
  date: string
  time: string
}

export function Events() {
  const navigate = useNavigate()

  const events: Event[] = [
    {
      title: "Jahreshauptversammlung",
      date: "07.02.2026",
      time: "15:00 Uhr",
    },
    {
      title: "Erbsensuppenessen am Schützenhaus mit Schnupperschießen",
      date: "01.05.2026",
      time: "ab 11:00 Uhr",
    },
    {
      title: "Gaupokalschießen",
      date: "05.05.2026 - 22.05.2026",
      time: "mehrtägig",
    },
    {
      title: "100-Jahrfeier Schützenverein Oberwinden",
      date: "10.07.2026 - 12.07.2026",
      time: "mehrtägig",
    },
    {
      title: "Gaukönigsball",
      date: "07.11.2026",
      time: "wird bekannt gegeben",
    },
    {
      title: "Königsschießen",
      date: "21.11.2026",
      time: "wird bekannt gegeben",
    },
    {
      title: "Königsfeier",
      date: "28.11.2026",
      time: "wird bekannt gegeben",
    },
  ]

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
            {events.map((e) => (
              <TableRow key={e.title}>
                <TableCell>{e.title}</TableCell>
                <TableCell>{e.date}</TableCell>
                <TableCell>{e.time}</TableCell>
              </TableRow>
            ))}
            {events.length === 0 && (
              <TableRow>
                <TableCell colSpan={3} align="center">
                  Keine Einträge vorhanden
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Card>
      <Card sx={{ mt: 2 }}>
        <CardContent>
          <Typography variant="h5">Vergangene Veranstaltungen</Typography>
        </CardContent>
        <List>
          <ListItemButton
            onClick={() => navigate(`/${RoutePath.Events}/2024/royal-shooting`)}
          >
            <ListItemText primary="Königsfeier 2024" />
          </ListItemButton>
          <ListItem>
            <ListItemText primary="Kerb 2024" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Sommerbiathlon 2024" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Stadtfest 2024" />
          </ListItem>
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
