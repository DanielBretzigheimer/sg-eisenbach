import { TeamDetails } from "../TeamDetails"

export function AirRifleTwo() {
  return (
    <TeamDetails
      title="Luftgewehr 2"
      members={[
        {
          name: "Willi Korn",
          isLeader: true,
        },
        { name: "Michi Rücker" },
        { name: "Marcel Sator" },
        { name: "Aaron Korn" },
      ]}
      resultLink="https://www.rwk-onlinemelder.de/online/listen/803?sel_group_id=53&sel_discipline_id=1&sel_class_id=1&showCombined=0"
    />
  )
}
