import { Stack, Typography } from "@mui/material"
import CraneIcon from "@mui/icons-material/Build"

export function WorkInProgress() {
  return (
    <p>
      <Stack direction="row" gap={2} alignItems="center">
        <CraneIcon fontSize="large" />
        <Typography>
          Wir führen gerade umbauarbeiten durch und diese Seite steht noch nicht
          zur Verfügung. Besuchen Sie uns gerne in ein paar Wochen nochmal.
        </Typography>
      </Stack>
    </p>
  )
}
