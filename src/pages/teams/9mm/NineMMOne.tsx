import { TeamDetails } from "../TeamDetails"

export function NineMMOne() {
  return (
    <TeamDetails
      title="Gebrauchspistole 1"
      members={[
        {
          name: "Fabian Vad",
          isLeader: true,
        },
        { name: "Dirk Stern" },
        { name: "Jochen Beez" },
        { name: "Andreas Dörsch" },
        { name: "Salvatore Rinallo" },
        { name: "Manuel Schott" },
      ]}
      resultLink="https://www.rwk-onlinemelder.de/online/listen/803?sel_group_id=69&sel_discipline_id=5&sel_class_id=21&showCombined=0"
    />
  )
}
