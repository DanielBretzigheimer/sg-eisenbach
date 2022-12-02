import { useNavigate } from "@solidjs/router"
import { Grid, Link, Typography } from "@suid/material"
import { CaptionImage } from "../../controls/CaptionImage"
import { RoutePath } from "../../RoutePath"

export function Home() {
  const navigate = useNavigate()

  return (
    <>
      <p>
        Herzlich willkommen auf der Website der Schützengesellschaft Eisenbach.
        Hier findet ihr aktuelle Informationen über den Verein, kommende
        Veranstaltungen und könnt{" "}
        <Link onClick={() => navigate(`/${RoutePath.Contact}`)}>Kontakt</Link>{" "}
        zu uns aufnehmen.
      </p>
      <Grid container spacing={1}>
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
            label="Sommerbiathlon 2022"
          />
        </Grid>
      </Grid>
    </>
  )
}
