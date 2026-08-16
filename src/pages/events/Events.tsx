import {
  Box,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material"
import { RoutePath } from "../../RoutePath"
import { PastEvents } from "./PastEvents"

type Event = {
  title: string
  date: string
  time: string
}

export function Events() {
  const events: Event[] = [
    {
      title: "Gaukönigsball",
      date: "07.11.2026",
      time: "19:00 Uhr",
    },
    {
      title: "Königsschießen",
      date: "21.11.2026",
      time: "14:00 Uhr",
    },
    {
      title: "Königsfeier",
      date: "28.11.2026",
      time: "19:00 Uhr",
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
      <PastEvents />
    </Box>
  )
}
