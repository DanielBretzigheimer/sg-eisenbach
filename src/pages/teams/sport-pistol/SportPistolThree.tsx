import { TeamDetails } from "../TeamDetails"

export function SportPistolThree() {
  return (
    <TeamDetails
      title="Sportpistole 3"
      members={[
        {
          name: "Ludwig Becker",
          isLeader: true,
        },
        { name: "Werner Berger" },
        { name: "Frank Sam" },
        { name: "Tatjana Chaney" },
      ]}
      resultLink="https://www.rwk-onlinemelder.de/online/listen/803?sel_group_id=63&sel_discipline_id=8&sel_class_id=18&showCombined=0"
    />
  )
}
