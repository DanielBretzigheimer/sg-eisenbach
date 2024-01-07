import { Box, Grid, Link, Typography } from "@mui/material"
import { CaptionImage } from "../../controls/CaptionImage"

export function ShootingRange25Meter() {
  return (
    <Grid container spacing={2} mt={2}>
      <Grid item xs={12}>
        <Typography gutterBottom variant="h2">
          25 Meter Stand
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography gutterBottom>
          Unser 25 Meter Stand befindet sich hinter unserem 10 Meter Stand. Er
          ist über einen separaten Eingang zugänglich. Der Stand kann zum
          Schießen von Sportpistolen, Vorderlader Pistolen und gebraucht
          Pistolen genutzt werden.
        </Typography>
        <Typography>
          Zusätzlich zu den normalen Scheiben befinden sich auf diesem Stand
          auch Duell Scheiben. Hierbei ist die Zielscheibe nur für eine zuvor
          gewählte Zeit dem Schützen zugewandt und wird automatisch gedreht.
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <img src="images/pages/shooting-ranges/25-meter/range.jpg" />
        {/* TODO create gallery
        <img src="images/pages/shooting-ranges/25-meter/ranges.jpg" />
        <img src="images/pages/shooting-ranges/25-meter/range-with-binoculars.jpg" />
         */}
      </Grid>
      <Grid item xs={12}>
        <Box marginBottom={2} maxWidth="400px" margin="auto">
          <Link href="https://openresa.com/club/sge">
            <img src="images/pages/shooting-ranges/25-meter/range-booking.svg" />
          </Link>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Typography gutterBottom variant="h3">
          Standplan
        </Typography>
        <img src="images/pages/shooting-ranges/25-meter/occupancy-plan.png" />
      </Grid>
    </Grid>
  )
}
