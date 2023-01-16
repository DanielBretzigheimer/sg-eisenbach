import { useNavigate } from "@solidjs/router"
import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Grid,
  Link,
  Typography,
} from "@suid/material"
import { CaptionImage } from "../../controls/CaptionImage"
import { RoutePath } from "../../RoutePath"

export function Home() {
  const navigate = useNavigate()

  return (
    <>
      <Alert
        severity="info"
        action={
          <Button
            color="inherit"
            size="small"
            onClick={() =>
              navigate(`/${RoutePath.Events}/2023/general-meeting`)
            }
          >
            Mehr Infos
          </Button>
        }
      >
        <AlertTitle>Jahreshauptversammlung</AlertTitle>
        Die Jahreshauptversammlung findet am 04.02.2023 statt.
      </Alert>
      <Box mt={2}>
        <Typography gutterBottom>
          Herzlich willkommen auf der Website der Schützengesellschaft
          Eisenbach. Hier findet ihr aktuelle Informationen über den Verein,
          kommende{" "}
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
        <Grid container spacing={2} mt={2}>
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
        </Grid>
      </Box>
    </>
  )
}
