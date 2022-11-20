import { useNavigate } from "@solidjs/router"
import { Grid, Link, Typography } from "@suid/material"
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
        <Grid item xs={12} md={6} xl={4}>
          <img src="images/pages/home/outside.jpg" />
          <Typography>Außensitzbereich neben dem Schützenhaus</Typography>
        </Grid>
        <Grid item xs={12} md={6} xl={4}>
          <img src="images/pages/home/views.jpg" />
          <Typography>Aussicht vom Schützenhaus</Typography>
        </Grid>
        <Grid item xs={12} md={6} xl={4}>
          <img src="images/pages/home/cover.jpg" />
          <Typography>Sommerbiathlon 2022</Typography>
        </Grid>
      </Grid>
    </>
  )
}
