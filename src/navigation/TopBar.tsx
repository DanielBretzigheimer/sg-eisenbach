import AppBar from "@mui/material/AppBar"
import IconButton from "@mui/material/IconButton"
import Toolbar from "@mui/material/Toolbar"
import MenuIcon from "@mui/icons-material/Menu"
import Typography from "@mui/material/Typography"
import { Box, Button, Container, useMediaQuery } from "@mui/material"
import { navigationTargets } from "./navigation-target"
import { useNavigate } from "react-router-dom"

type TopBarProps = {
  onOpenNavigation: () => void
}

export function TopBar(props: TopBarProps) {
  const navigate = useNavigate()
  const isDesktop = useMediaQuery("(min-width: 1200px)")

  return (
    <AppBar color="inherit" enableColorOnDark={true} elevation={0}>
      <Container disableGutters>
        <Toolbar>
          <Box width={56} mr={1} mt={0.5}>
            <img src="/images/logo.png" className="invert-dark" />
          </Box>
          <Typography sx={{ flexGrow: 1 }}>SG Eisenbach 1958 e.V.</Typography>
          {isDesktop &&
            navigationTargets.map((target) => (
              <Button
                key={target.route}
                color="inherit"
                onClick={() => navigate(`/${target.route}`)}
              >
                {target.label}
              </Button>
            ))}
          {!isDesktop && (
            <IconButton
              onClick={props.onOpenNavigation}
              color="inherit"
              edge="end"
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  )
}
