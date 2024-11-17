import { Grid } from "@mui/material"
import { Royality } from "./Royality"

export function HistoricRoyality() {
  return (
    <Grid container mt={2} spacing={2}>
      <Royality
        year="2023"
        image={{
          src: "images/pages/events/2023/royal-shooting/royal-family.jpg",
          caption:
            "v.l.n.r: Manuel Schott, Frank Sam, Jaroslav Rücker, Norber Börner, Wolfgang Heß vorne: Oskar Schlett, Maksim Kaiser, Henri Graf",
        }}
        adult={{
          king: "Jaroslav Rücker",
          firstKnight: "Frank Sam",
          secondKnight: "Norber Börner",
          robinHood: "Karl-Heinz Muschik",
        }}
        youth={{
          king: "Maksim Kaiser",
          firstKnight: "Oskar Schlett",
          secondKnight: "Henri Graf",
        }}
      />
      <Royality
        year="2022"
        image={{
          src: "images/pages/events/2022/royal-shooting/royal-family.jpg",
          caption:
            "v.l.n.r: Wolfgang Heß, Gerhard Heß, Lucas Köttig, Tobias Bachmann, Manuel Schott, Daniel Bretzigheimer vorne: Maksim Kaiser, Henri Graf, Amelie Graf",
        }}
        adult={{
          king: "Lucas Köttig",
          firstKnight: "Gerhard Heß",
          secondKnight: "Justus Sievering",
          robinHood: "Tobias Bachmann",
        }}
        youth={{
          king: "Henri Graf",
          firstKnight: "Maksim Kaiser",
          secondKnight: "Amelie Graf",
        }}
      />
      <Royality
        year="2021"
        image={{
          src: "images/pages/club/royality/royality-2021.jpg",
          caption:
            "v.l.n.r. Manuel Schott, Lucas Köttig, Angela Hepp, Daniel Bretzigheimer, Lucas Wollmann, Henri Graf, Wolfgang Heß, Josi Raguse",
        }}
        adult={{
          king: "Daniel Bretzigheimer",
          firstKnight: "Angela Hepp",
          secondKnight: "Lucas Wollmann",
        }}
        youth={{
          king: "Lucas Köttig",
          firstKnight: "Josi Raguse",
          secondKnight: "Henri Graf",
        }}
      />
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
