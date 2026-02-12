import { Stack, Typography } from "@mui/material"
import { Royality } from "../../club/Royality"

export function RoyalShooting2025() {
  return (
    <Stack gap={1.5}>
      <Typography variant="h3">
        Die Schützengesellschaft Eisenbach kürt ihre neue Königsfamilie 2025
      </Typography>
      <Royality
        year="2025"
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
  )
}
