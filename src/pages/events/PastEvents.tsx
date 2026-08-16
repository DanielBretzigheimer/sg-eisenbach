import { Box, Grid, Typography } from "@mui/material"
import CalendarTodayIcon from "@mui/icons-material/CalendarToday"
import { EventCard } from "../../controls/EventCard"
import { RoutePath } from "../../RoutePath"

type PastEvent = {
  title: string
  date: string
  description: string
  image: string
  path: string
}

export function PastEvents() {
  const pastEvents: PastEvent[] = [
    {
      title: "Sommerferienspiele 2026",
      date: "2026",
      description:
        "Die Sommerferienspiele 2026 mit Aktivitäten für Kinder und Jugendliche.",
      image:
        "images/pages/events/2026/summer-holiday-program/summer-holiday-program-cover-image.jpeg",
      path: `/${RoutePath.Events}/2026/summer-holiday-program`,
    },
    {
      title: "Altstadtfest Obernburg - Schießstand",
      date: "2026",
      description:
        "Die Schützenvereine Eisenbach und Obernburg präsentierten sich gemeinsam auf dem Altstadtfest mit einem Schießstand.",
      image:
        "images/pages/events/2026/city-festival/city-festival-cover-image.jpeg",
      path: `/${RoutePath.Events}/2026/city-festival`,
    },
    {
      title: "Königsfeier 2025",
      date: "2025",
      description:
        "Die Königsfeier des Jahres 2025 der Schützengesellschaft Eisenbach.",
      image: "images/pages/events/2025/royal-shooting/royal-family.jpg",
      path: `/${RoutePath.Events}/2025/royal-shooting`,
    },
    {
      title: "Königsfeier 2024",
      date: "2024",
      description:
        "Die Königsfeier des Jahres 2024 der Schützengesellschaft Eisenbach.",
      image: "images/pages/events/2024/royal-shooting/royal-family.jpg",
      path: `/${RoutePath.Events}/2024/royal-shooting`,
    },
    {
      title: "Neujahrsschießen 2024",
      date: "2024",
      description:
        "Das Neujahrsschießen 2024 der Schützengesellschaft Eisenbach.",
      image:
        "images/pages/events/2024/new-years-shooting/new-years-shooting-2024.jpg",
      path: `/${RoutePath.Events}/2024/new-years-shooting`,
    },
    {
      title: "Königsschießen 2023",
      date: "2023",
      description:
        "Das Königsschießen 2023 der Schützengesellschaft Eisenbach.",
      image: "images/pages/events/2023/royal-shooting/royal-family.jpg",
      path: `/${RoutePath.Events}/2023/royal-shooting`,
    },
    {
      title: "Neujahrsschießen 2023",
      date: "2023",
      description:
        "Das Neujahrsschießen 2023 der Schützengesellschaft Eisenbach.",
      image:
        "images/pages/events/2023/new-years-shooting/new-years-shooting.jpg",
      path: `/${RoutePath.Events}/2023/new-years-shooting`,
    },
    {
      title: "Jahreshauptversammlung 2023",
      date: "2023",
      description:
        "Die Jahreshauptversammlung 2023 der Schützengesellschaft Eisenbach.",
      image:
        "images/pages/events/2023/general-meeting/general-meeting-2023.jpg",
      path: `/${RoutePath.Events}/2023/general-meeting`,
    },
    {
      title: "Sommerferienspiele 2023",
      date: "2023",
      description:
        "Die Sommerferienspiele 2023 mit Aktivitäten für Kinder und Jugendliche.",
      image: "images/pages/events/2023/summer-holiday-program/IMG_6715.jpg",
      path: `/${RoutePath.Events}/2023/summer-holiday-program`,
    },
    {
      title: "Sommerbiathlon 2023",
      date: "2023",
      description:
        "Der Sommerbiathlon 2023 der Schützengesellschaft Eisenbach.",
      image:
        "images/pages/events/2023/summer-biathlon/summer-biathlon-2023.jpg",
      path: `/${RoutePath.Events}/2023/summer-biathlon`,
    },
    {
      title: "Königsschießen 2022",
      date: "2022",
      description:
        "Das Königsschießen 2022 der Schützengesellschaft Eisenbach.",
      image: "images/pages/events/2022/royal-shooting/royal-family.jpg",
      path: `/${RoutePath.Events}/2022/royal-shooting`,
    },
  ]

  return (
    <Box sx={{ my: 4 }}>
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          mb: 3,
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        <CalendarTodayIcon /> Vergangene Veranstaltungen
      </Typography>

      <Grid container spacing={3}>
        {pastEvents.map((event, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <EventCard event={event} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
