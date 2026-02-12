import { Stack, Typography } from "@mui/material";
import { Royality } from "../../club/Royality";

export function RoyalShooting2025() {
  return (
    <Stack gap={1.5}>
      <Typography variant="h3">
        Die Schützengesellschaft Eisenbach kürt ihre neue Königsfamilie 2025
      </Typography>
      <Royality
        year="2025"
        image={{
          src: "images/pages/events/2025/royal-shooting/royal-family.jpg",
          caption:
            "v. Links: 1 .SM W. Heß, 2. Ritter C. Otterstedt,  Königin A. Pamp-Janson, 1. Ritter A. Hepp, 2. Jugendritter S. Horlebein, Jugendkönig N. Berger, 1. Jugendritter A. Graf",
        }}
        adult={{
          king: "Anke Pamp-Janson",
          firstKnight: "Angela Hepp",
          secondKnight: "Christian Otterstedt",
        }}
        youth={{
          king: "Nilo Berger",
          firstKnight: "Amelie Graf",
          secondKnight: "Sophie Horlebein",
        }}
      />
    </Stack>
  );
}
