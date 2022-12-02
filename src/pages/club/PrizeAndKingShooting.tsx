import { Grid, Typography } from "@suid/material"

export function PrizeAndKingShooting() {
  return (
    <Grid container mt={2} spacing={2}>
      <Grid item xs={12}>
        <Typography gutterBottom variant="h4">
          Preisschießen
        </Typography>
        <Typography gutterBottom>
          Unser Preisschießen findet Ende jeden Jahres statt. Dabei wird in den
          Disziplinen Luftgewehr, Luftpistole, Sportpistole und Bogen um den
          besten Teiler bzw. Abstand zum Mittelpunkt der Scheibe geschossen. Für
          die besten Schützen gibt es an unserer Königsfeier verschiedene Preise
          zur Auswahl. Die Preise können während der Zeit des Preisschießens im
          Schützenhaus angesehen werden. Die Verteilung findet auf der
          Königsfeier nach Ende des Preisschießens statt.
        </Typography>
        <Typography>
          Zusätzlich wird während des Preisschießens auch unser Wanderpokal
          ausgeschossen. Hierzu erhält jeder Schütze in der Einlage fünf Schuss,
          von denen später einer ausgewürfelt und ausgewertet wird. Die Schüsse
          für den Wanderpokal sind verdeckt und können nicht eingesehen werden.
          Gewinner ist der Schütze, der am Ende beim ausgewürfelten Schuss den
          besten Teiler vorweisen kann.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography gutterBottom variant="h4">
          Königsschießen
        </Typography>
        <Typography>
          Das Königsschießen findet eine Woche vor unserer Königsfeier statt.
          Hierbei sind alle Mitglieder herzlich eingeladen beim traditionellen
          Schuss auf den Adler teilzunehmen. Zu Beginn wird die Reihenfolge der
          Schützen ausgelost und anschließend hat jeder Schütze einen Schuss um
          zu versuchen den Adler zu Fall zu bringen. Für unsere Jugend gibt es
          immer ein separates Motiv wie z.B. einen Drachen. Die Proklamation des
          Schützenkönigs findet eine Woche später auf der Königsfeier statt.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography gutterBottom variant="h4">
          Königsfeier
        </Typography>
        <Typography>
          Auf der Königsfeier findet die Proklamation des Schützenkönigs und
          seiner beiden Ritter statt. Zusätzlich erfolgt hier im Laufe des
          Abends die Verteilung der Preise aus dem Preisschießen und die Vergabe
          des Wanderpokals.
        </Typography>
      </Grid>
    </Grid>
  )
}
