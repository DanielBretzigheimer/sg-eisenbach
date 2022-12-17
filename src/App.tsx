import { createTheme, Theme, ThemeProvider } from "@suid/material"
import { blue, pink } from "@suid/material/colors"
import CssBaseline from "@suid/material/CssBaseline"
import useMediaQuery from "@suid/material/useMediaQuery"
import { Main } from "./Main"
import { Footer } from "./navigation/Footer"
import { TopBar } from "./navigation/TopBar"
import "./App.css"
import Container from "@suid/material/Container"
import { createEffect, createSignal } from "solid-js"
import NavigationDrawer from "./navigation/NavigationDrawer"

export default function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")
  const [navOpen, setNavOpen] = createSignal(false)
  const [theme, setTheme] = createSignal<Theme<string>>(
    createAppTheme(prefersDarkMode())
  )

  createEffect(() => {
    setTheme(createAppTheme(prefersDarkMode()))
  })

  function createAppTheme(isDark: boolean) {
    return createTheme({
      palette: {
        mode: isDark ? "dark" : "light",
        primary: { main: blue[isDark ? 200 : 500] },
        secondary: { main: pink[isDark ? 200 : 500] },
        background: {
          default: "#f5f5f5",
        },
      },
    })
  }

  return (
    <ThemeProvider theme={theme()}>
      <CssBaseline />
      <TopBar onOpenNavigation={() => setNavOpen(true)} />
      <NavigationDrawer open={navOpen()} onClose={() => setNavOpen(false)} />
      <Container>
        <Main />
        <Footer />
      </Container>
    </ThemeProvider>
  )
}
