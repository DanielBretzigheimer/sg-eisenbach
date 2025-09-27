import { TeamDetails } from "../TeamDetails"

export function SportPistolTwo() {
  return (
    <TeamDetails
      title="Sportpistole 2"
      members={[
        {
          name: "Jochen Beez",
          isLeader: true,
        },
        { name: "Andreas Dörsch" },
        { name: "Fabian Vad" },
        { name: "Marcel Sator" },
        { name: "Manuel Schott" },
      ]}
      resultLink="https://www.rwk-onlinemelder.de/online/listen/803?sel_group_id=68&sel_discipline_id=8&sel_class_id=18&showCombined=0"
    />
  )
}
