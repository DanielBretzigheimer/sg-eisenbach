import { Stack, Typography } from "@mui/material"
import { CaptionImage } from "../../../controls/CaptionImage"
import { ImageCarousel } from "../../../controls/ImageCarousel"

export function SummerHolidayProgram2026() {
  return (
    <Stack gap={1.5}>
      <CaptionImage
        src="images/pages/events/2026/summer-holiday-program/summer-holiday-program-cover-image.jpeg"
        title="Sommerferienspiele 2026 am Schützenhaus"
      />
      <Typography>
        Am Donnerstag, den 13. August 2026, war im Rahmen der Sommerferienspiele
        der Stadt Obernburg am Main wieder einiges am Schützenhaus geboten. Neun
        Kinder und Jugendliche im Alter von 8 bis 14 Jahren fanden sich um 15
        Uhr ein, um einen abwechslungsreichen Nachmittag rund um{" "}
        <strong>Bogen und Blasrohr</strong> zu erleben.
      </Typography>
      <Typography>
        Nach einer kurzen Begrüßung wurde zunächst der Ablauf des Nachmittags
        erklärt. Anschließend ging es bei einer kleinen Führung durch und rund
        um das Schützenhaus auf Entdeckungstour. Dabei erhielten die Teilnehmer
        interessante Einblicke in die verschiedenen Schießstände und die
        zahlreichen Disziplinen, die im Schützenhaus ausgeübt werden. Von
        Luftgewehr und Luftpistole über Lichtgewehr und Lichtpistole bis hin zu
        Kleinkaliber- und Großkaliberdisziplinen, Bogen und Blasrohr gab es
        dabei einiges zu entdecken.
      </Typography>
      <Typography>
        Danach wurde die Gruppe in zwei kleinere Teams mit vier beziehungsweise
        fünf Teilnehmern aufgeteilt. Nun durfte selbst ausprobiert werden:
        Während die eine Gruppe erste Übungen mit dem Bogen absolvierte, machte
        sich die andere mit dem Blasrohr vertraut. Nach den Übungen wurde es
        spannend, denn im anschließenden Wettkampf galt es, jeweils{" "}
        <strong>fünf Pfeile beziehungsweise fünf Nadeln</strong> möglichst
        treffsicher ins Ziel zu bringen.
      </Typography>
      <Typography>
        Anschließend wurden die Gruppen getauscht. Wer zuvor mit dem Bogen
        geschossen hatte, wechselte zum Blasrohr und umgekehrt. Nach einer
        weiteren kurzen Übungsphase folgte auch hier der Wettkampf mit jeweils
        fünf Pfeilen beziehungsweise fünf Nadeln.
      </Typography>
      <Typography>
        Zwischen den einzelnen Stationen blieb natürlich auch Zeit für eine
        kleine Erfrischung. Für alle Kinder und Jugendlichen standen kostenlos
        Getränke bereit.
      </Typography>
      <Typography>
        Nachdem alle Ergebnisse ausgewertet waren, folgte schließlich die mit
        Spannung erwartete Siegerehrung. Für den dritten und zweiten Platz gab
        es jeweils eine Medaille, während sich der Erstplatzierte über einen
        Pokal freuen durfte. Doch auch alle anderen gingen nicht leer aus: Für
        jedes Kind gab es eine kleine Tüte mit verschiedenen Kleinigkeiten wie
        Süßigkeiten, Stickern und Kindertattoos.
      </Typography>
      <Typography>
        Zum gemütlichen Abschluss ließ die Gruppe den ereignisreichen Nachmittag
        noch gemeinsam vor dem Schützenhaus ausklingen. Gegen 18 Uhr endete die
        Veranstaltung und die Kinder wurden von ihren Eltern abgeholt.
      </Typography>
      <Typography>
        Ein abwechslungsreicher Nachmittag mit viel Spaß, spannenden Eindrücken
        und jeder Menge Gelegenheit,{" "}
        <strong>Bogen und Blasrohr selbst auszuprobieren</strong>, ging damit zu
        Ende.
      </Typography>
      <ImageCarousel
        images={[
          "images/pages/events/2026/summer-holiday-program/summer-holiday-program-image-1.jpeg",
          "images/pages/events/2026/summer-holiday-program/summer-holiday-program-image-2.jpeg",
          "images/pages/events/2026/summer-holiday-program/summer-holiday-program-image-3.jpeg",
          "images/pages/events/2026/summer-holiday-program/summer-holiday-program-image-4.jpeg",
          "images/pages/events/2026/summer-holiday-program/summer-holiday-program-image-5.jpeg",
          "images/pages/events/2026/summer-holiday-program/summer-holiday-program-image-6.jpeg",
        ]}
      />
    </Stack>
  )
}
