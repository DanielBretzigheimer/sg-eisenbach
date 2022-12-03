import { Grid } from "@suid/material"
import { Royality } from "./Royality"

export function HistoricRoyality() {
  return (
    <Grid container mt={2}>
      <Royality
        year="2019"
        image={{
          src: "images/pages/club/royality/royality-2020.jpg",
          caption: `hinten v.l.n.r. Manuel Schott, Bernd Müller, Norbert Börner, Hannah Kloos, Karl-Heinz Raguse, Wolfgang Hess, Willi Korn, vorne v.l.n.r. Antonia Hofmann, Paul Parsch, Amelie Mielke`,
        }}
        adult={{
          king: "Hannah Kloos",
          firstKnight: "Karl-Heinz Raguse",
          secondKnight: "Bernd Müller",
        }}
        youth={{
          king: "Paul Parsch",
          firstKnight: "Amelie Mielke",
          secondKnight: "Antonia Hofmann",
        }}
      />
    </Grid>
  )
}
