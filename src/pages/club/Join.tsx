import { Grid, Link, Typography } from "@mui/material"

export function Join() {
  return (
    <Grid container mt={2}>
      <Grid item xs={12} md={6}>
        <Typography variant="h5">Mitgliedsbeiträge (jährlich)</Typography>
        <ul>
          <li>
            <Typography>Schüler/Jugendliche (0 - 17 Jahre) 15,- €</Typography>
          </li>
          <li>
            <Typography>Junioren (18 - 20 Jahre) 20,- €</Typography>
          </li>
          <li>
            <Typography>Erwachsene (ab 21 Jahren) 39,- €</Typography>
          </li>
        </ul>
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography gutterBottom variant="h5">
          Aufnahmeantrag
        </Typography>
        <Typography>
          Der Antrag kann im Schützenhaus abgeholt werden oder alternativ{" "}
          <Link href="https://drive.google.com/file/d/1ZpDfFSnyYtRlmFLJ9k5pNOjTsMS9FZom/view">
            hier
          </Link>{" "}
          heruntergeladen werden. Nach dem Ausfüllen kann der Antrag im
          Schützenhaus abgegeben werden.
        </Typography>
      </Grid>
    </Grid>
  )
}
