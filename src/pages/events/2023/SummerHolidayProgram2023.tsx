import { Box, Stack, Typography } from "@mui/material"
import { CaptionImage } from "../../../controls/CaptionImage"

export function SummerHolidayProgram2023() {
  return (
    <>
      <Typography variant="h5">
        Sommerferienspiele bei der Schützengesellschaft Eisenbach bieten
        spannende Erfahrung im Bogen- und Blasrohrschießen für Kinder
      </Typography>
      <Typography>
        Die Stadt Obernburg öffnete in diesem Sommer ihre Türen für ein
        aufregendes Abenteuer im Rahmen der Sommerferienspiele. Mit dem Ziel,
        jungen Menschen eine unterhaltsame und lehrreiche Aktivität zu bieten,
        organisierten wir zwei aufregende Tage mit Bogen- und Blasrohrschießen.
        Die Veranstaltungen fanden am 09. August 2023 und am 23. August 2023
        statt.
      </Typography>
      <Typography variant="h6">
        Zielgenauigkeit im Fokus: Bogen- und Blasrohrschießen für Kinder
      </Typography>
      <Typography>
        Mit großer Begeisterung und Hingabe wurden die Sommerferienspiele in
        diesem Jahr von 19 Kindern im Alter von 8 bis 13 Jahren besucht. Der
        Schützenverein bot den jungen Teilnehmern die Möglichkeit, die Kunst des
        Bogen- und Blasrohrschießens kennenzulernen und ihre Zielgenauigkeit
        unter Beweis zu stellen. Unter der fachkundigen Anleitung erfahrener
        Schützen lernten die Kinder, wie man einen Bogen richtig hält, die
        Spannung kontrolliert und den Pfeil präzise auf das Ziel ausrichtet.
        Ebenso erhielten sie Einblicke in die Techniken des Blasrohrschießens,
        bei dem Konzentration und Präzision gleichermaßen gefragt sind.
      </Typography>
      <Box overflow="auto">
        <Stack direction="row" gap={1} minWidth={800}>
          <CaptionImage src="images/pages/events/2023/summer-holiday-program/IMG_6715.jpg" />
          <CaptionImage src="images/pages/events/2023/summer-holiday-program/IMG_6717.jpg" />
          <CaptionImage src="images/pages/events/2023/summer-holiday-program/IMG_6718.jpg" />
        </Stack>
      </Box>
      <Typography variant="h6">
        Spannender Wettkampf und strahlende Sieger
      </Typography>
      <Typography>
        Die Höhepunkte der Veranstaltungen waren zweifelsohne die Wettkämpfe,
        bei denen die jungen Schützen ihre neu erworbenen Fähigkeiten unter
        Beweis stellten. Mit gespannter Erwartung traten die Teilnehmer
        gegeneinander an, um ihre Zielgenauigkeit bei fünf Pfeilen Bogen und
        fünf Nadeln Blasrohr zu demonstrieren. Der Wettbewerb sorgte nicht nur
        für Spannung und Nervenkitzel, sondern auch für eine Atmosphäre der des
        sportlichen Geistes.
      </Typography>
      <Box overflow="auto">
        <Stack direction="row" gap={1} minWidth={500}>
          <CaptionImage src="images/pages/events/2023/summer-holiday-program/IMG_6719.jpg" />
          <CaptionImage src="images/pages/events/2023/summer-holiday-program/IMG_6720.jpg" />
          <CaptionImage src="images/pages/events/2023/summer-holiday-program/IMG_6723.jpg" />
        </Stack>
      </Box>
      <Typography variant="h6">
        Ehrung der Besten und süße Belohnungen für alle
      </Typography>
      <Typography>
        Am Ende eines ereignisreichen Tages wurden die besten Schützen des
        Wettbewerbs gebührend geehrt. Die besten Schützen durften sich hierbei
        ihre Preise aussuchen. Doch niemand ging leer aus - alle teilnehmenden
        Kinder erhielten eine Süßigkeitentüte als Anerkennung für ihre Teilnahme
        und ihre Bemühungen.
      </Typography>
      <Typography>
        Die beiden Termine, 09. August 2023 und 23. August 2023, waren ein
        großer Erfolg und hinterließen strahlende Kinderaugen sowie zufriedene
        Eltern. Wir planen auch in Zukunft solche spannenden Veranstaltungen
        anzubieten, um Kinder und Jugendliche in die Welt des Schießsports
        einzuführen und ihnen eine sinnvolle Freizeitbeschäftigung zu bieten.
      </Typography>
    </>
  )
}
