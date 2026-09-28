import { Box, Typography, Alert } from "@mui/material"
import { RoutePath } from "../../RoutePath"
import { useNavigate } from "react-router-dom"

export function MembershipFeeIncrease() {
  const nav = useNavigate()

  return (
    <Box mt={2} mb={4}>
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3 }}>
        Beitragserhöhung ab 2027
      </Typography>
      <Typography sx={{ mb: 1 }}>
        <strong>Liebe Mitglieder,</strong>
      </Typography>
      <Typography gutterBottom>
        an der letzten Jahreshauptversammlung wurde einstimmig beschlossen, den
        Mitgliedsbeitrag zu erhöhen.
      </Typography>
      <Box sx={{ mb: 3, lineHeight: 1.8 }}>
        <Typography paragraph>
          Daher möchten wir euch heute darüber informieren, dass sich der{" "}
          <strong>Mitgliedsbeitrag ab 2027 auf 50 € erhöht.</strong> (Abbuchung
          November 2026) Die Jugend ist von der Erhöhung ausgenommen.
        </Typography>
        <Typography paragraph>
          <strong>
            Von diesem Beitrag werden 5 € direkt für unsere Jugendarbeit
            verwendet.
          </strong>{" "}
          Damit möchten wir unsere jungen Mitglieder gezielt fördern und ihnen
          auch in Zukunft attraktive Angebote und Möglichkeiten bieten.
        </Typography>
        <Typography paragraph>
          Die Beitragserhöhung ist notwendig, um gestiegene Kosten, wie z.B.
          Abgabe an den BSSB und DSB, Energiekosten, usw. auszugleichen und
          unsere Angebote und Leistungen weiterhin zuverlässig aufrechterhalten
          zu können.
        </Typography>
        <Typography paragraph>
          Wir haben uns diese Entscheidung nicht leicht gemacht. Gleichzeitig
          ist es uns wichtig, mit dem zusätzlichen Beitrag nicht nur unsere
          laufenden Aufgaben zu sichern, sondern auch in die Zukunft des Vereins
          zu investieren.
        </Typography>
        <Typography paragraph>
          Wir danken euch herzlich für eure Unterstützung, euer Verständnis und
          eure Treue.
        </Typography>
        <Typography paragraph>
          Gemeinsam sorgen wir dafür, dass unser Verein auch für die nächste
          Generation ein Ort der Gemeinschaft bleibt.
        </Typography>
        <Typography paragraph>
          Bei Fragen zur Beitragserhöhung könnt ihr euch jederzeit gerne an uns
          wenden.
        </Typography>
      </Box>
      <Alert severity="success" sx={{ mt: 3 }}>
        <Typography variant="body2">
          Weitere Informationen zu den aktuellen Mitgliedsbeiträgen finden Sie
          auf unserer{" "}
          <strong>
            <Typography
              component="span"
              sx={{
                color: "primary.main",
                cursor: "pointer",
                textDecoration: "underline",
              }}
              onClick={() => nav(`/${RoutePath.Club}/join`)}
            >
              Beitrittseite
            </Typography>
          </strong>
          .
        </Typography>
      </Alert>
    </Box>
  )
}
