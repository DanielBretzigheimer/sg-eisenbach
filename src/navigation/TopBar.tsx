import AppBar from "@suid/material/AppBar"
import IconButton from "@suid/material/IconButton"
import Toolbar from "@suid/material/Toolbar"
import MenuIcon from "@suid/icons-material/Menu"
import Typography from "@suid/material/Typography"

type TopBarProps = {
  onOpenNavigation: () => void
}

export function TopBar(props: TopBarProps) {
  return (
    <AppBar color="inherit" enableColorOnDark={true}>
      <Toolbar>
        <IconButton
          onClick={props.onOpenNavigation}
          color="inherit"
          edge="start"
        >
          <MenuIcon />
        </IconButton>
        <Typography>SG Eisenbach 1958 e.V.</Typography>
      </Toolbar>
    </AppBar>
  )
}
