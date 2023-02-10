import { Navigate, Route, Routes } from "@solidjs/router"
import { Box } from "@suid/material"
import Toolbar from "@suid/material/Toolbar"
import { Club } from "./pages/club/Club"
import { HistoricRoyality } from "./pages/club/HistoricRoyality"
import { Join } from "./pages/club/Join"
import { PrizeAndKingShooting } from "./pages/club/PrizeAndKingShooting"
import { Timeline } from "./pages/club/timeline/Timeline"
import Contact from "./pages/contact/Contact"
import { TrailShooting } from "./pages/contact/TrialShooting"
import { Home } from "./pages/home/Home"
import { DataProtection } from "./pages/imprint/DataProtection"
import { Imprint } from "./pages/imprint/Imprint"
import { ShootingRange10Meter } from "./pages/shooting-ranges/ShootingRange10Meter"
import { ShootingRange25Meter } from "./pages/shooting-ranges/ShootingRange25Meter"
import { ShootingRange50Meter } from "./pages/shooting-ranges/ShootingRange50Meter"
import { ShootingRangeBow } from "./pages/shooting-ranges/ShootingRangeBow"
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
import { EventRoutes } from "./pages/events/EventRoutes"

export function Main() {
  return (
    <>
      <Toolbar />
      <Box mb={4}>
        <Routes>
          <Route path="/" component={Home} />
          <Route path={`/${RoutePath.Home}`} component={Home} />
          <Route path={`/${RoutePath.Youth}`} component={Youth} />
          <EventRoutes />
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
          <Route
            path={`/${RoutePath.ShootingRanges}/10-meter`}
            component={ShootingRange10Meter}
          />
          <Route
            path={`/${RoutePath.ShootingRanges}/25-meter`}
            component={ShootingRange25Meter}
          />
          <Route
            path={`/${RoutePath.ShootingRanges}/50-meter`}
            component={ShootingRange50Meter}
          />
          <Route
            path={`/${RoutePath.ShootingRanges}/bow`}
            component={ShootingRangeBow}
          />
          <Route path={`/${RoutePath.Club}`} component={Club} />
          <Route path={`/${RoutePath.Club}/join`} component={Join} />
          <Route path={`/${RoutePath.Club}/timeline`} component={Timeline} />
          <Route
            path={`/${RoutePath.Club}/historic-royality`}
            component={HistoricRoyality}
          />
          <Route
            path={`/${RoutePath.Club}/prize-and-king-shooting`}
            component={PrizeAndKingShooting}
          />
          <Route path={`/${RoutePath.Contact}`} component={Contact} />
          <Route
            path={`/${RoutePath.Contact}/trial-shooting`}
            component={TrailShooting}
          />
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
