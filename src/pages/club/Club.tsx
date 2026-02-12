import { useNavigate } from "react-router-dom";
import { Grid, Link, Stack, Typography } from "@mui/material";
import { RoutePath } from "../../RoutePath";
import { Royality } from "./Royality";

export function Club() {
  const nav = useNavigate();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h2">Verein</Typography>
        <Stack direction="row" gap={1} mb={2}>
          <Link href="https://drive.google.com/file/d/0B38NBwtZxVHwOXZYX3JJS19qQVBIVlNwbzNmNDVwS2pEaUNF/view?resourcekey=0-4FCDdGqa-KDMMfCs1pWDRQ">
            Satzung
          </Link>
          <Link onClick={() => nav(`/${RoutePath.Club}/join`)}>Aufnahme</Link>
          <Link onClick={() => nav(`/${RoutePath.Club}/prize-and-king-shooting`)}>
            Preis- und Königsschießen
          </Link>
          <Link onClick={() => nav(`/${RoutePath.Club}/timeline`)}>Chronik</Link>
        </Stack>
      </Grid>
      <Royality
        image={{
          src: "images/pages/events/2025/royal-shooting/royal-family.jpg",
          caption:
            "v. Links: 1 .SM W. Heß, 2. Ritter C. Otterstedt,  Königin A. Pamp-Janson, 1. Ritter A. Hepp, 2. Jugendritter S. Horlebein, Jugendkönig N. Berger, 1. Jugendritter A. Graf",
        }}
        year="2025"
        adult={{
          king: "Anke Pamp Janson",
          firstKnight: "Angela Hepp",
          secondKnight: "Christian Otterstedt",
        }}
        youth={{
          king: "Nilo Berger",
          firstKnight: "Amelie Graf",
          secondKnight: "Sophie Horlebein",
        }}
      />
      <Grid item xs={12}>
        <Link onClick={() => nav(`/${RoutePath.Club}/historic-royality`)}>Vergangene Könige</Link>
      </Grid>
    </Grid>
  );
}
