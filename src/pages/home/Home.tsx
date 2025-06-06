import { useNavigate } from "react-router-dom"
import { Box, Grid, Link, Stack, Typography } from "@mui/material"
import { CaptionImage } from "../../controls/CaptionImage"
import { RoutePath } from "../../RoutePath"
import { HomeAlert } from "./HomeAlert"

export function Home() {
  const navigate = useNavigate()

  return (
    <>
      <Box mt={2}>
        {
          <Stack gap={1}>
            <HomeAlert
              title="Sommerbiathlon"
              content="Am 29. Juni 2025 findet unser Sommerbiathlon statt. Wir freuen uns auf zahlreiche Teilnehmer und Zuschauer!"
              action={{
                text: "mehr Infos",
                target: "summer-biathlon",
              }}
            />
          </Stack>
        }
        <Grid container spacing={2} mt={1}>
          <Grid item xs={12} md={6} xl={6}>
            <Typography gutterBottom>
              <Typography variant="subtitle1">
                Herzlich Willkommen auf der Website der Schützengesellschaft
                Eisenbach 1958 e.V.!
              </Typography>
              Wir freuen uns, dass Sie den Weg zu uns gefunden haben und laden
              Sie herzlich ein, sich über unseren Verein und unser vielfältiges
              Angebot zu informieren. Bei uns finden Sie nicht nur ein
              anspruchsvolles sportliches Programm, sondern auch eine lebendige
              Gemeinschaft, die das Schießen als Hobby und Leidenschaft teilt.
              Wir wünschen Ihnen viel Spaß beim Stöbern auf unserer Website und
              hoffen, Sie bald persönlich bei uns begrüßen zu dürfen!
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
          <Grid item xs={12} md={6} xl={6}>
            <CaptionImage
              id="summer-biathlon"
              src="images/pages/events/2025/summer-biathlon/summer-biathlon-2025.jpeg"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <CaptionImage
              src="images/pages/home/cover.jpg"
              label="Schützenhaus"
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
