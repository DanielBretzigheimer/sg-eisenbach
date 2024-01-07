import { createTheme, Theme, ThemeProvider } from "@mui/material"
import { blue, pink } from "@mui/material/colors"
import CssBaseline from "@mui/material/CssBaseline"
import useMediaQuery from "@mui/material/useMediaQuery"
import { Main } from "./Main"
import { Footer } from "./navigation/Footer"
import { TopBar } from "./navigation/TopBar"
import "./App.css"
import Container from "@mui/material/Container"
import NavigationDrawer from "./navigation/NavigationDrawer"
import { useEffect, useState } from "react"

export default function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")
  const [navOpen, setNavOpen] = useState(false)
  const [theme, setTheme] = useState(createAppTheme(prefersDarkMode))

  useEffect(() => {
    setTheme(createAppTheme(prefersDarkMode))
  }, [prefersDarkMode])

  function createAppTheme(isDark: boolean) {
    return createTheme({
      palette: {
        mode: isDark ? "dark" : "light",
        primary: { main: blue[isDark ? 200 : 500] },
        secondary: { main: pink[isDark ? 200 : 500] },
        background: {
          default: isDark ? "#121212" : "#f5f5f5",
        },
      },
    })
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TopBar onOpenNavigation={() => setNavOpen(true)} />
      <NavigationDrawer open={navOpen} onClose={() => setNavOpen(false)} />
      <Container>
        <Main />
        <Footer />
      </Container>
    </ThemeProvider>
  )
}
