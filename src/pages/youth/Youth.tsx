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
              <Typography variant="h5">Jugend Ausflüge und Termine</Typography>
            </CardContent>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>08.09.2023</TableCell>
                  <TableCell>Jugendvergleichsschießen 1</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>16.09.2023</TableCell>
                  <TableCell>Vereinsmeisterschaft</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>12.09.2023</TableCell>
                  <TableCell>Jugendvergleichsschießen 2</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>15.09.2023</TableCell>
                  <TableCell>Jugendvergleichsschießen 3</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>November</TableCell>
                  <TableCell>Preisschießen</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>25.11.2023</TableCell>
                  <TableCell>Königsschießen</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>09.12.2023</TableCell>
                  <TableCell>Königsfeier</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Dezember</TableCell>
                  <TableCell>Jahresabschlusswanderung</TableCell>
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
            label="Daniel Bretzigheimer\n1.jl@sg-eisenbach1958.de"
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
