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
        { name: "Emin Acig" },
        { name: "Mathias Pollak" },
        { name: "Jenny Guthermuth" },
        { name: "Sandra Schott" },
      ]}
      resultLink="https://www.rwk-onlinemelder.de/online/listen/803?sel_group_id=67&sel_discipline_id=2&sel_class_id=11&showCombined=0"
    />
  )
}
