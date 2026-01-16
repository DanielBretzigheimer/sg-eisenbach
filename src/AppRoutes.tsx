import { Route, Routes, Navigate } from "react-router-dom"
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
import { SportPistolThree } from "./pages/teams/sport-pistol/SportPistolThree"
import { SportPistolTwo } from "./pages/teams/sport-pistol/SportPistolTwo"
import { Teams } from "./pages/teams/Teams"
import Youth from "./pages/youth/Youth"
import { RoutePath } from "./RoutePath"
import { RoyalShooting2022 } from "./pages/events/2022/RoyalShooting"
import { NewYearsShooting2023 } from "./pages/events/2023/NewYearsShooting"
import { GeneralMeeting2023 } from "./pages/events/2023/GeneralMeeting2023"
import { SummerBiathlon2023 } from "./pages/events/2023/SummerBiathlon2023"
import { SummerHolidayProgram2023 } from "./pages/events/2023/SummerHolidayProgram2023"
import { Events } from "./pages/events/Events"
import { RoyalShooting2023 } from "./pages/events/2023/RoyalShooting2023"
import { NewYearsShooting2024 } from "./pages/events/2024/NewYearsShooting2024"
import { GeneralMeeting2024 } from "./pages/events/2024/GeneralMeeting2024"
import { RoyalShooting2024 } from "./pages/events/2024/RoyalShooting2024"
import { NineMMOne } from "./pages/teams/9mm/NineMMOne"
import { NineMMTwo } from "./pages/teams/9mm/NineMMTwo"

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path={`/${RoutePath.Home}`} element={<Home />} />
      <Route path={`/${RoutePath.Youth}`} element={<Youth />} />

      {/* Event Routes */}
      <Route path={`/${RoutePath.Events}`} element={<Events />} />
      <Route
        path={`/${RoutePath.Events}/2022/royal-shooting`}
        element={<RoyalShooting2022 />}
      />
      <Route
        path={`/${RoutePath.Events}/2023/new-years-shooting`}
        element={<NewYearsShooting2023 />}
      />
      <Route
        path={`/${RoutePath.Events}/2023/general-meeting`}
        element={<GeneralMeeting2023 />}
      />
      <Route
        path={`/${RoutePath.Events}/2023/summer-biathlon`}
        element={<SummerBiathlon2023 />}
      />
      <Route
        path={`/${RoutePath.Events}/2023/summer-holiday-program`}
        element={<SummerHolidayProgram2023 />}
      />
      <Route
        path={`/${RoutePath.Events}/2023/royal-shooting`}
        element={<RoyalShooting2023 />}
      />
      <Route
        path={`/${RoutePath.Events}/2024/new-years-shooting`}
        element={<NewYearsShooting2024 />}
      />
      <Route
        path={`/${RoutePath.Events}/2024/general-meeting`}
        element={<GeneralMeeting2024 />}
      />
      <Route
        path={`/${RoutePath.Events}/2024/royal-shooting`}
        element={<RoyalShooting2024 />}
      />
      <Route path={`/${RoutePath.Teams}`} element={<Teams />} />
      <Route
        path={`/${RoutePath.Teams}/luftgewehr-1`}
        element={<AirRifleOne />}
      />
      <Route
        path={`/${RoutePath.Teams}/luftgewehr-2`}
        element={<AirRifleTwo />}
      />
      <Route
        path={`/${RoutePath.Teams}/luftgewehr-3`}
        element={<AirRifleThree />}
      />
      <Route
        path={`/${RoutePath.Teams}/luftgewehr-4`}
        element={<AirRifleFour />}
      />
      <Route
        path={`/${RoutePath.Teams}/luftpistole-1`}
        element={<AirPistolOne />}
      />
      <Route path={`/${RoutePath.Teams}/bogen-1`} element={<BowOne />} />
      {/*<Route
            path={`/${RoutePath.Teams}/sportpistole-1`}
            element={<SportPistolOne />}
            />*/}
      <Route
        path={`/${RoutePath.Teams}/sportpistole-2`}
        element={<SportPistolTwo />}
      />
      <Route
        path={`/${RoutePath.Teams}/sportpistole-3`}
        element={<SportPistolThree />}
      />
      <Route
        path={`/${RoutePath.Teams}/gebrauchspistole-1`}
        element={<NineMMOne />}
      />
      <Route
        path={`/${RoutePath.Teams}/gebrauchspistole-2`}
        element={<NineMMTwo />}
      />
      <Route
        path={`/${RoutePath.ShootingRanges}`}
        element={<ShootingRanges />}
      />
      <Route
        path={`/${RoutePath.ShootingRanges}/10-meter`}
        element={<ShootingRange10Meter />}
      />
      <Route
        path={`/${RoutePath.ShootingRanges}/25-meter`}
        element={<ShootingRange25Meter />}
      />
      <Route
        path={`/${RoutePath.ShootingRanges}/50-meter`}
        element={<ShootingRange50Meter />}
      />
      <Route
        path={`/${RoutePath.ShootingRanges}/bow`}
        element={<ShootingRangeBow />}
      />
      <Route path={`/${RoutePath.Club}`} element={<Club />} />
      <Route path={`/${RoutePath.Club}/join`} element={<Join />} />
      <Route path={`/${RoutePath.Club}/timeline`} element={<Timeline />} />
      <Route
        path={`/${RoutePath.Club}/historic-royality`}
        element={<HistoricRoyality />}
      />
      <Route
        path={`/${RoutePath.Club}/prize-and-king-shooting`}
        element={<PrizeAndKingShooting />}
      />
      <Route path={`/${RoutePath.Contact}`} element={<Contact />} />
      <Route
        path={`/${RoutePath.Contact}/trial-shooting`}
        element={<TrailShooting />}
      />
      <Route
        path={`/${RoutePath.DataProtection}`}
        element={<DataProtection />}
      />
      <Route path={`/${RoutePath.Imprint}`} element={<Imprint />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}
