import { TeamDetails } from "../TeamDetails"

export function AirRifleOne() {
  return (
    <TeamDetails
      title="Luftgewehr 1"
      members={[
        {
          name: "Christian Otterstedt",
          isLeader: true,
        },
        { name: "Justus Sievering" },
        { name: "Hannah Kloos" },
        { name: "Daniel Bretzigheimer" },
      ]}
      resultLink="https://rwk-onlinemelder.de/online/listen/800?sel_group_id=36&sel_discipline_id=1&sel_class_id=3"
    />
  )
}
