import { Box, List, ListItem, Typography } from "@mui/material"

export function GeneralMeeting2024() {
  return (
    <Box mt={2}>
      <Typography variant="h3" gutterBottom>
        Jahreshauptversammlung der Schützengesellschaft Eisenbach 2024
      </Typography>
      <Typography gutterBottom>
        Liebe Schützenschwestern, liebe Schützenbrüder, die Vorstandschaft der
        Schützengesellschaft Eisenbach lädt euch alle recht herzlich zu unserer
        diesjährigen{" "}
        <b>Jahreshauptversammlung am Samstag, 03.02.2024 um 15 Uhr</b>
        ins Schützenhaus auf der Hardt ein.
      </Typography>
      <Typography variant="h4" gutterBottom>
        Tagesordnung
      </Typography>
      <List>
        <ListItem>1. Begrüßung</ListItem>
        <ListItem>2. Feststellung der Tagesordnung</ListItem>
        <ListItem>3. Totengedenken</ListItem>
        <ListItem>4. Protokoll der letzten Jahreshauptversammlung</ListItem>
        <ListItem>5. Bericht des 1. Schützenmeisters</ListItem>
        <ListItem>6. Bericht der Schatzmeisterin</ListItem>
        <ListItem>7. Bericht der Kassenprüfer</ListItem>
        <ListItem>8. Entlastung der Schatzmeisterin</ListItem>
        <ListItem>9. Bericht des Sportleiters Gewehr</ListItem>
        <ListItem>10. Bericht des Sportleiters Pistole</ListItem>
        <ListItem>11. Bericht des Bogenreferenten</ListItem>
        <ListItem>12. Bericht des Jugendleiters</ListItem>
        <ListItem>13. Entlastung der Vorstandschaft</ListItem>
        <ListItem>14. Neuwahlen</ListItem>
        <ListItem>15. Ehrungen</ListItem>
        <ListItem>16. Wünsche und Anträge</ListItem>
        <ListItem>17. Verschiedenes</ListItem>
      </List>
      <Typography gutterBottom>
        Wünsche und Anträge bitte fristgerecht bis fünf Tage vor der
        Hauptversammlung einreichen!
      </Typography>
    </Box>
  )
}
