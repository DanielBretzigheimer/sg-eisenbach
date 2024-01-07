import { Box, Divider, Grid, Typography } from "@mui/material"
import { CaptionImage } from "../../../controls/CaptionImage"

export function RoyalShooting2022() {
  const supporter = [
    "Sporthaus Wolfstetter, Obernburg",
    "Stoppschild, Obernburg",
    "Schießsport Heil, Breuberg",
    "Werner Berger, Weinhandel, Höchst",
    "Jochen Beez, Continentale, Eisenbach",
    "Stardöner, Obernburg",
    "Möbelhaus Kempf, Aschaffenburg",
    "Markus Hartmann",
    "Wolfgang Heß",
  ]

  return (
    <Box mt={2}>
      <Typography variant="h5" gutterBottom>
        Die Schützengesellschaft Eisenbach kürt ihren neuen Schützenkönig
      </Typography>
      <CaptionImage
        src="images/pages/events/2022/royal-shooting/royal-family.jpg"
        label="v. Links: 1. SM Wolfgang Heß, 1. Ritter Gerhard Heß, König Lucas Köttig, Robin Hood Tobias Bachmann, 2 SM. Manuel Schott, Jugendleiter Daniel Bretzigheimer vorne: 1. Jugendritter Maksim Kaiser, Jugendkönig Henri Graf, 2. Jugendritterin Amelie Graf"
      ></CaptionImage>
      <Typography sx={{ mt: 2 }} gutterBottom>
        Beim diesjährigen Königsschießen war die Spannung wieder groß. Wer
        bringt den Holzadler zu Fall, war die große Frage, denn einige Anwärter
        waren da. Am Ende fiel der Adler und Lukas Köttig wurde der neue
        Schützenkönig. Er wird begleitet von seinen Rittern Gerhard Heß und
        Justus Sievering. Unsere Jugend war auch wieder mit Begeisterung dabei
        und hier erkämpfte sich Henri Graf die Königswürde. Seine Ritter sind
        Maksim Kaiser und Amelie Graf. Unser diesjähriger „Robin Hood“ wurde
        Tobias Bachmann, der mit Pfeil und Bogen die richtige Stelle traf.
      </Typography>
      <Typography gutterBottom>
        Auch das allseits beliebte Preisschießen fand im Vorfeld wieder statt.
        Es gab wieder viele Preise zu gewinnen. Man konnte sich in 5 Disziplinen
        messen. Den besten Teiler galt es zu erreichen. Bei der Disziplin
        Luftpistole siegte Emin Acig mit einem 301,3 Teiler vor Christian
        Otterstedt und Sandra Schott. Bei den Sportpistolenschützen lag
        Christian Otterstedt mit einem 360 Teiler auf dem ersten Platz gefolgt
        von Jochen Beez und Frank Sam. In der stark umkämpften Disziplin
        Luftgewehr wurde Angela Hepp mit einem 16 Teiler Erste vor Hannah Kloos
        und Daniel Bretzigheimer. Im Bogen siegte Christian Otterstedt gefolgt
        von Manuel Schott und Angela Hepp. Auch unsere nichtaktiven Mitglieder
        traten gegeneinander an, den besten Teiler zu schießen. Dieser Schuss
        gelang Evi Heß mit einem 24,5 Teiler und es folgte Gerhard Heß und
        Isolde Müller.
      </Typography>
      <Typography gutterBottom>
        Auch die jungen Schützinnen und Schützen gaben mit dem Luftgewehr ihr
        Bestes. Den besten Schuss/Teiler landete Sophie-Marie Kaiser und wurde
        somit Erste. Dicht gefolgt von Maksim Kaiser und Henri Graf.
      </Typography>
      <Typography gutterBottom>
        Zuletzt gab es auch noch einen Wanderpokal zu erringen. Bei der Jugend
        gewann ihn Amelie Graf und bei den Erwachsenen konnte sich Hannah Kloos
        durchsetzen.
      </Typography>
      <Typography gutterBottom>
        Unserer neuen Königsfamilie wünschen wir ein erfolgreiches Jahr 2023.
      </Typography>
      <Divider sx={{ mt: 2, mb: 2 }} />
      <Typography gutterBottom>
        Für die Unterstützung bedanken wir uns bei:
      </Typography>
      <Grid container>
        {supporter.map((s) => (
          <Grid item xs={12} sm={6} md={4}>
            <Typography>{s}</Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
