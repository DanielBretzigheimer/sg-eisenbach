import { useNavigate } from "@solidjs/router"
import { Grid, Link, Stack, Typography } from "@suid/material"
import { RoutePath } from "../../RoutePath"
import { Royality } from "./Royality"

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
      </Grid>
      <Royality
        year="2022"
        image={{
          src: "images/pages/events/2022/royal-shooting/royal-family.jpg",
          caption:
            "v.l.n.r: Wolfgang Heß, Gerhard Heß, Lucas Köttig, Tobias Bachmann, Manuel Schott, Daniel Bretzigheimer vorne: Maksim Kaiser, Henri Graf, Amelie Graf",
        }}
        adult={{
          king: "Lucas Köttig",
          firstKnight: "Gerhard Heß",
          secondKnight: "Justus Sievering",
          robinHood: "Tobias Bachmann",
        }}
        youth={{
          king: "Henri Graf",
          firstKnight: "Maksim Kaiser",
          secondKnight: "Amelie Graf",
        }}
      />
      <Grid item xs={12}>
        <Link onClick={() => nav(`/${RoutePath.Club}/historic-royality`)}>
          Vergangene Könige
        </Link>
      </Grid>
    </Grid>
  )
}
