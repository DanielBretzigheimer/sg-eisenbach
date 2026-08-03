import { Box, Stack, Typography } from "@mui/material"
import { CaptionImage } from "../../../controls/CaptionImage"
import { ImageCarousel } from "../../../controls/ImageCarousel"

export function CityFestival2026() {
  return (
    <Stack gap={1.5}>
      <CaptionImage 
        src="images/pages/events/2026/city-festival/city-festival-cover-image.jpeg"
        title="Schützenvereine Eisenbach und Obernburg gemeinsam auf dem Altstadtfest"
      />
      <Typography>
        Am Sonntag, den 2. August 2026, waren der Schützenverein Eisenbach und
        der Schützenverein Obernburg wieder gemeinsam mit einem Schießstand auf
        dem Altstadtfest in Obernburg vertreten.
      </Typography>
      <Typography>
        Der Schießstand war wieder an seinem bewährten Platz in der Nähe des
        Rathauses und wurde von Mitgliedern beider Vereine gemeinsam betreut.
      </Typography>
      <Typography>
        Vor allem die jüngsten Besucherinnen und Besucher konnten dabei ihr
        Geschick unter Beweis stellen. Wie schon im vergangenen Jahr standen das
        beliebte Blasrohrschießen sowie das Biathlonschießen mit dem Lichtgewehr
        auf dem Programm. Darüber hinaus gab es in diesem Jahr eine besondere
        Neuerung: Erstmals konnten die Gäste nicht nur mit dem Lichtgewehr,
        sondern auch mit einer Lichtpistole ihr Können testen. Dank der neuen,
        elektronischen Trefferauswertung in der Lichtpunkttechnik, waren die
        Treffer direkt auf einem Monitor neben dem Schützen zu sehen.
      </Typography>
      <Typography>
        Die Kinder wurden für ihren Eifer mit kleinen Überraschungen belohnt.
        Bälle, Sticker, Schlüsselanhänger, Bonbons, Kindertattoos und viele
        weitere Goodies, zur Verfügung gestellt vom Bayerischen
        Sportschützenbund, sorgten zusätzlich für strahlende Gesichter.
      </Typography>
      <Typography>
        Obwohl sich der Stand in erster Linie an Kinder richtete, ließen sich
        auch viele Erwachsene die Gelegenheit nicht entgehen, die verschiedenen
        Disziplinen selbst auszuprobieren. Dabei konnten beide Vereine einige
        Interessenten für den Schießsport und das Vereinsleben gewinnen.
      </Typography>
      <Typography>
        Aufgrund der hohen Mittagstemperaturen blieb der große Besucherandrang
        zwar aus, dennoch war der Schießstand den ganzen Tag über durchweg gut
        besucht. Am Ende waren sich alle Beteiligten einig: Der gemeinsame
        Auftritt der Schützenvereine Eisenbach und Obernburg war ein voller
        Erfolg, zeigt die gute Zusammenarbeit beider Vereine und einer
        Wiederholung im kommenden Jahr steht aus Sicht der Verantwortlichen
        nichts im Wege.
      </Typography>
      <ImageCarousel
        images={[
          "images/pages/events/2026/city-festival/city-festival-image-1.jpeg",
          "images/pages/events/2026/city-festival/city-festival-image-2.jpg",
          "images/pages/events/2026/city-festival/city-festival-image-3.jpg",
          "images/pages/events/2026/city-festival/city-festival-image-4.jpg",
          "images/pages/events/2026/city-festival/city-festival-image-5.jpg",
        ]}
      />
    </Stack>
  )
}
