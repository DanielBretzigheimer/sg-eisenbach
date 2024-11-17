import { useNavigate } from "react-router-dom"
import {
  Grid,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material"
import { RoutePath } from "../../RoutePath"
import { TeamCategory } from "./TeamCategory"

export function Teams() {
  const navigate = useNavigate()

  return (
    <Grid container mt={2} spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h2" textAlign="center">
          Mannschaften
        </Typography>
      </Grid>
      <TeamCategory
        imageSrc="images/pages/teams/air-rifle.png"
        title="Luftgewehr"
      >
        <List>
          <ListItemButton
            onClick={() => navigate(`/${RoutePath.Teams}/luftgewehr-1`)}
          >
            <ListItemText>Luftgewehr 1</ListItemText>
          </ListItemButton>
          <ListItemButton
            onClick={() => navigate(`/${RoutePath.Teams}/luftgewehr-2`)}
          >
            <ListItemText>Luftgewehr 2</ListItemText>
          </ListItemButton>
          <ListItemButton
            onClick={() => navigate(`/${RoutePath.Teams}/luftgewehr-3`)}
          >
            <ListItemText>Luftgewehr 3</ListItemText>
          </ListItemButton>
          <ListItemButton
            onClick={() => navigate(`/${RoutePath.Teams}/luftgewehr-4`)}
          >
            <ListItemText>Luftgewehr 4</ListItemText>
          </ListItemButton>
        </List>
      </TeamCategory>
      <TeamCategory
        imageSrc="images/pages/teams/air-pistol.png"
        title="Luftpistole"
      >
        <List>
          <ListItemButton
            onClick={() => navigate(`/${RoutePath.Teams}/luftpistole-1`)}
          >
            <ListItemText>Luftpistole 1</ListItemText>
          </ListItemButton>
        </List>
      </TeamCategory>
      <TeamCategory
        imageSrc="images/pages/teams/sport-pistol.png"
        title="Sportpistole"
      >
        <List>
          {/*<ListItemButton
            onClick={() => navigate(`/${RoutePath.Teams}/sportpistole-1`)}
          >
            <ListItemText>Sportpistole 1</ListItemText>
  </ListItemButton>*/}
          <ListItemButton
            onClick={() => navigate(`/${RoutePath.Teams}/sportpistole-2`)}
          >
            <ListItemText>Sportpistole 2</ListItemText>
          </ListItemButton>
          <ListItemButton
            onClick={() => navigate(`/${RoutePath.Teams}/sportpistole-3`)}
          >
            <ListItemText>Sportpistole 3</ListItemText>
          </ListItemButton>
        </List>
      </TeamCategory>
      {/*<TeamCategory imageSrc="images/pages/teams/bow.png" title="Bogen">
        <List>
          <ListItemButton
            onClick={() => navigate(`/${RoutePath.Teams}/bogen-1`)}
          >
            <ListItemText>Bogen 1</ListItemText>
          </ListItemButton>
        </List>
      </TeamCategory>*/}
    </Grid>
  )
}
