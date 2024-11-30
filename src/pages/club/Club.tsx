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
        image={{
          src: "images/pages/events/2024/royal-shooting/royal-family.jpg",
          caption:
            "v. Links: 1 .SM W. Heß, 2. Ritter H. Berninger,  1. Jugendritter P. Parsch, König M. Schott, 1. Ritter S. Schott, Jugendleiter D. Bretzigheimer, 2. Jugendritter A. Graf, Robin Hood F. Stöberl, Jugendkönig O. Schlett",
        }}
        year="2024"
        adult={{
          king: "Manuel Schott",
          firstKnight: "Sandra Schott",
          secondKnight: "Helmut Berninger",
          robinHood: "Franz Stöberl",
        }}
        youth={{
          king: "Oskar Schlett",
          firstKnight: "Paul Parsch",
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
