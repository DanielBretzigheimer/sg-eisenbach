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
        { name: "Marcel Sator" },
        { name: "Manuel Schott" },
        { name: "Michael Berger" },
      ]}
      resultLink="https://www.rwk-onlinemelder.de/online/listen/803?sel_group_id=48&sel_discipline_id=8&sel_class_id=19"
    />
  )
}
