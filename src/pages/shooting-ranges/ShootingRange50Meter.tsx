import { useNavigate } from "react-router-dom"
import { Grid, Link, Typography } from "@mui/material"
import { CaptionImage } from "../../controls/CaptionImage"
import { RoutePath } from "../../RoutePath"

export function ShootingRange50Meter() {
  const nav = useNavigate()

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography gutterBottom variant="h2">
          50 Meter Stand
        </Typography>
        <Typography gutterBottom>
          Unser 50 Meter Stand wird gleich zu mehreren Zwecken genutzt. Die
          ersten 10 Meter können als Luftgewehr und Luftpistolen Stand genutzt
          werden. Dahinter befindet sich ein Tor, dass wenn es geöffnet ist die
          restlichen 40 Meter zum Vorschein bringt. Die dazwischen befindlichen
          Stände können über ein selbst entwickeltes System angehoben und aus
          dem Sichtfeld entfernt werden. Der Stand kann nun zum schießen von
          KK-Gewehren genutzt werden.
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <CaptionImage
          src="images/pages/shooting-ranges/50-meter/closed.jpg"
          label="Geschlossen"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <CaptionImage
          src="images/pages/shooting-ranges/50-meter/open.jpg"
          label="Offen"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography gutterBottom>
          Ebenfalls bietet der Stand zusätzlich zum stehend Schießen auch die
          Möglichkeit sitzend oder liegend zu schießen. Hierfür befindet sich im
          vorderen Bereich eine Ausklappbare Liegefläche.
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography gutterBottom>
          Die letzten 20 Meter können zusätzlich als{" "}
          <Link onClick={() => nav(`/${RoutePath.ShootingRanges}/bow`)}>
            Bogenhalle
          </Link>{" "}
          genutzt werden.
        </Typography>
        <CaptionImage
          src="images/pages/shooting-ranges/50-meter/bow-hall.jpg"
          label="Bogenhalle"
        />
      </Grid>
    </Grid>
  )
}
