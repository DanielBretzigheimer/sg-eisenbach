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
        { name: "Martin Sam" },
        { name: "Frank Sam" },
        { name: "Yasmine Sam" },
      ]}
      resultLink="https://www.rwk-onlinemelder.de/online/listen/803?sel_group_id=48&sel_discipline_id=8&sel_class_id=19"
    />
  )
}
