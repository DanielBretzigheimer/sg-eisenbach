import { RoutePath } from "../RoutePath"

export type NavigationTarget = {
  label: string
  route: RoutePath
}

export const navigationTargets: NavigationTarget[] = [
  {
    label: "Home",
    route: RoutePath.Home,
  },
  {
    label: "Jugend",
    route: RoutePath.Youth,
  },
  {
    label: "Veranstaltungen",
    route: RoutePath.Events,
  },
  {
    label: "Mannschaften",
    route: RoutePath.Teams,
  },
  {
    label: "Schießstände",
    route: RoutePath.ShootingRanges,
  },
  {
    label: "Verein",
    route: RoutePath.Club,
  },
  {
    label: "Kontakt",
    route: RoutePath.Contact,
  },
]
