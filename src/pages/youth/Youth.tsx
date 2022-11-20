import {
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
        <Grid item xs={12} md={6} xl={4}>
          <Typography variant="h4">Jugend Training</Typography>
          <p>
            Unser Jugendtraining findet jeden Dienstag (außer in den bayrischen
            Schulferien) von 18:00 bis 20:00 Uhr statt. Interessierte dürfen in
            dieser Zeit gerne vorbeischauen und sich das Training ansehen oder
            an einem Probetraining teilnehmen.
          </p>
          <p>
            Unser Training findet hauptsächlich mit dem Luft-/Lichtgewehr statt.
            Wenn es im Sommer sehr heiß ist, gehen wir aber auch auf den
            Bogenplatz oder trainieren mit dem Blasrohr.
          </p>
        </Grid>
        <Grid item xs={12} md={6} xl={4}>
          <Typography variant="h4">Jugend Ausflüge</Typography>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>20.12.2022</TableCell>
                <TableCell>Jahresabschlusswanderung</TableCell>
              </TableRow>
            </TableBody>
          </Table>
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
          <img src="images/pages/youth/youth-leader-1.jpg" />
          <Typography variant="caption">
            <Link href="mailto:1.jl@sg-eisenbach1958.de">
              Daniel Bretzigheimer
            </Link>
          </Typography>
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
