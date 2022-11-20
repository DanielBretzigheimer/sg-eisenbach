import { useNavigate } from "@solidjs/router"
import { Grid, Link, Typography } from "@suid/material"
import { RoutePath } from "../../RoutePath"
import { TeamCategory } from "./TeamCategory"

export function Teams() {
  const navigate = useNavigate()

  return (
    <Grid container mt={2}>
      <Grid item xs={12}>
        <Typography variant="h2" textAlign="center">
          Mannschaften
        </Typography>
      </Grid>
      <TeamCategory
        imageSrc="images/pages/teams/air-rifle.png"
        title="Luftgewehr"
      >
        <Link onClick={() => navigate(`/${RoutePath.Teams}/luftgewehr-1`)}>
          Luftgewehr 1
        </Link>
        <Link onClick={() => navigate(`/${RoutePath.Teams}/luftgewehr-2`)}>
          Luftgewehr 2
        </Link>
        <Link onClick={() => navigate(`/${RoutePath.Teams}/luftgewehr-3`)}>
          Luftgewehr 3
        </Link>
        <Link onClick={() => navigate(`/${RoutePath.Teams}/luftgewehr-4`)}>
          Luftgewehr 4
        </Link>
      </TeamCategory>
      <TeamCategory
        imageSrc="images/pages/teams/air-pistol.png"
        title="Luftpistole"
      >
        <Link onClick={() => navigate(`/${RoutePath.Teams}/luftpistole-1`)}>
          Luftpistole 1
        </Link>
      </TeamCategory>
      <TeamCategory
        imageSrc="images/pages/teams/sport-pistol.png"
        title="Sportpistole"
      >
        <Link onClick={() => navigate(`/${RoutePath.Teams}/sportpistole-1`)}>
          Sportpistole 1
        </Link>
        <Link onClick={() => navigate(`/${RoutePath.Teams}/sportpistole-2`)}>
          Sportpistole 2
        </Link>
        <Link onClick={() => navigate(`/${RoutePath.Teams}/sportpistole-3`)}>
          Sportpistole 3
        </Link>
      </TeamCategory>
      <TeamCategory imageSrc="images/pages/teams/bow.png" title="Bogen">
        <Link onClick={() => navigate(`/${RoutePath.Teams}/bogen-1`)}>
          Bogen 1
        </Link>
      </TeamCategory>
    </Grid>
  )
}
