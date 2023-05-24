import { Card, CardContent, Stack, Typography } from "@suid/material"
import { CaptionImage } from "../../../controls/CaptionImage"

export function SummerBiathlon2023() {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Informationen rund um den Sommerbiathlon 2023
      </Typography>
      <Stack gap={2}>
        <Card>
          <CardContent>
            <Typography variant="h6">Veranstaltungsort:</Typography>
            <Typography>- Rund um das Schützenhaus auf der Hardt.</Typography>
            <Typography>
              - Der Schießstand befindet sich gegenüber dem Schützenhaus.{" "}
            </Typography>
            <Typography>
              - Der Bogenstand befindet am Ende der Schießanlagen am Waldrand.
            </Typography>
            <Typography>
              - Die Laufstrecke (einfach 80m) führt ausschließlich rund um das
              Schützenhaus
            </Typography>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Typography variant="h6">Teilnahmebedingungen:</Typography>
            <Typography>
              - Der Sommerbiathlon wird als Mannschaftswettbewerb bzw.
              Staffelwettbewerb ausgetragen.
            </Typography>
            <Typography>
              - Eine Mannschaft besteht aus 3 Teilnehmern (gerne auch als
              Mixed).
            </Typography>
            <Typography>
              - Mannschaftsübergreifende Mehrfachstarter sind möglich.
            </Typography>
            <Typography>
              - Mannschaften können mehrfach starten, vorausgesetzt es wird
              mindestens ein neuer Starter
            </Typography>
            <Typography>eingesetzt.</Typography>
            <Typography>
              - Die Teilnahmegebühr je Mannschaft beträgt 6 €.
            </Typography>
            <Typography>
              - Eine Altersbegrenzung nach oben und unten gibt es nicht.
            </Typography>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Typography variant="h6">
              Austragungsmodus je Mannschaft:
            </Typography>
            <Typography>
              - Geschossen wird mit dem Lichtgewehr liegend aufgelegt, und dem
              Bogen. Distanz jeweils 10m.
            </Typography>
            <Typography>
              - Starter 1 beginnt nach dem Startschuss mit dem ersten Schießen
              (5 Schuss Lichtgewehr)
            </Typography>
            <Typography>- Anschließend erste Laufrunde.</Typography>
            <Typography>
              - Auf halber Strecke auf dem Bogenstand 3 Pfeile mit dem Bogen.
            </Typography>
            <Typography>
              - Wieder am Schützenhaus angekommen zweites Schießen (5 Schuss
              Lichtgewehr).
            </Typography>
            <Typography>- Anschließend zweite Laufrunde.</Typography>
            <Typography>
              - Auf halber Strecke auf dem Bogenstand 3 Pfeile mit dem Bogen
            </Typography>
            <Typography>
              - Wieder am Schützenhaus angekommen wird an den nächsten Starter
              übergeben.
            </Typography>
            <Typography>
              - Der Ablauf beginnt von vorne und ist bei jedem der 3 Starter
              gleich.
            </Typography>
            <Typography>
              - Gemessen wird die Gesamtzeit, beginnend mit dem Start des ersten
              Starters und Ende der zweiten Laufrunde des dritten Starters.
            </Typography>
            <Typography>
              - Jeder Fehlschuss mit dem Lichtgewehr wird mit einem Zeitzuschlag
              (an Stelle von Strafrunden) von 15 Sekunden „belohnt“.
            </Typography>
            <Typography>
              - Jeder mit dem Bogen geschossene Pfeil im blauen Ring wird mit
              Zeitabzug von 5 Sekunden belohnt;
            </Typography>
            <Typography>
              - Jeder mit dem Bogen geschossene Pfeil im roten Ring wird mit
              Zeitabzug von 10 Sekunden belohnt;
            </Typography>
            <Typography>
              - Jeder mit dem Bogen geschossene Pfeil im Gold (gelber Ring) wird
              mit Zeitabzug von 15 Sekunden belohnt;
            </Typography>
            <Typography>
              - Die Mannschaft mit der niedrigsten Gesamtzeit ist der Sieger in
              diesem Mannschaftswettbewerb
            </Typography>
          </CardContent>
        </Card>
        <CaptionImage src="images/pages/events/2023/summer-biathlon/summer-biathlon-2023.jpg" />
      </Stack>
    </>
  )
}
