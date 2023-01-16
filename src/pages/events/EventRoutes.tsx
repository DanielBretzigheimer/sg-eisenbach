import { Route } from "@solidjs/router"
import { RoutePath } from "../../RoutePath"
import { RoyalShooting2022 } from "./2022/RoyalShooting"
import { GeneralMeeting2023 } from "./2023/GeneralMeeting"
import { NewYearsShooting2023 } from "./2023/NewYearsShooting"
import { Events } from "./Events"

export function EventRoutes() {
  return (
    <>
      <Route path={`/${RoutePath.Events}`} component={Events} />
      <Route
        path={`/${RoutePath.Events}/2022/royal-shooting`}
        component={RoyalShooting2022}
      />
      <Route
        path={`/${RoutePath.Events}/2023/new-years-shooting`}
        component={NewYearsShooting2023}
      />
      <Route
        path={`/${RoutePath.Events}/2023/general-meeting`}
        component={GeneralMeeting2023}
      />
    </>
  )
}
