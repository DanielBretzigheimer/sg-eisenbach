import { TeamDetails } from "../TeamDetails"

export function SportPistolOne() {
  return (
    <TeamDetails
      title="Sportpistole 1"
      members={[
        {
          name: "Emin Acig",
          isLeader: true,
        },
        { name: "Paul Waigand" },
        { name: "Dieter Wabschitzka" },
        { name: "Bernd Müller" },
      ]}
      resultLink="https://www.rwk-onlinemelder.de/online/listen/803?sel_group_id=48&sel_discipline_id=8&sel_class_id=18"
    />
  )
}
