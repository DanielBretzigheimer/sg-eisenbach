import { useNavigate } from "react-router-dom"
import { Box, Grid, Link, Typography, Divider } from "@mui/material"
import { CaptionImage } from "../../controls/CaptionImage"
import { ImageCarousel } from "../../controls/ImageCarousel"
import { RoutePath } from "../../RoutePath"
import { RecentEvents } from "./RecentEvents"

export function Home() {
  const navigate = useNavigate()

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
          <RecentEvents />
        </Box>

        <Divider sx={{ my: 3 }} />
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 3 }}>
          Eindrücke vom Schützenhaus
        </Typography>
        <ImageCarousel
          images={[
            {
              src: "images/pages/home/cover.jpg",
              caption: "Schützenhaus",
            },
            {
              src: "images/pages/home/outside.jpg",
              caption: "Außensitzbereich neben dem Schützenhaus",
            },
            {
              src: "images/pages/home/views.jpg",
              caption: "Aussicht vom Schützenhaus",
            },
          ]}
        />
      </Box>
    </>
  )
}
