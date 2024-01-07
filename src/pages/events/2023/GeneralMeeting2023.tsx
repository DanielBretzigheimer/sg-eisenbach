import { Box, List, ListItem, Typography } from "@mui/material"
import { CaptionImage } from "../../../controls/CaptionImage"

export function GeneralMeeting2023() {
  return (
    <Box mt={2}>
      <Typography variant="h3" gutterBottom>
        Jahreshauptversammlung der Schützengesellschaft Eisenbach 2023
      </Typography>
      <CaptionImage src="images/pages/events/2023/general-meeting/general-meeting-2023.jpg" />
      <Typography gutterBottom>
        Die diesjährige Jahreshauptversammlung der SG Eisenbach verlief wie
        geplant. Dietmar Fieger, Bürgermeister der Stadt Obernburg überbrachte
        ein paar Grußworte. Die Vorstandschaft gab ihre Rechenschaftsberichte
        ab. Die Sportleiter der Disziplinen Gewehr und Pistole ehrten die
        aktiven Schützen mit ihren erworbenen Auszeichnungen (Eicheln) für das
        vergangene Wettkampfjahr. Auch bei den Meisterschaften wurden vordere
        Plätze erreicht. Diese Ehrungen wurden mit einer Urkunde und Nadel
        überreicht.
      </Typography>
      <Typography gutterBottom>
        Für die 25-jährige Mitgliedschaft im Verein und im Bayerischen
        Sportschützenbund wurde Jürgen Giegerich vom 2. Präsident des
        Schützengau Maintal Wolfgang Heß und 2. Schützenmeister Manuel Schott
        geehrt. Auch auf 10-jährige Mitgliedschaft kann Daniel Bretzigheimer
        schon zurückblicken.
      </Typography>
    </Box>
  )
}
