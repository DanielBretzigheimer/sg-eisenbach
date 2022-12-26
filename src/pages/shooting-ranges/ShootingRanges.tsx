import { Grid, Typography } from "@suid/material"
import { WorkInProgress } from "../../controls/WorkInProgress"
import { ShootingRangePreview } from "./ShootingRangePreview"

export function ShootingRanges() {
  return (
    <Grid container spacing={2} mt={2}>
      <Grid item xs={12}>
        <Typography variant="h2">Schießstände</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <ShootingRangePreview
          url="10-meter"
          name="10 Meter Stand"
          imageName="10m"
          details={["Luftgewehr", "Luftpistole", "Lichtgewehr"]}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <ShootingRangePreview
          url="25-meter"
          name="25 Meter Stand"
          imageName="25m"
          details={["Sportpistole", "Gebrauchspistole", "Vorderlader"]}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <ShootingRangePreview
          url="50-meter"
          name="50 Meter Stand"
          imageName="50m"
          details={["KK-Gewehr"]}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <ShootingRangePreview
          url="bow"
          name="Bogenplatz/-halle"
          imageName="bow"
          details={["Langbogen", "Recurvebogen", "Blankbogen"]}
        />
      </Grid>
    </Grid>
  )
}
