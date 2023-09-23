import { TeamDetails } from "../TeamDetails"

export function AirPistolOne() {
  return (
    <TeamDetails
      title="Luftpistole 1"
      members={[
        {
          name: "Michael Berger",
          isLeader: true,
        },
        { name: "Mathias Pollak" },
        { name: "Jenny Guthermuth" },
        { name: "Emin Acig" },
        { name: "Werner Berger" },
      ]}
      resultLink="https://www.rwk-onlinemelder.de/online/listen/803?sel_group_id=52&sel_discipline_id=2&sel_class_id=11&showCombined=0"
    />
  )
}
