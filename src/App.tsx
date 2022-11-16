import { createTheme, ThemeProvider } from "@suid/material"
import { blue, pink } from "@suid/material/colors"
import CssBaseline from "@suid/material/CssBaseline"
import useMediaQuery from "@suid/material/useMediaQuery"
import { Home } from "./pages/home/Home"
import { DataProtection } from "./pages/imprint/DataProtection"
import { Imprint } from "./pages/imprint/Imprint"

export default function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")
  const theme = createTheme({
    palette: prefersDarkMode
      ? {
          mode: "dark",
          primary: { main: blue[200] },
          secondary: { main: pink[200] },
        }
      : {
          mode: "light",
          background: { default: "#f5f5f5" },
          primary: { main: blue[500] },
          secondary: { main: pink[500] },
        },
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home />
      <Imprint />
      <DataProtection />
    </ThemeProvider>
  )
}
