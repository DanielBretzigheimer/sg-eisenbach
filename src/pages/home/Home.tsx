import { useNavigate } from "@solidjs/router"
import { Box, Button, Grid, Link, Stack, Typography } from "@suid/material"
import { CaptionImage } from "../../controls/CaptionImage"
import { RoutePath } from "../../RoutePath"
import {
  CalendarTodayOutlined,
  MailOutline,
  GroupOutlined,
} from "@suid/icons-material"

export function Home() {
  const navigate = useNavigate()

  return (
    <>
      <Box mt={2}>
        <Typography variant="h2">Home</Typography>
        <Typography gutterBottom>
          Herzlich willkommen auf unserer Website. Hier findet ihr aktuelle
          Informationen über den Verein, kommende{" "}
          <Link onClick={() => navigate(`/${RoutePath.Events}`)}>
            Veranstaltungen
          </Link>{" "}
          und könnt{" "}
          <Link onClick={() => navigate(`/${RoutePath.Contact}`)}>Kontakt</Link>{" "}
          zu uns aufnehmen. Falls Sie interesse an einem Schnuppertraining
          haben, finden Sie{" "}
          <Link
            onClick={() => navigate(`/${RoutePath.Contact}/trial-shooting`)}
          >
            hier
          </Link>{" "}
          weitere Informationen.
        </Typography>
        <Grid container spacing={2} mt={1}>
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
