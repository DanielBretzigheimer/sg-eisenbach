import { TeamDetails } from "../TeamDetails"

export function BowOne() {
  return (
    <TeamDetails
      title="Bogen 1"
      members={[
        {
          name: "Manuel Schott",
          isLeader: true,
        },
        { name: "Angela Hepp" },
        { name: "Christian Otterstedt" },
        { name: "Bernd Müller" },
        { name: "Justus Sievering" },
        { name: "Saskia Stegmann" },
        { name: "Jochen Stegmann" },
        { name: "Silke Fernsebner" },
      ]}
      resultLink="https://www.gau-maintal.de/G-RWK-Dateien/G-RWK-Disziplin2.php?par1=BG&jahr=2023"
    />
  )
}
