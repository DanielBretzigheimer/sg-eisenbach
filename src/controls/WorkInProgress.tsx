import { Stack, Typography } from "@suid/material"
import CraneIcon from "@suid/icons-material/Build"

export function WorkInProgress() {
  return (
    <>
      <Stack direction="row" gap={2} alignItems="center">
        <CraneIcon fontSize="large" />
        <Typography>
          Wir führen gerade umbauarbeiten durch und diese Seite steht noch nicht
          zur Verfügung. Besuchen Sie uns gerne in ein paar Wochen nochmal.
        </Typography>
      </Stack>
    </>
  )
}
