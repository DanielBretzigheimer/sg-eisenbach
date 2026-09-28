import { Grid, Link, Typography, Alert, Box } from "@mui/material"
import { RoutePath } from "../../RoutePath"
import { useNavigate } from "react-router-dom"

export function Join() {
  const nav = useNavigate()

  return (
    <Grid container mt={2} spacing={3}>
      <Grid item xs={12}>
        <Alert severity="info">
          <Typography variant="body2" sx={{ mb: 1 }}>
            <strong>Wichtiger Hinweis:</strong> Der Mitgliedsbeitrag erhöht sich{" "}
            <strong>ab 2027</strong>. Die Abrechnung erfolgt im November 2026.
            Von den neuen Beiträgen werden 5 € direkt für die Jugendarbeit
            verwendet.
          </Typography>
          <Link
            onClick={() => nav(`/${RoutePath.Club}/membership-fee-increase`)}
            sx={{ mt: 1 }}
          >
            Weitere Informationen zur Beitragserhöhung
          </Link>
        </Alert>
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="h5">Mitgliedsbeiträge (jährlich)</Typography>
        <Box sx={{ mt: 2 }}>
          <Typography variant="subtitle2" sx={{ fontWeight: "bold", mb: 1 }}>
            Ab 2027:
          </Typography>
          <ul>
            <li>
              <Typography>Schüler/Jugendliche (0 - 17 Jahre) 15,- €</Typography>
            </li>
            <li>
              <Typography>Junioren (18 - 20 Jahre) 20,- €</Typography>
            </li>
            <li>
              <Typography>Erwachsene (ab 21 Jahren) 50,- €</Typography>
            </li>
          </ul>
        </Box>
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
