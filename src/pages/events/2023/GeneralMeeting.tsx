import { Box, List, ListItem, Typography } from "@suid/material"

export function GeneralMeeting2023() {
  return (
    <Box mt={2}>
      <Typography variant="h3" gutterBottom>
        Jahreshauptversammlung 2023
      </Typography>
      <Typography gutterBottom>
        Die Schützengesellschaft Eisenbach lädt alle Mitglieder zur diesjährigen
        Jahreshauptversammlung am Samstag, 04.02.2023 um 15:00 Uhr ins
        Schützenhaus auf der Hardt ein.
      </Typography>
      <Typography gutterBottom>Tagesordnung:</Typography>
      <List dense>
        <ListItem>1. Begrüßung</ListItem>
        <ListItem>2. Feststellung der Tagesordnung</ListItem>
        <ListItem>3. Protokoll der letzten Jahreshauptversammlung</ListItem>
        <ListItem>4. Bericht des Ersten Schützenmeisters</ListItem>
        <ListItem>5. Bericht der Schatzmeisterin</ListItem>
        <ListItem>6. Bericht der Kassenprüfer</ListItem>
        <ListItem>7. Entlastung der Schatzmeisterin</ListItem>
        <ListItem>8. Bericht des Sportleiters Gewehr</ListItem>
        <ListItem>9. Bericht des Sportleiters Pistole</ListItem>
        <ListItem>10. Bericht des Bogenreferenten</ListItem>
        <ListItem>11. Bericht des Jugendleiters</ListItem>
        <ListItem>12. Entlastung der Vorstandschaft</ListItem>
        <ListItem>13. Ehrungen</ListItem>
        <ListItem>14. Wünsche und Anträge</ListItem>
        <ListItem>15. Verschiedenes</ListItem>
      </List>
      <Typography gutterBottom>
        Ergänzende Anträge bitte fristgerecht bis fünf Tage vor der
        Hauptversammlung einreichen!
      </Typography>
      <Typography sx={{ mt: 4 }}>Mit Schützengrüßen</Typography>
      <Typography gutterBottom>
        Die Vorstandschaft der Schützengesellschaft Eisenbach
      </Typography>
    </Box>
  )
}
