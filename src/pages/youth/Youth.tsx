import {
  Card,
  CardContent,
  Grid,
  Link,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material"
import { CaptionImage } from "../../controls/CaptionImage"

export function Youth() {
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
                <TableRow>
                  <TableCell>14.01.2024</TableCell>
                  <TableCell>Gaumeisterschaft in Sulzbach</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>27.01.2024</TableCell>
                  <TableCell>Jahresabschlusswanderung zum Dönerjosef</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>08.02.2024</TableCell>
                  <TableCell>Eishalle Aschaffenburg</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>16.03.2024</TableCell>
                  <TableCell>Besuch im Hallenbad Miltenberg</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>19.03.2024</TableCell>
                  <TableCell>Osterschießen</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>April</TableCell>
                  <TableCell>Vereinsmeisterschaft</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>11.05.2024</TableCell>
                  <TableCell>Wanderung zum Sophienhof</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Juli</TableCell>
                  <TableCell>Sommerbiathlon am Schützenhaus</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Termin folgt</TableCell>
                  <TableCell>Aktion Saubere Flur</TableCell>
                </TableRow>
              </TableBody>
            </Table>
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
            label="Jens Kürten"
          />
        </Grid>
      </Grid>
    </>
  )
}
