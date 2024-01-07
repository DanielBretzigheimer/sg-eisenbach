import { useNavigate } from "react-router-dom"
import { Grid, Link, Stack, Typography } from "@mui/material"
import { RoutePath } from "../../RoutePath"
import { Royality } from "./Royality"

export function Club() {
  const nav = useNavigate()

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h2">Verein</Typography>
        <Stack direction="row" gap={1} mb={2}>
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
        year="2023"
        image={{
          src: "images/pages/events/2023/royal-shooting/royal-family.jpg",
          caption:
            "v.l.n.r: Manuel Schott, Frank Sam, Jaroslav Rücker, Norber Börner, Wolfgang Heß vorne: Oskar Schlett, Maksim Kaiser, Henri Graf",
        }}
        adult={{
          king: "Jaroslav Rücker",
          firstKnight: "Frank Sam",
          secondKnight: "Norber Börner",
          robinHood: "Karl-Heinz Muschik",
        }}
        youth={{
          king: "Maksim Kaiser",
          firstKnight: "Oskar Schlett",
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
