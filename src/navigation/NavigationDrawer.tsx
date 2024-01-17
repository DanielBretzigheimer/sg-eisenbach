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
import { NavigationTarget, navigationTargets } from "./navigation-target"

type NavigationDrawerProps = {
  open: boolean
  onClose: () => void
}

export default function NavigationDrawer(props: NavigationDrawerProps) {
  const navigate = useNavigate()
  const location = useLocation()

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
