import {
  Box,
  Link,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@suid/material"

export function TrailShooting() {
  return (
    <Box mt={2}>
      <Typography variant="h3" gutterBottom>
        Schnuppertraining
      </Typography>
      <Typography gutterBottom>
        „Ziel des Sportschießens ist es, mit seinem Sportgerät die Mitte der
        Schießscheibe, durch Einklang von Körper und Geist, zu treffen.“{" "}
      </Typography>
      <Typography gutterBottom>
        Dieses erfordert viel Disziplin, Übung und Training, sowohl körperlich
        als auch mental.
      </Typography>
      <Typography>
        Ein unverbindliches Schnuppertraining ist jederzeit nach kurzer
        Terminabsprache zu unseren Öffnungs- und Trainingszeiten möglich. Wir
        führen euch gerne über unsere Anlage, welche folgende Möglichkeiten
        bietet um die <b>Faszination dieser olympischen Sportart</b> selbst zu
        erfahren:
      </Typography>
      <ul>
        <li>
          14 elektronische Stände (10 Meter) für Druckluftwaffen (Luftgewehr,
          Luftpistole).
        </li>
        <li>
          1 elektronischer Stand (10 Meter) für Licht-/Laserpunktschießen
          (Gewehr).
        </li>
        <li>4 elektronische Stände (50 Meter) für Kleinkalibergewehre.</li>
        <li>
          5 Stände (25 Meter) für Klein- und Großkaliberpistolen mit einer
          Duellanlage.
        </li>
        <li>
          Bogenplatz (10 bis 40 Meter) inkl. Flutlicht, im Winter in unserer
          Bogenhalle.
        </li>
      </ul>
      <Typography gutterBottom>
        Eine Einweisung in die Sicherheitsvorschriften und das gewählte
        Sportgerät gehört natürlich auch dazu.
      </Typography>
      <Typography gutterBottom>
        Die Schützengesellschaft Eisenbach 1958 e.V. verfügt über eine
        vielfältige Auswahl an Vereinswaffen für alle angebotenen Disziplinen um
        Gastschützen, Anfängern und Interessenten den Schießsport unter
        fachkundiger Anleitung näherbringen zu können.
      </Typography>
      <Typography>
        Folgende <b>Altersgrenzen und Regeln</b> sind zu beachten:
      </Typography>
      <ul>
        <li>Lichtpunktgewehr kann bei uns ab 6 Jahren geschossen werden.</li>
        <li>
          Kinder ab 12 Jahre dürfen Druckluftwaffen bei Anwesenheit oder mit
          schriftlicher Erlaubnis eines Erziehungsberechtigten schießen.
        </li>
        <li>
          Jugendliche ab 14 Jahre dürfen Kleinkaliberwaffen bei Anwesenheit oder
          mit schriftlicher Erlaubnis eines Erziehungsberechtigten schießen.
        </li>
        <li>
          Ab 18 Jahren stehen alle vorhandenen Kaliber frei zur Verfügung. Der
          Einstieg erfolgt in der Regel über Druckluftwaffen.
        </li>
      </ul>
      <Typography gutterBottom>
        Ein Altersnachweis ist immer erforderlich.
      </Typography>
      <Typography>
        Die Schieß-/Standgebühren betragen pro Person und Trainingseinheit:
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Luftdruckwaffen</TableCell>
            <TableCell>Feuerwaffen</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>für Gastschützen *</TableCell>
            <TableCell>2,50 €</TableCell>
            <TableCell>3,50 €</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>für Mitglieder</TableCell>
            <TableCell>1,00 €</TableCell>
            <TableCell>1,00 €</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>für Kinder und Jugendliche</TableCell>
            <TableCell>0,50 €</TableCell>
            <TableCell>-</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Typography variant="caption">* = inkl. Versicherung</Typography>
      <Typography gutterBottom>
        Hinzu kommen die Kosten für Diabolos (Luftdruckwaffen) bzw. Munition
        (Feuerwaffen). Munition für Feuerwaffen kann ausschließlich zum
        sofortigen Verbrauch auf den Schießstand erworben werden.
      </Typography>
      <Typography>
        Unsere <b>Sportleiter und Trainier</b> stehen bei Interesse und Fragen
        gerne zu Verfügung:
      </Typography>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>
              <Stack>
                <Typography>
                  <b>Christian Otterstedt</b>, Gesamtsportleiter
                </Typography>
                <Link href="mailto:sportleiter-gewehr@sg-eisenbach1958.de">
                  E-Mail
                </Link>
              </Stack>
            </TableCell>
            <TableCell>
              <Stack>
                <Typography>
                  <b>Daniel Bretzigheimer</b>, Jugendleiter
                </Typography>
                <Link href="mailto:1.jl@sg-eisenbach1958.de">E-Mail</Link>
              </Stack>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Stack>
                <Typography>
                  <b>Jochen Beez</b>, Sportleiter Pistole
                </Typography>
                <Link href="mailto:sportleiter-pistole@sg-eisenbach1958.de">
                  E-Mail
                </Link>
              </Stack>
            </TableCell>
            <TableCell>
              <Stack>
                <Typography>
                  <b>Manuel Schott</b>, Bogen
                </Typography>
                <Link href="mailto:info@sg-eisenbach1958.de">E-Mail</Link>
              </Stack>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  )
}
