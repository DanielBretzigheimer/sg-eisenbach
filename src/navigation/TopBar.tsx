import AppBar from "@mui/material/AppBar"
import IconButton from "@mui/material/IconButton"
import Toolbar from "@mui/material/Toolbar"
import MenuIcon from "@mui/icons-material/Menu"
import Typography from "@mui/material/Typography"
import { Box, Container } from "@mui/material"

type TopBarProps = {
  onOpenNavigation: () => void
}

export function TopBar(props: TopBarProps) {
  return (
    <AppBar color="inherit" enableColorOnDark={true} elevation={0}>
      <Container disableGutters>
        <Toolbar>
          <Box width={56} mr={1} mt={0.5}>
            <img src="/images/logo.png" className="invert-dark" />
          </Box>
          <Typography sx={{ flexGrow: 1 }}>SG Eisenbach 1958 e.V.</Typography>
          <IconButton
            onClick={props.onOpenNavigation}
            color="inherit"
            edge="end"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
