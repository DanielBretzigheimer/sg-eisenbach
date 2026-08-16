import { Box, Grid, Typography, Divider } from "@mui/material"
import { EventCard } from "../../controls/EventCard"
import { RoutePath } from "../../RoutePath"

type RecentEvent = {
  title: string
  date: string
  description: string
  image: string
  path: string
}

export function RecentEvents() {
  const recentEvents: RecentEvent[] = [
    {
      title: "Altstadtfest Obernburg - Schießstand",
      date: "2. August 2026",
      description:
        "Die Schützenvereine Eisenbach und Obernburg präsentierten sich gemeinsam auf dem Altstadtfest mit einem Schießstand. Mit neuen elektronischen Trefferauswertungen und vielen Aktivitäten für Kinder.",
      image:
        "images/pages/events/2026/city-festival/city-festival-cover-image.jpeg",
      path: `/${RoutePath.Events}/2026/city-festival`,
    },
    {
      title: "Sommerferienspiele 2026",
      date: "13. August 2026",
      description:
        "Neun Kinder und Jugendliche erlebten einen spannenden Nachmittag rund um Bogen und Blasrohr am Schützenhaus. Mit Einblicken in die verschiedenen Schießdisziplinen und abwechslungsreichen Wettkämpfen.",
      image:
        "images/pages/events/2026/summer-holiday-program/summer-holiday-program-cover-image.jpeg",
      path: `/${RoutePath.Events}/2026/summer-holiday-program`,
    },
  ]

  return (
    <Box sx={{ my: 4 }}>
      <Divider sx={{ my: 3 }} />
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          mb: 3,
          display: "flex",
          alignItems: "center",
        }}
      >
        🎯 Aktuelle Veranstaltungen
      </Typography>

      <Grid container spacing={3}>
        {recentEvents.map((event, index) => (
          <Grid item xs={12} md={6} key={index}>
            <EventCard event={event} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
