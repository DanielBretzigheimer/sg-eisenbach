import { useNavigate } from "react-router-dom"
import { Box, Grid, Link, Stack, Typography } from "@mui/material"
import { RoutePath } from "../../RoutePath"

export function ShootingRange10Meter() {
  const nav = useNavigate()

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography gutterBottom variant="h2">
          10 Meter Stand
        </Typography>
        <img src="images/pages/shooting-ranges/10-meter/range-view.jpg" />
        <Typography gutterBottom>
          Unser 10 Meter Stand besteht aus zwei sich nebeneinander befindlichen
          Räumen. Im ersten Raum befinden sich die Stände eins bis vier. Über
          ein Tor hinter den 10 Meter Ständen lässt sich der Stand öffnen und
          wird somit zum{" "}
          <Link onClick={() => nav(`/${RoutePath.ShootingRanges}/50-meter`)}>
            50 Meter
          </Link>{" "}
          Stand. Im zweiten Raum befinden sich die restlichen 10 Stände. Somit
          stehen insgesamt 14 Stände für Luftgewehr und Luftpistole zur
          Verfügung.
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <Stack direction="row" spacing={2}>
          <Box flexGrow={3} width={0}>
            <img src="images/pages/shooting-ranges/10-meter/range-count.jpg" />
          </Box>
          <Box flexGrow={7} width={0}>
            <Typography gutterBottom variant="h4">
              Elektronische Schießstände
            </Typography>
            <Typography gutterBottom>
              Die Schießstände sind von DISAG und werden über einen Touch
              Bildschirm gesteuert, der bei jedem Stand verfügbar ist.
            </Typography>
            <Typography>
              Jeder Stand besitzt die Möglichkeit zwischen Luftgewehr und
              Luftpistole zu wechseln.
            </Typography>
          </Box>
        </Stack>
      </Grid>
      <Grid item xs={12} md={6}>
        <Stack direction="row" spacing={2}>
          <Box flexGrow={3} width={0}>
            <img src="images/pages/shooting-ranges/10-meter/touch-score.jpg" />
          </Box>
          <Box flexGrow={7} width={0}>
            <Typography gutterBottom variant="h4">
              DISAG Touch Score
            </Typography>
            <Typography gutterBottom>
              Für den Trainingsbetrieb kann selbst die Sportart und die Anzahl
              an Schüssen ausgewählt werden.
            </Typography>
            <Typography>
              Bei Wettkämpfen wird über einen zentralen Computer der Stand mit
              der entsprechenden Disziplin eingerichtet.
            </Typography>
          </Box>
        </Stack>
      </Grid>
    </Grid>
  )
}
