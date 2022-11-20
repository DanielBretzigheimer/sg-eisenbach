import { TeamDetails } from "../TeamDetails"

export function AirRifleThree() {
  return (
    <TeamDetails
      title="Luftgewehr 3"
      members={[
        {
          name: "Angela Hepp",
          isLeader: true,
        },
        { name: "Manuel Schott" },
        { name: "Julian Vogl" },
      ]}
      resultLink="https://www.rwk-onlinemelder.de/online/listen/803?sel_group_id=46&sel_discipline_id=6&sel_class_id=2"
    />
  )
}
