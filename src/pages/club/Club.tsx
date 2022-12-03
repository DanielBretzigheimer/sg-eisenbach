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
        year="2021"
        image={{
          src: "images/pages/club/royality/royality-2021.jpg",
          caption:
            "v.l.n.r. Manuel Schott, Lucas Köttig, Angela Hepp, Daniel Bretzigheimer, Lucas Wollmann, Henri Graf, Wolfgang Heß, Josi Raguse",
        }}
        adult={{
          king: "Daniel Bretzigheimer",
          firstKnight: "Angela Hepp",
          secondKnight: "Lucas Wollmann",
        }}
        youth={{
          king: "Lucas Köttig",
          firstKnight: "Josi Raguse",
          secondKnight: "Henri Graf",
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
