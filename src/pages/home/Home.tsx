import { useNavigate } from "@solidjs/router"
import { Box, Grid, Link, Typography } from "@suid/material"
import { CaptionImage } from "../../controls/CaptionImage"
import { RoutePath } from "../../RoutePath"
import { HomeAlert } from "./HomeAlert"

export function Home() {
  const navigate = useNavigate()

  return (
    <>
      <Box mt={2}>
        <Grid container spacing={2} mt={1}>
          <Grid item xs={12}>
            <Typography variant="h2">Home</Typography>
            <HomeAlert
              title="14. Sommerbiathlon"
              content="Am 02. Juli findet unser Sommerbiathlon statt. Wir freuen uns auf Ihr Kommen!"
              action={{
                text: "Plakat anzeigen",
                target: "summer-biathlon-info",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={8}>
            <Typography gutterBottom>
              Herzlich Willkommen auf der Website der Schützengesellschaft
              Eisenbach 1958 e.V.! Wir freuen uns, dass Sie den Weg zu uns
              gefunden haben und laden Sie herzlich ein, sich über unseren
              Verein und unser vielfältiges Angebot zu informieren. Bei uns
              finden Sie nicht nur ein anspruchsvolles sportliches Programm,
              sondern auch eine lebendige Gemeinschaft, die das Schießen als
              Hobby und Leidenschaft teilt. Wir wünschen Ihnen viel Spaß beim
              Stöbern auf unserer Website und hoffen, Sie bald persönlich bei
              uns begrüßen zu dürfen!
            </Typography>
            <Typography gutterBottom>
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
              auf unserer Website mit uns in Verbindung setzen und sich über die
              Details informieren. Wir stehen Ihnen gerne für Fragen zur
              Verfügung.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <Box id="summer-biathlon-info" sx={{ scrollMargin: "72px" }}>
              <CaptionImage src="images/pages/events/2023/summer-biathlon/summer-biathlon-2023.jpg" />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <CaptionImage
              src="images/pages/home/cover.jpg"
              label="Schützenhaus"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <CaptionImage
              src="images/pages/home/event.jpg"
              label="Sommerbiathlon 2022"
            />
          </Grid>
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
