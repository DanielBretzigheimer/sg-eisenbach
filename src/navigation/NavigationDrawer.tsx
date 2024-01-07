import { useLocation, useNavigate } from "react-router-dom"
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItemButton,
  Stack,
  Typography,
} from "@mui/material"
import { RoutePath } from "../RoutePath"

type NavigationDrawerProps = {
  open: boolean
  onClose: () => void
}

type NavigationTarget = {
  label: string
  route: RoutePath
}

export default function NavigationDrawer(props: NavigationDrawerProps) {
  const navigate = useNavigate()
  const location = useLocation()

  const navigationTargets: NavigationTarget[] = [
    {
      label: "Home",
      route: RoutePath.Home,
    },
    {
      label: "Jugend",
      route: RoutePath.Youth,
    },
    {
      label: "Veranstaltungen",
      route: RoutePath.Events,
    },
    {
      label: "Mannschaften",
      route: RoutePath.Teams,
    },
    {
      label: "Schießstände",
      route: RoutePath.ShootingRanges,
    },
    {
      label: "Verein",
      route: RoutePath.Club,
    },
    {
      label: "Kontakt",
      route: RoutePath.Contact,
    },
  ]

  function goTo(target: NavigationTarget) {
    navigate(`/${target.route}`)
    props.onClose()
  }

  return (
    <>
      <Drawer variant="temporary" open={props.open} onClose={props.onClose}>
        <Stack direction="row" alignItems="center">
          <Box width={70} padding={1}>
            <img className="invert-dark" src="images/logo.png" />
          </Box>
          <Typography variant="h5">SG Eisenbach</Typography>
        </Stack>
        <List sx={{ minWidth: "300px" }}>
          {navigationTargets.map((target) => (
            <Box key={target.route}>
              <ListItemButton
                onClick={() => goTo(target)}
                selected={location.pathname === `/${target.route}`}
              >
                {target.label}
              </ListItemButton>
              <Divider />
            </Box>
          ))}
        </List>
      </Drawer>
    </>
  )
}
