import {
  Box,
  Card,
  CardContent,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material"
import { CaptionImage } from "../../controls/CaptionImage"

type Event = {
  title: string
  date: string
}

export function Youth() {
  const events: Event[] = [
    {
      title: "Wanderung zum Dönerjosef",
      date: "24.01.2026",
    },
    {
      title: "Jahreshauptversammlung",
      date: "07.02.2026",
    },
    {
      title: "JVS in Sulzbach *",
      date: "15.04.2026",
    },
    {
      title: "Bezirksmeisterschaft Jugend",
      date: "18.04.2026",
    },
    {
      title: "JVS in Eisenbach *",
      date: "22.04.2026",
    },
    {
      title: "JVS *",
      date: "29.04.2026",
    },
    {
      title: "Finale JVS in Miltenberg",
      date: "20.05.2026",
    },
    {
      title: "Jahresabschlusswanderung",
      date: "Dezember/Januar",
    },
  ]

  return (
    <>
      <Grid container spacing={2} mt={1} mb={2}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Jugend Training
              </Typography>
              <Typography gutterBottom>
                Unser Jugendtraining findet jeden Dienstag (außer in den
                bayrischen Schulferien) von 18:00 bis 20:00 Uhr statt.
                Interessierte dürfen in dieser Zeit gerne vorbeischauen und sich
                das Training ansehen oder an einem Probetraining teilnehmen.
              </Typography>
              <Typography>
                Unser Training findet hauptsächlich mit dem Luft-/Lichtgewehr
                statt. Wenn es im Sommer sehr heiß ist, gehen wir aber auch auf
                den Bogenplatz oder trainieren mit dem Blasrohr.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5">Jugend Ausflüge und Termine</Typography>
            </CardContent>
            <Table>
              <TableBody>
                {events.map((e) => (
                  <TableRow key={e.title}>
                    <TableCell>{e.date}</TableCell>
                    <TableCell>{e.title}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Box sx={{ p: 2 }}>
              <Typography variant="caption" sx={{ fontSize: '0.75rem' }}>
                * = Jugend Vergleich Schießen
              </Typography>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={6} md={3}>
          <CaptionImage
            src="images/pages/youth/rifle.jpg"
            label="Luft-/Lichtgewehr"
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <CaptionImage
            src="images/pages/youth/blow-gun.jpg"
            label="Blasrohr"
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <CaptionImage src="images/pages/youth/bow.jpg" label="Bogen" />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4">Jugendleiter</Typography>
        </Grid>
        <Grid item xs={6} md={3}>
          <CaptionImage
            src="images/pages/youth/youth-leader-1.jpg"
            label="Daniel Bretzigheimer"
            onClick={() =>
              (window.location.href = "mailto:1.jl@sg-eisenbach1958.de")
            }
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <CaptionImage
            src="images/pages/youth/youth-leader-2.jpg"
            label="Willi Korn"
          />
        </Grid>
      </Grid>
    </>
  )
}
