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
} from "@suid/material"
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
              <Typography variant="h5">Jugend Ausflüge</Typography>
            </CardContent>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>16.02.2023</TableCell>
                  <TableCell>Schlittschuhlaufen</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>25.03.2023</TableCell>
                  <TableCell>Besuch im Hallenbad</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>28.03.2023</TableCell>
                  <TableCell>Osterschießen</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>20.05.2023</TableCell>
                  <TableCell>Wanderung zum Sophienhof</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>02.06.2023</TableCell>
                  <TableCell>Sommerbiathlon</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>05.08. - 06.08.2023</TableCell>
                  <TableCell>Stadtfest Obernburg</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>16.09.2023</TableCell>
                  <TableCell>Vereinsmeisterschaft</TableCell>
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
