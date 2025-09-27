import { TeamDetails } from "../TeamDetails"

export function AirRifleFour() {
  return (
    <TeamDetails
      title="Luftgewehr 4"
      members={[
        {
          name: "Willi Korn",
          isLeader: true,
        },
        { name: "Amelie Graf" },
        { name: "Paul Parsch" },
        { name: "Sophia Gräber" },
        { name: "Sophie-Marie Kaiser" },
      ]}
      resultLink="https://www.rwk-onlinemelder.de/online/listen/803?sel_group_id=66&sel_discipline_id=6&sel_class_id=53&showCombined=0"
    />
  )
}
