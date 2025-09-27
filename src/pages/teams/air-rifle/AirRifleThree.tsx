import { TeamDetails } from "../TeamDetails"

export function AirRifleThree() {
  return (
    <TeamDetails
      title="Luftgewehr 3"
      members={[
        {
          name: "Karl-Heinz Raguse",
          isLeader: true,
        },
        { name: "Urban Weiß" },
        { name: "Helmut Berninger" },
        { name: "Wolfgang Heß" },
      ]}
      resultLink="https://www.rwk-onlinemelder.de/online/listen/803?sel_group_id=66&sel_discipline_id=6&sel_class_id=34&showCombined=0"
    />
  )
}
