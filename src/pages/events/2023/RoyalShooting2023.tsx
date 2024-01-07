import { Stack, Typography } from "@mui/material"
import { CaptionImage } from "../../../controls/CaptionImage"
import { Royality } from "../../club/Royality"

export function RoyalShooting2023() {
  return (
    <Stack gap={1.5}>
      <Typography variant="h3">
        Ein majestätisches Fest der Schützengesellschaft Eisenbach:
        Königsschießen und Königsfeier 2023
      </Typography>
      <Typography>
        Eisenbach, den 15. November 2023 – In Schützenhaus der
        Schützengesellschaft Eisenbach fand am 15. November 2023 das
        alljährliche Königsschießen statt, gefolgt von der prächtigen
        Königsfeier am 9. Dezember 2023. Ein denkwürdiger Tag, der die
        Gemeinschaft zusammenbrachte und die neuen Regenten der Schützenkunst
        hervorbrachte.
      </Typography>
      <Typography>
        Die Spannung lag förmlich in der Luft, als die Schützen sich darauf
        vorbereiteten, ihre Fähigkeiten unter Beweis zu stellen und die
        begehrten Titel zu erringen. Das Königsschießen begann mit der Jugend,
        die sich mit großer Hingabe auf das Ziel konzentrierte. Dieses Jahr
        zierten die Holzfiguren Asterix und Obelix die Schießbahn für die jungen
        Schützen, während die Erwachsenen auf den traditionellen Holzadler
        zielten.
      </Typography>
      <CaptionImage
        src="images/pages/events/2023/royal-shooting/royal-shooting-youth.jpg"
        label="Schützenjugend"
      />
      <Typography>
        Die Ehre des Königs trug in diesem Jahr Jaroslav Rücker, der sich durch
        seine herausragende Treffsicherheit und Entschlossenheit auszeichnete.
        Das Publikum verfolgte gebannt, wie der Adler nur noch an einem kleinen
        Stück Holz hing, bevor er schließlich fiel und den neuen König
        proklamierte. An seiner Seite stehen Frank Sam als erster Ritter und
        Norber Börner als zweiter Ritter. Gemeinsam bilden sie das königliche
        Trio, das die Schützengesellschaft Eisenbach im kommenden Jahr
        repräsentieren wird.
      </Typography>
      <Typography>
        Auch die Jugend zeigte beeindruckende Leistungen, und Maksim Kaiser
        wurde zum Jugendkönig ernannt. Oskar Schlett übernahm die Rolle des
        ersten Ritters, gefolgt von Henri Graf als zweitem Ritter. Diese jungen
        Talente versprechen eine vielversprechende Zukunft für die Schützenkunst
        in Eisenbach.
      </Typography>
      <CaptionImage
        src="images/pages/events/2023/royal-shooting/royal-shooting-youth-winners.jpg"
        label="Schützenjugend"
      />
      <Typography>
        Die Königsfeier am 9. Dezember 2023 war der krönende Abschluss dieses
        festlichen Ereignisses. In festlicher Atmosphäre kamen Mitglieder der
        Schützengesellschaft zusammen, um die neuen Majestäten zu ehren. Ein
        köstliches Essen wurde serviert, und die Preise des Preisschießens
        wurden stolz verteilt.
      </Typography>
      <Typography>
        Die Schützengesellschaft Eisenbach hat erneut bewiesen, dass sie nicht
        nur eine traditionsreiche Gemeinschaft ist, sondern auch ein Ort, an dem
        Freundschaften geschmiedet und Talente gefördert werden. Das
        Königsschießen und die Königsfeier werden noch lange in den Herzen der
        Schützen von Eisenbach nachklingen, während sie sich auf das nächste
        Jahr voller spannender Herausforderungen und triumphaler Siege
        vorbereiten.
      </Typography>
      <Royality
        year="2023"
        image={{
          src: "images/pages/events/2023/royal-shooting/royal-family.jpg",
          caption:
            "v.l.n.r: Manuel Schott, Frank Sam, Jaroslav Rücker, Norber Börner, Wolfgang Heß vorne: Oskar Schlett, Maksim Kaiser, Henri Graf",
        }}
        adult={{
          king: "Jaroslav Rücker",
          firstKnight: "Frank Sam",
          secondKnight: "Norber Börner",
          robinHood: "Karl-Heinz Muschik",
        }}
        youth={{
          king: "Maksim Kaiser",
          firstKnight: "Oskar Schlett",
          secondKnight: "Henri Graf",
        }}
      />
    </Stack>
  )
}
