import { Stack, Typography, Box } from "@mui/material"

export function RoyalShooting2026() {
  return (
    <Stack gap={2}>
      <Typography variant="h4">Königsschießen 2026</Typography>
      <Box>
        <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 1 }}>
          Einladung zum Königsschießen 2026
        </Typography>
        <Typography>
          Die Schützengesellschaft Eisenbach lädt alle Mitglieder zu ihrem
          diesjährigen <strong>Preis- und Königsschießen</strong> ein.
        </Typography>
      </Box>
      <Box>
        <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 1 }}>
          Preisschießen
        </Typography>
        <Typography paragraph>
          Das <strong>Preisschießen</strong> läuft von{" "}
          <strong>Dienstag, 27.10. bis Dienstag, 24.11.2026</strong>
        </Typography>
        <Typography paragraph>
          <strong>dienstags, freitags und sonntags</strong> zu den normalen
          Trainingszeiten.
        </Typography>
        <Typography paragraph>
          Es wird bei LG und LP wie in den Vorjahren auf elektronische Scheiben
          geschossen. Passive Mitglieder können mit Luftgewehr oder Luftpistole
          aufgelegt in einer gesonderten Wertung schießen, wie bisher nach den
          Auflageregeln der Sportordnung.
        </Typography>
        <Typography paragraph>
          In den Disziplinen LG, LP, SP und natürlich LG-Schüler und -Jugend
          kommen wie immer zahlreiche Preise zur Verteilung.
        </Typography>
        <Typography paragraph>
          Wie in den letzten Jahren kommt nur das jeweils beste Blattl in die
          Wertung. Das LP-Blattl wird mit einem Faktor umgerechnet und mit in
          die LG Wertung aufgenommen. Das heißt, dass LG/LP eine Wertungstabelle
          bekommt. (Ausser es sind genug LP Schützen dabei, dann sind sie in
          einer eigenen Wertungstabelle.)
        </Typography>
      </Box>
      <Box>
        <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 1 }}>
          Königsschießen auf den Adler
        </Typography>
        <Typography paragraph>
          Das traditionelle <strong>Königsschießen auf den Adler</strong> findet
          am
        </Typography>
        <Box sx={{ paddingLeft: 2, padding: 2 }}>
          <Typography variant="h6">
            <strong>Samstag, den 21.11.2026 ab 14:00 Uhr</strong>
          </Typography>
        </Box>
        <Typography paragraph sx={{ marginTop: 1 }}>
          Beginnend mit der Jugend und um ca.15.00 Uhr startet die
          Schützenklasse. In diesem Rahmen wird auch der Robin Hood
          ausgeschossen.
        </Typography>
      </Box>
      <Box>
        <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 1 }}>
          Königsfeier
        </Typography>
        <Typography paragraph>
          Die <strong>Königsfeier</strong> mit Proklamation des Schützenkönigs
          und seiner beiden Ritter beginnt am
        </Typography>
        <Box sx={{ paddingLeft: 2, padding: 2 }}>
          <Typography variant="h6">
            <strong>Samstag, den 28.11.2026 ab 19:00 Uhr</strong>
          </Typography>
          <Typography variant="body2" sx={{ marginTop: 1 }}>
            <strong>Sportheim Eisenbach</strong>
          </Typography>
        </Box>
        <Typography paragraph sx={{ marginTop: 1 }}>
          Alle Preise des Wettschießens werden im Laufe des Abends in der
          ermittelten Reihenfolge an die <strong>anwesenden</strong> Schützen
          verteilt.
        </Typography>
      </Box>
      <Box sx={{ padding: 2, marginTop: 2 }}>
        <Typography paragraph>
          Die Vorstandschaft freut sich auf Ihre Anwesenheit und eine rege
          Beteiligung an den Wettbewerben!
        </Typography>
        <Typography>
          <strong>Mit Schützengrüßen</strong>
        </Typography>
        <Typography>
          <strong>Die Vorstandschaft der Schützengesellschaft Eisenbach</strong>
        </Typography>
      </Box>
    </Stack>
  )
}
