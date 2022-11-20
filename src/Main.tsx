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
import { AirPistolOne } from "./pages/teams/air-pistol/AirPistolOne"
import { AirRifleFour } from "./pages/teams/air-rifle/AirRifleFour"
import { AirRifleOne } from "./pages/teams/air-rifle/AirRifleOne"
import { AirRifleThree } from "./pages/teams/air-rifle/AirRifleThree"
import { AirRifleTwo } from "./pages/teams/air-rifle/AirRifleTwo"
import { BowOne } from "./pages/teams/bow/BowOne"
import { SportPistolOne } from "./pages/teams/sport-pistol/SportPistolOne"
import { SportPistolThree } from "./pages/teams/sport-pistol/SportPistolThree"
import { SportPistolTwo } from "./pages/teams/sport-pistol/SportPistolTwo"
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
            path={`/${RoutePath.Teams}/luftgewehr-1`}
            component={AirRifleOne}
          />
          <Route
            path={`/${RoutePath.Teams}/luftgewehr-2`}
            component={AirRifleTwo}
          />
          <Route
            path={`/${RoutePath.Teams}/luftgewehr-3`}
            component={AirRifleThree}
          />
          <Route
            path={`/${RoutePath.Teams}/luftgewehr-4`}
            component={AirRifleFour}
          />
          <Route
            path={`/${RoutePath.Teams}/luftpistole-1`}
            component={AirPistolOne}
          />
          <Route path={`/${RoutePath.Teams}/bogen-1`} component={BowOne} />
          <Route
            path={`/${RoutePath.Teams}/sportpistole-1`}
            component={SportPistolOne}
          />
          <Route
            path={`/${RoutePath.Teams}/sportpistole-2`}
            component={SportPistolTwo}
          />
          <Route
            path={`/${RoutePath.Teams}/sportpistole-3`}
            component={SportPistolThree}
          />
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
