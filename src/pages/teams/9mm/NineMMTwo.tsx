import { TeamDetails } from "../TeamDetails"

export function NineMMTwo() {
  return (
    <TeamDetails
      title="Gebrauchstpistole 2"
      members={[
        {
          name: "Paul Waigand",
          isLeader: true,
        },
        { name: "Emin Acig" },
        { name: "Eugen Gerlein" },
        { name: "Matthias Pollak" },
      ]}
      resultLink="https://www.rwk-onlinemelder.de/online/listen/803?sel_group_id=69&sel_discipline_id=5&sel_class_id=32&showCombined=0"
    />
  )
}
