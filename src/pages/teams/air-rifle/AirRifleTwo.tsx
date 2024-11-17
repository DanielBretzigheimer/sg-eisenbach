import { TeamDetails } from "../TeamDetails"

export function AirRifleTwo() {
  return (
    <TeamDetails
      title="Luftgewehr 2"
      members={[
        {
          name: "Manuel Schott",
          isLeader: true,
        },
        { name: "Michi Rücker" },
        { name: "Marcel Sator" },
        { name: "Aaron Korn" },
        { name: "Julian Vogl" },
      ]}
      resultLink="https://www.rwk-onlinemelder.de/online/listen/803?sel_group_id=61&sel_discipline_id=6&sel_class_id=2&showCombined=0"
    />
  )
}
