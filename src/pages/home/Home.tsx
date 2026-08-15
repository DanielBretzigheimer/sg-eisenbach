import { useNavigate } from "react-router-dom"
import {
  Box,
  Grid,
  Link,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Divider,
} from "@mui/material"
import { CaptionImage } from "../../controls/CaptionImage"
import { RoutePath } from "../../RoutePath"

type RecentEvent = {
  title: string
  date: string
  description: string
  image: string
  path: string
}

export function Home() {
  const navigate = useNavigate()

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
    <>
      <Box mt={2}>
        <Grid container spacing={3} mt={1} mb={4}>
          <Grid item xs={12} md={6}>
            <Typography gutterBottom>
              <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
                Herzlich Willkommen bei der Schützengesellschaft Eisenbach 1958
                e.V.!
              </Typography>
              Wir freuen uns, dass Sie den Weg zu uns gefunden haben und laden
              Sie herzlich ein, sich über unseren Verein und unser vielfältiges
              Angebot zu informieren. Bei uns finden Sie nicht nur ein
              anspruchsvolles sportliches Programm, sondern auch eine lebendige
              Gemeinschaft, die das Schießen als Hobby und Leidenschaft teilt.
            </Typography>
            <Typography gutterBottom sx={{ mt: 2 }}>
              Auf unserer Website finden Sie auch Informationen zu kommenden{" "}
              <Link onClick={() => navigate(`/${RoutePath.Events}`)}>
                Veranstaltungen
              </Link>
              . Außerdem bieten wir auch die Möglichkeit, bei uns ein{" "}
              <Link
                onClick={() => navigate(`/${RoutePath.Contact}/trial-shooting`)}
              >
                Schnuppertraining
              </Link>{" "}
              zu absolvieren und die Faszination des Schießsports selbst zu
              erleben. Interessierte können sich über die{" "}
              <Link onClick={() => navigate(`/${RoutePath.Contact}`)}>
                Kontaktmöglichkeiten
              </Link>{" "}
              auf unserer Website mit uns in Verbindung setzen. Wir stehen Ihnen
              gerne für Fragen zur Verfügung!
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <CaptionImage
              src="images/pages/home/cover.jpg"
              label="Schützenhaus"
            />
          </Grid>
        </Grid>

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
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: 4,
                    },
                  }}
                >
                  <CardActionArea
                    onClick={() => navigate(event.path)}
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="240"
                      image={event.image}
                      alt={event.title}
                      sx={{
                        objectFit: "cover",
                      }}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography
                        gutterBottom
                        variant="caption"
                        sx={{
                          color: "primary.main",
                          fontWeight: "bold",
                          display: "block",
                        }}
                      >
                        📅 {event.date}
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: "bold",
                          mb: 1,
                          mt: 1,
                        }}
                      >
                        {event.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {event.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Divider sx={{ my: 3 }} />
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 3 }}>
          Eindrücke vom Schützenhaus
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <CaptionImage
              src="images/pages/home/outside.jpg"
              label="Außensitzbereich neben dem Schützenhaus"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <CaptionImage
              src="images/pages/home/views.jpg"
              label="Aussicht vom Schützenhaus"
            />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}
