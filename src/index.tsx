import { render } from "solid-js/web"
import App from "./App"
import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"
import { Router } from "@solidjs/router"

render(
  () => (
    <Router>
      <App />
    </Router>
  ),
  document.getElementById("root")
)
