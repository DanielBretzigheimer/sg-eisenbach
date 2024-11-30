import { Grid, Stack, Typography } from "@mui/material"
import { CaptionImage } from "../../../controls/CaptionImage"
import { Royality } from "../../club/Royality"

export function RoyalShooting2024() {
  return (
    <Stack gap={1.5}>
      <Typography variant="h3">
        Die Schützengesellschaft Eisenbach kürt ihren neuen Schützenkönig
      </Typography>
      <Typography>
        Auch beim diesjährigen Königsschießen war die Spannung wieder enorm
        groß, da jeder der teilnehmenden Schützen die Chance hatte, den
        Holzadler zu Fall zu bringen. Am Ende fiel der Adler nach unendlich
        vielen Schüssen und Manuel Schott wurde der neue Schützenkönig. Er wird
        begleitet von seinen Rittern Sandra Schott und Helmut Berninger. Unsere
        Jugend war stark vertreten und auch wieder mit großer Begeisterung dabei
        und hier erkämpfte sich Oskar Schlett vom Ritter zur Königswürde. Seine
        Ritter sind Paul Parsch und Amelie Graf. Unser diesjähriger „Robin Hood“
        wurde eines unserer ältesten und treuesten Mitglied Franz Stöberl, der
        mit Pfeil und Bogen die richtige Stelle traf.
      </Typography>
      <Typography>
        Auch das allseits beliebte Preisschießen fand im Vorfeld wieder statt.
        Es gab wieder viele Preise zu gewinnen. Den besten Teiler galt es zu
        erreichen. Bei der Disziplin Luftpistole siegte Taana Chaney mit einem
        227,4 Teiler vor Werner Berger und Jochen Beez. Bei den
        Sportpistolenschützen lag Jochen Beez mit einem 643,7 Teiler auf dem
        ersten Platz gefolgt von Tatjana Chaney und Fabian Vad. In der sehr
        stark umkämpften Disziplin Luftgewehr wurde Hannah Kloos mit einem fast
        kaum besser machbaren 1,0 Teiler Erste vor Wolfgang Heß mit einem sehr
        guten 2,2 Teiler und dicht dahinter Daniel Bretzigheimer mit einem 3,1
        Teiler. Auch die jungen Schützinnen und Schützen gaben mit dem
        Luftgewehr ihr Bestes. Es gab ein Geschenketisch, bei dem sich jeder
        etwas aussuchen konnte. Den ersten Preis gewann Sophia Gräber mit einem
        27,2 Teiler, gefolgt von Amelie Graf (36,2) und Paul Parsch (37,2). Auch
        die weiteren Jungschützinnen und Jungschützen erhielten Preise.
      </Typography>
      <Typography>
        Zuletzt gab es auch noch einen Wanderpokal zu erringen. Bei der Jugend
        gewann ihn Damian Grass und bei den Erwachsenen konnte sich Willi Korn
        durchsetzen.
      </Typography>
      <Royality
        image={{
          src: "images/pages/events/2024/royal-shooting/royal-family.jpg",
          caption:
            "v. Links: 1 .SM W. Heß, 2. Ritter H. Berninger, 1. Jugendritter P. Parsch, König M. Schott, 1. Ritter S. Schott, Jugendleiter D. Bretzigheimer, 2. Jugendritter A. Graf, Robin Hood F. Stöberl, Jugendkönig O. Schlett",
        }}
        year="2024"
        adult={{
          king: "Manuel Schott",
          firstKnight: "Sandra Schott",
          secondKnight: "Helmut Berninger",
          robinHood: "Franz Stöberl",
        }}
        youth={{
          king: "Oskar Schlett",
          firstKnight: "Paul Parsch",
          secondKnight: "Amelie Graf",
        }}
      />
      <Typography>
        Unserer neuen Königsfamilie wünschen wir ein erfolgreiches Jahr 2025.
      </Typography>
      <Typography>Für die Unterstützung bedanken wir uns bei:</Typography>
      <Grid container>
        <Grid item xs={12} md={6} xl={4}>
          <Typography>Casa die Puglia, Eisenbach</Typography>
        </Grid>
        <Grid item xs={12} md={6} xl={4}>
          <Typography>Bistro Stoppschild, Obernburg</Typography>
        </Grid>
        <Grid item xs={12} md={6} xl={4}>
          <Typography>Stardöner, Obernburg</Typography>
        </Grid>
        <Grid item xs={12} md={6} xl={4}>
          <Typography>Intersport Wolfstetter, Obernburg</Typography>
        </Grid>
        <Grid item xs={12} md={6} xl={4}>
          <Typography>Schießsport Heil, Breuberg</Typography>
        </Grid>
        <Grid item xs={12} md={6} xl={4}>
          <Typography>Continentale J. Beez, Eisenbach</Typography>
        </Grid>
        <Grid item xs={12} md={6} xl={4}>
          <Typography>Möbel Kempf, Aschaffenburg</Typography>
        </Grid>
        <Grid item xs={12} md={6} xl={4}>
          <Typography>CHRISTinas MiaPOSTella, Eisenbach</Typography>
        </Grid>
      </Grid>
    </Stack>
  )
}
