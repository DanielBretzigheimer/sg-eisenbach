import { useNavigate } from "@solidjs/router"
import { Grid, Link, Stack, Typography } from "@suid/material"
import { RoutePath } from "../../RoutePath"

export function Club() {
  const nav = useNavigate()

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h2">Verein</Typography>
        <Stack direction="row" gap={1}>
          <Link href="https://drive.google.com/file/d/0B38NBwtZxVHwOXZYX3JJS19qQVBIVlNwbzNmNDVwS2pEaUNF/view?resourcekey=0-4FCDdGqa-KDMMfCs1pWDRQ">
            Satzung
          </Link>
          <Link onClick={() => nav(`/${RoutePath.Club}/join`)}>Aufnahme</Link>
          <Link
            onClick={() => nav(`/${RoutePath.Club}/prize-and-king-shooting`)}
          >
            Preis- und Königsschießen
          </Link>
          <Link onClick={() => nav(`/${RoutePath.Club}/timeline`)}>
            Chronik
          </Link>
        </Stack>
        <Typography variant="h4">Königshaus</Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="h5">Erwachsene</Typography>
        <Typography variant="overline">König</Typography>
        <Typography>Daniel Bretzigheimer</Typography>
        <Typography variant="overline">1. Ritter</Typography>
        <Typography>Angela Hepp</Typography>
        <Typography variant="overline">2. Ritter</Typography>
        <Typography>Lucas Wollmann</Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="h5">Jugend</Typography>
        <Typography variant="overline">König</Typography>
        <Typography>Lucas Köttig</Typography>
        <Typography variant="overline">1. Ritter</Typography>
        <Typography>Josi Raguse</Typography>
        <Typography variant="overline">2. Ritter</Typography>
        <Typography>Henri Graf</Typography>
      </Grid>
      <Grid item xs={12}>
        <Link onClick={() => nav(`/${RoutePath.Club}/historic-kings`)}>
          Vergangene Könige
        </Link>
      </Grid>
    </Grid>
  )
}
