import { TeamDetails } from "../TeamDetails"

export function AirRifleFour() {
  return (
    <TeamDetails
      title="Luftgewehr 4"
      members={[
        {
          name: "Karl-Heinz Raguse",
          isLeader: true,
        },
        { name: "Helmut Berninger" },
        { name: "Wolfgang Heß" },
      ]}
      resultLink="https://www.rwk-onlinemelder.de/online/listen/803?sel_group_id=53&sel_discipline_id=6&sel_class_id=34&showCombined=0"
    />
  )
}
