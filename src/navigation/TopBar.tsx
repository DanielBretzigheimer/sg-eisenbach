import AppBar from "@suid/material/AppBar"
import IconButton from "@suid/material/IconButton"
import Toolbar from "@suid/material/Toolbar"
import MenuIcon from "@suid/icons-material/Menu"
import Typography from "@suid/material/Typography"
import { Box, Container } from "@suid/material"

type TopBarProps = {
  onOpenNavigation: () => void
}

export function TopBar(props: TopBarProps) {
  return (
    <AppBar color="inherit" enableColorOnDark={true}>
      <Container disableGutters>
        <Toolbar>
          <Box width={56} mr={1} mt={0.5}>
            <img src="/images/logo.png" />
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
