import { Navigate, Route, Routes } from "@solidjs/router"
import { Box } from "@suid/material"
import Toolbar from "@suid/material/Toolbar"
import { Club } from "./pages/club/Club"
import Contact from "./pages/contact/Contact"
import { Events } from "./pages/events/Events"
import { Home } from "./pages/home/Home"
import { DataProtection } from "./pages/imprint/DataProtection"
import { Imprint } from "./pages/imprint/Imprint"
import { ShootingRanges } from "./pages/shooting-ranges/ShootingRanges"
import { Teams } from "./pages/teams/Teams"
import { Youth } from "./pages/youth/Youth"
import { RoutePath } from "./RoutePath"

export function Main() {
  return (
    <>
      <Toolbar />
      <Box mb={4}>
        <Routes>
          <Route path="/" component={Home} />
          <Route path={`/${RoutePath.Home}`} component={Home} />
          <Route path={`/${RoutePath.Youth}`} component={Youth} />
          <Route path={`/${RoutePath.Events}`} component={Events} />
          <Route path={`/${RoutePath.Teams}`} component={Teams} />
          <Route
            path={`/${RoutePath.ShootingRanges}`}
            component={ShootingRanges}
          />
          <Route path={`/${RoutePath.Club}`} component={Club} />
          <Route path={`/${RoutePath.Contact}`} component={Contact} />
          <Route
            path={`/${RoutePath.DataProtection}`}
            component={DataProtection}
          />
          <Route path={`/${RoutePath.Imprint}`} component={Imprint} />
          <Route path="*" element={<Navigate href="/" />} />
        </Routes>
      </Box>
    </>
  )
}
